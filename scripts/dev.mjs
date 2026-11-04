import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
import fs from 'node:fs'
import net from 'node:net'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const require = createRequire(import.meta.url)
const electronBinary = require('electron')
const PORT_RANGE_START = 5173
const PORT_RANGE_END = 5180
const DEBOUNCE_MS = 300
const READY_TIMEOUT_MS = 90_000
const KILL_TIMEOUT_MS = 2_000

/** @type {import('node:child_process').ChildProcess | null} */
let rendererProcess = null
/** @type {import('node:child_process').ChildProcess | null} */
let electronProcess = null
/** @type {NodeJS.Timeout | null} */
let rebuildTimer = null
let shuttingDown = false

function log(message) {
  console.log(`[dev] ${message}`)
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/** 探测端口是否可被本机监听，避免把被其他项目占用的端口当成空闲 */
function isPortFree(port) {
  return new Promise((resolve) => {
    const server = net.createServer()
    server.once('error', () => resolve(false))
    server.once('listening', () => server.close(() => resolve(true)))
    server.listen(port, '127.0.0.1')
  })
}

/**
 * 选择渲染进程端口：
 * 1. 显式 DEV_PORT 优先，且必须可用
 * 2. 未指定时从 5173 起顺序探测，取第一个空闲端口
 */
async function selectPort() {
  const override = process.env.DEV_PORT
  if (override) {
    const port = Number(override)
    if (!Number.isInteger(port) || port < 1 || port > 65535) {
      throw new Error(`DEV_PORT 取值非法：${override}，应为 1-65535 的整数`)
    }
    if (!(await isPortFree(port))) {
      throw new Error(`DEV_PORT=${port} 已被占用，请换一个端口后重试`)
    }
    return port
  }
  for (let port = PORT_RANGE_START; port <= PORT_RANGE_END; port += 1) {
    if (await isPortFree(port)) return port
  }
  throw new Error(`${PORT_RANGE_START}-${PORT_RANGE_END} 均被占用，请用 DEV_PORT=xxxx pnpm dev 指定端口`)
}

function runOnce(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: rootDir, stdio: 'inherit' })
    child.on('exit', (code) => {
      if (code === 0) resolve(undefined)
      else reject(new Error(`${command} 退出码为 ${code}`))
    })
    child.on('error', reject)
  })
}

async function buildElectron() {
  await runOnce(process.execPath, [path.join(rootDir, 'scripts/build-electron.mjs')])
}

/**
 * 真正的就绪探测：轮询目标地址直到返回 2xx。
 * 端口在启动前已确认空闲，因此这里响应成功即代表我们自己启动的 vite 已监听。
 */
async function waitForRenderer(url, child) {
  const deadline = Date.now() + READY_TIMEOUT_MS
  while (Date.now() < deadline) {
    if (child.exitCode !== null) {
      throw new Error(`渲染进程服务启动失败（退出码 ${child.exitCode}），端口可能被其他进程抢占`)
    }
    try {
      const response = await fetch(url)
      if (response.ok) return
    } catch {
      // 端口尚未开始监听，继续等待
    }
    await delay(500)
  }
  throw new Error(`等待渲染进程服务超时：${url}`)
}

function startRenderer(port) {
  const command = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
  // strictPort 让 vite 在端口被抢占时立即失败，避免悄悄换端口导致 Electron 加载到错误地址
  rendererProcess = spawn(command, ['--filter', '@electron-template/frontend', 'dev', '--port', String(port), '--strictPort'], {
    cwd: rootDir,
    stdio: 'inherit',
    // POSIX 下建立独立进程组，退出时才能把 pnpm -> sh -> vp -> vite 整棵树一起清理
    detached: process.platform !== 'win32',
  })
  rendererProcess.on('exit', (code) => {
    if (shuttingDown) return
    log(`渲染进程服务已退出（退出码 ${code}），正在清理`)
    void shutdown(code ?? 1)
  })
  rendererProcess.on('error', (error) => {
    if (shuttingDown) return
    log(`渲染进程服务启动失败：${error.message}`)
    void shutdown(1)
  })
}

