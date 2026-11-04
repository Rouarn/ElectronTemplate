import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(rootDir, 'dist-electron')
const production = process.argv.includes('--production')

// 只清理自己的产物目录，不触碰其它文件
fs.rmSync(distDir, { recursive: true, force: true })

/** 主进程与 preload 共用的打包参数 */
const sharedOptions = {
  bundle: true,
  platform: 'node',
  target: 'node22',
  format: 'cjs',
  logLevel: 'info',
  sourcemap: production ? false : 'inline',
  minify: production,
  metafile: false,
  alias: {
    '@shared': path.join(rootDir, 'shared'),
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development'),
  },
}

await Promise.all([
  build({
    ...sharedOptions,
    entryPoints: [path.join(rootDir, 'src/main/index.ts')],
    outfile: path.join(distDir, 'main/index.cjs'),
    // electron-updater 内部有动态 require，保持外置由 electron-builder 打进去
    external: ['electron', 'electron-updater'],
  }),
  build({
    ...sharedOptions,
    entryPoints: [path.join(rootDir, 'src/preload/index.ts')],
    outfile: path.join(distDir, 'preload/index.cjs'),
    external: ['electron'],
  }),
])

console.log(`[build-electron] 主进程与 preload 构建完成（${production ? '生产' : '开发'}模式）`)
