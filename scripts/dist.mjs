// electron-builder 包装入口：node scripts/dist.mjs --win --x64
// 原因：electron-builder 自身的工具二进制（nsis / fpm / linux-tools / 7zip）只读
// ELECTRON_BUILDER_BINARIES_MIRROR 环境变量，而 pnpm 不会把 .npmrc 的同名配置传给它，
// 默认会直连 github.com。本脚本在 spawn 前注入镜像环境变量，并统一指定配置文件，
// 透传所有参数与退出码，跨平台（macOS / Windows / Linux）通用。
//
// 镜像优先级：已有环境变量 > .npmrc 中的同名配置 > 默认 npmmirror。
import { spawn } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectDir = dirname(dirname(fileURLToPath(import.meta.url)))

const DEFAULT_ELECTRON_MIRROR = 'https://npmmirror.com/mirrors/electron/'
const DEFAULT_BUILDER_BINARIES_MIRROR = 'https://npmmirror.com/mirrors/electron-builder-binaries/'

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
  ELECTRON_MIRROR: process.env.ELECTRON_MIRROR || npmrc.electron_mirror || DEFAULT_ELECTRON_MIRROR,
  ELECTRON_BUILDER_BINARIES_MIRROR:
    process.env.ELECTRON_BUILDER_BINARIES_MIRROR || npmrc['electron-builder-binaries_mirror'] || DEFAULT_BUILDER_BINARIES_MIRROR,
}

console.log(`[dist] ELECTRON_MIRROR=${env.ELECTRON_MIRROR}`)
console.log(`[dist] ELECTRON_BUILDER_BINARIES_MIRROR=${env.ELECTRON_BUILDER_BINARIES_MIRROR}`)

const child = spawn('electron-builder', ['--config', 'electron-builder.config.cjs', ...process.argv.slice(2)], {
  cwd: projectDir,
  env,
  stdio: 'inherit',
  // Windows 上 electron-builder 是 .cmd，需要经过 shell 才能解析
  shell: process.platform === 'win32',
})

child.on('error', (error) => {
  console.error(`[dist] 启动 electron-builder 失败（请通过 pnpm run dist:* 调用）：${error.message}`)
  process.exit(1)
})

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
    return
  }
  process.exit(code ?? 1)
})