function startElectron(rendererUrl) {
  electronProcess = spawn(electronBinary, ['.'], {
    cwd: rootDir,
    stdio: 'inherit',
    env: { ...process.env, DEV_SERVER_URL: rendererUrl },
  })
  log(`Electron 进程已启动（PID ${electronProcess.pid}）`)
  electronProcess.on('exit', (code) => {
    if (shuttingDown) return
    log(`Electron 已退出（退出码 ${code}），正在清理`)
    void shutdown(code ?? 0)
  })
  electronProcess.on('error', (error) => {
    if (shuttingDown) return
    log(`Electron 启动失败：${error.message}`)
    void shutdown(1)
  })
}

function hasExited(child) {
  return child.exitCode !== null || child.signalCode !== null
}

/** 向进程（或整个进程组）发信号；Windows 下按需使用 taskkill /T 终止子树 */
function signalProcess(child, signal, useGroup) {
  if (!child?.pid) return
  if (process.platform === 'win32') {
    if (useGroup) spawn('taskkill', ['/pid', String(child.pid), '/T', '/F'], { stdio: 'ignore' })
    else child.kill(signal)
    return
  }
  if (useGroup) {
    try {
      process.kill(-child.pid, signal)
      return
    } catch {
      // 进程组不存在时退回单进程信号
    }
  }
  try {
    child.kill(signal)
  } catch {
    // 进程已不存在
  }
}

/** 先 SIGTERM，超时后 SIGKILL，确保不留下孤儿进程（渲染进程需按进程组清理） */
async function stopChild(child, useGroup) {
  if (!child || !child.pid || hasExited(child)) return
  const exited = new Promise((resolve) => child.once('exit', () => resolve(undefined)))
  signalProcess(child, 'SIGTERM', useGroup)
  await Promise.race([exited, delay(KILL_TIMEOUT_MS)])
  // 即使直接子进程已退出，也要补一次 SIGKILL 清理残留的孙进程（sh / vp / vite）
  signalProcess(child, 'SIGKILL', useGroup)
  await Promise.race([exited, delay(500)])
}

async function stopElectron() {
  const child = electronProcess
  electronProcess = null
  if (!child) return
  child.removeAllListeners('exit')
  await stopChild(child, false)
}

async function restartElectron() {
  log('检测到主进程代码变化，正在重启 Electron…')
  await stopElectron()
  try {
    await buildElectron()
    startElectron(rendererUrl)
  } catch (error) {
    log(`重建失败，等待下次修改：${error instanceof Error ? error.message : String(error)}`)
  }
}

function watchMainProcessSources() {
  const watchDirs = [path.join(rootDir, 'src'), path.join(rootDir, 'shared')]
  for (const dir of watchDirs) {
    if (!fs.existsSync(dir)) continue
    fs.watch(dir, { recursive: true }, (_event, filename) => {
      if (!filename) return
      if (!/\.(ts|mts|cts)$/.test(filename)) return
      if (rebuildTimer) clearTimeout(rebuildTimer)
      rebuildTimer = setTimeout(() => {
        rebuildTimer = null
        void restartElectron()
      }, DEBOUNCE_MS)
    })
  }
}

let rendererUrl = ''

/** 统一退出：无论哪个子进程异常，都先把另一个清理干净再按正确退出码结束 */
async function shutdown(code) {
  if (shuttingDown) return
  shuttingDown = true
  if (rebuildTimer) clearTimeout(rebuildTimer)
  const electron = electronProcess
  const renderer = rendererProcess
  electronProcess = null
  rendererProcess = null
  await Promise.all([stopChild(electron, false), stopChild(renderer, true)])
  process.exit(code)
}

process.on('SIGINT', () => {
  log('收到中断信号，正在关闭…')
  void shutdown(0)
})
process.on('SIGTERM', () => {
  void shutdown(0)
})

async function main() {
  const port = await selectPort()
  rendererUrl = `http://127.0.0.1:${port}`
  log(`使用渲染进程端口 ${port}`)

  log('启动渲染进程开发服务…')
  startRenderer(port)
  await waitForRenderer(rendererUrl, rendererProcess)
  log(`渲染进程服务就绪：${rendererUrl}`)

  log('构建主进程与 preload…')
  await buildElectron()

  log('启动 Electron…')
  startElectron(rendererUrl)
  watchMainProcessSources()
}

main().catch((error) => {
  console.error(`[dev] 启动失败：${error instanceof Error ? error.message : String(error)}`)
  void shutdown(1)
})
