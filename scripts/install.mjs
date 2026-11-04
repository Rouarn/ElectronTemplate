// 带国内镜像的依赖安装入口：node scripts/install.mjs
// 原因：pnpm 12 不会把 .npmrc 里的 electron_mirror 注入到生命周期脚本的环境变量里，
// 依赖安装阶段可能仍直连 github.com 下载二进制。
// 本脚本在 spawn 之前显式注入镜像环境变量，跨平台（macOS / Windows / Linux）通用。
//
// 另外：electron 45 起 package.json 里不再有 postinstall，只暴露 `install-electron` 命令，
// 所以 pnpm install 不会自动下载 Electron 二进制；本脚本在依赖装完后补跑一次 install.js。
//
// 镜像优先级：已有环境变量 > .npmrc 中的同名配置 > 默认 npmmirror。
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectDir = dirname(dirname(fileURLToPath(import.meta.url)))

const DEFAULT_ELECTRON_MIRROR = 'https://npmmirror.com/mirrors/electron/'
const DEFAULT_BUILDER_BINARIES_MIRROR = 'https://npmmirror.com/mirrors/electron-builder-binaries/'

/** 读取 .npmrc 里的 key=value（只取本项目需要的那两项，不解析复杂语法） */
function readNpmrc() {
  try {
    const content = readFileSync(join(projectDir, '.npmrc'), 'utf8')
    const result = {}
    for (const line of content.split('\n')) {
      const matched = /^\s*([A-Za-z0-9_.-]+)\s*=\s*(.*?)\s*$/.exec(line)
      if (matched) {
        result[matched[1]] = matched[2]
      }
    }
    return result
  } catch {
    return {}
  }
}

const npmrc = readNpmrc()
const env = {
  ...process.env,
  // Electron 二进制：@electron/get 同时读 ELECTRON_MIRROR 与 npm_config_electron_mirror
  ELECTRON_MIRROR: process.env.ELECTRON_MIRROR || npmrc.electron_mirror || DEFAULT_ELECTRON_MIRROR,
  // electron-builder 工具二进制（nsis / fpm / 7zip 等）
  ELECTRON_BUILDER_BINARIES_MIRROR:
    process.env.ELECTRON_BUILDER_BINARIES_MIRROR || npmrc['electron-builder-binaries_mirror'] || DEFAULT_BUILDER_BINARIES_MIRROR,
}

console.log(`[install] ELECTRON_MIRROR=${env.ELECTRON_MIRROR}`)
console.log(`[install] ELECTRON_BUILDER_BINARIES_MIRROR=${env.ELECTRON_BUILDER_BINARIES_MIRROR}`)

/**
 * electron 45 不再自带 postinstall，二进制需要显式安装。
 * 已经装过（存在 path.txt）就跳过，避免每次安装都重复下载。
 */
function installElectronBinary() {
  const installScript = join(projectDir, 'node_modules/electron/install.js')
  if (!existsSync(installScript)) {
    return 0
  }
  if (existsSync(join(projectDir, 'node_modules/electron/path.txt'))) {
    console.log('[install] Electron 二进制已存在，跳过下载')
    return 0
  }
  console.log('[install] 开始下载 Electron 二进制…')
  const result = spawnSync(process.execPath, [installScript], {
    cwd: dirname(installScript),
    env,
    stdio: 'inherit',
  })
  return result.status ?? 1
}

const child = spawn('pnpm', ['install', ...process.argv.slice(2)], {
  cwd: projectDir,
  env,
  stdio: 'inherit',
  // Windows 上 pnpm 是 .cmd，需要经过 shell 才能解析
  shell: process.platform === 'win32',
})

child.on('error', (error) => {
  console.error(`[install] 启动 pnpm 失败：${error.message}`)
  process.exit(1)
})

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
    return
  }
  if ((code ?? 1) !== 0) {
    process.exit(code ?? 1)
  }
  process.exit(installElectronBinary())
})
