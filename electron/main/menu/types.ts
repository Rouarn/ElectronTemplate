/**
 * 菜单相关类型定义
 * - MenuSection：构建单个菜单的工厂函数
 * - MenuTemplateBuilder：构建完整菜单模板的工厂函数
 */
export type MenuSection = (win?: Electron.CrossProcessExports.BrowserWindow) => Electron.MenuItemConstructorOptions

export type MenuTemplateBuilder = (win?: Electron.CrossProcessExports.BrowserWindow) => Electron.MenuItemConstructorOptions[]
