import { app, nativeImage } from 'electron'
import path from 'path'

/**
 * 从应用 `public/images` 目录加载图标
 * 返回有效的 `NativeImage`，无效则返回 `undefined`
 */
function img(...segments: string[]): Electron.NativeImage | undefined {
  const baseDir = path.join(app.getAppPath(), 'public', 'images')
  const p = path.join(baseDir, ...segments)
  const ni = nativeImage.createFromPath(p)
  return ni && !ni.isEmpty() ? ni : undefined
}

/**
 * 菜单图标集合（部分系统菜单可能不显示图标，如 macOS）
 */
export const icons: Record<string, Electron.NativeImage | undefined> = {
  menu: undefined,
  back: undefined,
  forward: undefined,
  devtools: img('tray.png'),
  about: undefined,
  website: undefined,
}
