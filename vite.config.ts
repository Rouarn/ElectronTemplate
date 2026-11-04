import { defineConfig } from 'vite-plus'

/**
 * 仓库级工具链配置。
 *
 * 该文件不参与任何构建，只被 `vp lint` / `vp fmt` / `vp staged` 读取，
 * 目的是让整个仓库（主进程、preload、shared、frontend）共用一套
 * lint 与 format 规则，避免规则散落在多个配置文件里。
 */
export default defineConfig({
  fmt: {
    semi: false,
    singleQuote: true,
    printWidth: 140,
    trailingComma: 'all',
    arrowParens: 'always',
    endOfLine: 'lf',
  },
  lint: {
    ignorePatterns: ['dist/**', 'dist-electron/**', 'release/**', 'frontend/dist/**', 'node_modules/**', '**/node_modules/**', '*.min.js'],
  },
  staged: {
    '*.{js,jsx,ts,tsx,mts,cts,vue,json,jsonc,md,yml,yaml}': 'vp check --fix',
  },
})
