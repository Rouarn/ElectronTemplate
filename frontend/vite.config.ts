import path from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite-plus'

const currentDir = path.dirname(fileURLToPath(import.meta.url))

/**
 * 渲染进程构建配置。
 * 开发与构建都通过 `vp`（vite-plus）驱动，因此这里不再单独声明 lint / fmt。
 */
export default defineConfig({
  // 使用相对路径，保证 app:// 自定义协议下资源可正确解析
  base: './',
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': path.resolve(currentDir, 'src'),
      '@shared': path.resolve(currentDir, '../shared'),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    // 允许读取仓库根目录的 shared 契约
    fs: {
      allow: [path.resolve(currentDir, '..')],
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'chrome130',
    sourcemap: false,
  },
})
