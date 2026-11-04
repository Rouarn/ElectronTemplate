/**
 * IPC 契约统一出口。
 * 主进程、preload、渲染进程都只从这里导入类型与常量。
 */
export * from './bridge'
export * from './channels'
export * from './contracts'
export * from './result'
export * from './validation'
