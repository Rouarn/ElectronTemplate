import { icons as lucideIcons } from '@iconify-json/lucide'
import { defineConfig, presetIcons, presetWind4, transformerDirectives, transformerVariantGroup } from 'unocss'

/**
 * UnoCSS 配置：原子化样式按需生成，不引入任何全量样式包。
 * 图标使用本地 lucide 图标集，避免运行期访问外网。
 */
export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons({
      // 以函数形式返回本地图标集合：@iconify/utils 的 customCollections 需要 loader 函数
      collections: { lucide: async () => lucideIcons },
      scale: 1.15,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  // 使用 class 控制暗色模式，与 naive-ui 的主题切换保持一致
  dark: 'class',
  theme: {
    colors: {
      brand: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
      },
    },
  },
  shortcuts: {
    'app-card': 'rounded-2xl border border-solid border-[var(--app-border)] bg-[var(--app-surface)] shadow-[var(--app-shadow)]',
    'app-btn': 'inline-flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer select-none transition-all duration-200',
    'app-title': 'text-[var(--app-text)] font-600',
    'app-muted': 'text-[var(--app-text-2)]',
  },
})
