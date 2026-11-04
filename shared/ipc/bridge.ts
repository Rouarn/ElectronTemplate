import type {
  AppInfo,
  AppPaths,
  MenuCommand,
  OpenFileOptions,
  OpenFileResult,
  OpenExternalPayload,
  SaveFileOptions,
  SaveFileResult,
  SystemInfo,
  ThemeMode,
  UpdaterStatus,
} from './contracts'

/** 取消监听函数 */
export type Unsubscribe = () => void

/**
 * preload 通过 contextBridge 暴露给渲染进程的唯一接口。
 * 浏览器环境下由 frontend/src/bridge/mock.ts 实现同一份接口，
 * 因此渲染层不需要区分运行环境即可通过类型检查。
 */
export interface DesktopBridge {
  readonly runtime: {
    readonly isElectron: boolean
    readonly platform: 'darwin' | 'win32' | 'linux' | 'other'
  }

  readonly app: {
    getInfo(): Promise<AppInfo>
    getPaths(): Promise<AppPaths>
    openExternal(payload: OpenExternalPayload): Promise<void>
    quit(): Promise<void>
  }

  readonly window: {
    minimize(): Promise<void>
    toggleMaximize(): Promise<boolean>
    close(): Promise<void>
    isMaximized(): Promise<boolean>
    setTheme(theme: ThemeMode): Promise<void>
    onMaximizedChange(listener: (maximized: boolean) => void): Unsubscribe
  }

  readonly dialog: {
    openFile(options?: OpenFileOptions): Promise<OpenFileResult>
    saveFile(options?: SaveFileOptions): Promise<SaveFileResult>
  }

  readonly system: {
    getInfo(): Promise<SystemInfo>
  }

  readonly updater: {
    check(): Promise<UpdaterStatus>
    download(): Promise<UpdaterStatus>
    install(): Promise<void>
    onStatus(listener: (status: UpdaterStatus) => void): Unsubscribe
  }

  readonly menu: {
    onCommand(listener: (command: MenuCommand) => void): Unsubscribe
  }
}
