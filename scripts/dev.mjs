import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const require = createRequire(import.meta.url)
const electronBinary = require('electron')
const PORT = Number(process.env.DEV_PORT ?? 5173)
const RENDERER_URL = `http://127.0.0.1:${PORT}`
const DEBOUNCE_MS = 300

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

function runOnce(command, args, options) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: rootDir, stdio: 'inherit', ...options })
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

async function waitForRenderer() {
  const deadline = Date.now() + 90_000
  while (Date.now() < deadline) {
    try {
      const response = await fetch(RENDERER_URL)
      if (response.ok) return
    } catch {
      // 端口尚未监听，继续等待
    }
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
  throw new Error(`等待渲染进程服务超时：${RENDERER_URL}`)
}

function startRenderer() {
  const command = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
  rendererProcess = spawn(command, ['--filter', '@electron-template/frontend', 'dev', '--port', String(PORT), '--strictPort'], {
    cwd: rootDir,
    stdio: 'inherit',
  })
  rendererProcess.on('exit', (code) => {
    if (!shuttingDown) {
      log(`渲染进程服务已退出（退出码 ${code}），开发流程终止`)
      shutdown(code ?? 0)
    }
  })
}

function startElectron() {
  electronProcess = spawn(electronBinary, ['.'], {
    cwd: rootDir,
    stdio: 'inherit',
    env: { ...process.env, ELECTRON_RENDERER_URL: RENDERER_URL },
  })
  electronProcess.on('exit', (code) => {
    if (shuttingDown) return
    log(`Electron 已退出（退出码 ${code}），同步关闭渲染进程服务`)
    shutdown(code ?? 0)
  })
}

async function stopElectron() {
  if (!electronProcess) return
  const child = electronProcess
  electronProcess = null
  child.removeAllListeners('exit')
  child.kill('SIGTERM')
  await new Promise((resolve) => {
    const timer = setTimeout(resolve, 3000)
    child.once('exit', () => {
      clearTimeout(timer)
      resolve(undefined)
    })
  })
}

async function restartElectron() {
  log('检测到主进程代码变化，正在重启 Electron…')
  await stopElectron()
  try {
    await buildElectron()
    startElectron()
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

function shutdown(code) {
  if (shuttingDown) return
  shuttingDown = true
  if (rebuildTimer) clearTimeout(rebuildTimer)
  if (electronProcess) electronProcess.kill('SIGTERM')
  if (rendererProcess) rendererProcess.kill('SIGTERM')
  setTimeout(() => process.exit(code), 500)
}

process.on('SIGINT', () => shutdown(0))
process.on('SIGTERM', () => shutdown(0))

async function main() {
  log('启动渲染进程开发服务…')
  startRenderer()
  await waitForRenderer()
  log(`渲染进程服务就绪：${RENDERER_URL}`)

  log('构建主进程与 preload…')
  await buildElectron()

  log('启动 Electron…')
  startElectron()
  watchMainProcessSources()
}

main().catch((error) => {
  console.error('[dev] 启动失败：', error)
  shutdown(1)
})
