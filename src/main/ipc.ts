import os from 'node:os'
import { app, BrowserWindow, dialog, ipcMain, nativeTheme, type IpcMainInvokeEvent } from 'electron'
import {
  assertOpenExternalPayload,
  assertOpenFileOptions,
  assertRendererErrorPayload,
  assertSaveFileOptions,
  assertThemePayload,
  IPC_CHANNELS,
  IPC_CHANNEL_LIST,
  IPC_ERROR_CODES,
  ipcFail,
  ipcOk,
  IpcValidationError,
  type AppInfo,
  type AppPaths,
  type IpcChannel,
  type IpcRequestMap,
  type IpcResponseMap,
  type PlatformName,
  type SystemInfo,
} from '@shared/ipc'
import { getLogDir, logger } from './logger'
import { isAllowedNavigation } from './settings'
import { openExternalSafely } from './security'
import { updaterService } from './updater'
import { getMainWindow } from './window'

interface HandlerDefinition<P, R> {
  /** 参数校验：返回归一化后的参数，非法时抛出 IpcValidationError */
  parse: (payload: unknown) => P
  handle: (payload: P, event: IpcMainInvokeEvent) => Promise<R> | R
}

type HandlerRegistry = {
  [K in IpcChannel]: HandlerDefinition<IpcRequestMap[K], IpcResponseMap[K]>
}

/** 无参数通道的解析器 */
const noPayload = (): undefined => undefined

function toPlatformName(): PlatformName {
  if (process.platform === 'darwin') return 'darwin'
  if (process.platform === 'win32') return 'win32'
  if (process.platform === 'linux') return 'linux'
  return 'other'
}

function resolveWindow(event: IpcMainInvokeEvent): BrowserWindow | null {
  const win = BrowserWindow.fromWebContents(event.sender)
  return win && !win.isDestroyed() ? win : null
}

const registry: HandlerRegistry = {
  [IPC_CHANNELS.appInfo]: {
    parse: noPayload,
    handle: (): AppInfo => ({
      name: app.getName(),
      version: app.getVersion(),
      electronVersion: process.versions.electron ?? '未知',
      chromeVersion: process.versions.chrome ?? '未知',
      nodeVersion: process.versions.node,
      platform: toPlatformName(),
      isPackaged: app.isPackaged,
      locale: app.getLocale(),
    }),
  },
  [IPC_CHANNELS.appPaths]: {
    parse: noPayload,
    handle: (): AppPaths => ({
      userData: app.getPath('userData'),
      logs: getLogDir() || app.getPath('logs'),
      home: app.getPath('home'),
      temp: app.getPath('temp'),
    }),
  },
  [IPC_CHANNELS.appOpenExternal]: {
    parse: assertOpenExternalPayload,
    handle: async (payload): Promise<void> => {
      await openExternalSafely(payload.url)
    },
  },
  [IPC_CHANNELS.appQuit]: {
    parse: noPayload,
    handle: (): void => {
      app.quit()
    },
  },
  [IPC_CHANNELS.appReportError]: {
    parse: assertRendererErrorPayload,
    handle: (payload, event): void => {
      // 渲染层异常统一落到主进程日志，避免只在 devtools 里可见
      logger.error('renderer', `渲染层异常（${payload.kind}）：${payload.message}`, {
        stack: payload.stack ?? '',
        source: payload.source ?? '',
        page: event.sender.getURL(),
      })
    },
  },
  [IPC_CHANNELS.windowMinimize]: {
    parse: noPayload,
    handle: (_payload, event): void => {
      resolveWindow(event)?.minimize()
    },
  },
  [IPC_CHANNELS.windowToggleMaximize]: {
    parse: noPayload,
    handle: (_payload, event): boolean => {
      const win = resolveWindow(event)
      if (!win) return false
      if (win.isMaximized()) win.unmaximize()
      else win.maximize()
      return win.isMaximized()
    },
  },
  [IPC_CHANNELS.windowClose]: {
    parse: noPayload,
    handle: (_payload, event): void => {
      resolveWindow(event)?.close()
    },
  },
  [IPC_CHANNELS.windowIsMaximized]: {
    parse: noPayload,
    handle: (_payload, event): boolean => Boolean(resolveWindow(event)?.isMaximized()),
  },
  [IPC_CHANNELS.windowSetTheme]: {
    parse: (payload: unknown) => ({ theme: assertThemePayload(payload) }),
    handle: (payload): void => {
      nativeTheme.themeSource = payload.theme
    },
  },
  [IPC_CHANNELS.dialogOpenFile]: {
    parse: assertOpenFileOptions,
    handle: async (options, event) => {
      const win = resolveWindow(event)
      const properties: Array<'openFile' | 'multiSelections'> = options.multiple ? ['openFile', 'multiSelections'] : ['openFile']
      const dialogOptions = {
        title: options.title,
        filters: options.filters,
        properties,
      }
      const result = win ? await dialog.showOpenDialog(win, dialogOptions) : await dialog.showOpenDialog(dialogOptions)
      return { canceled: result.canceled, paths: result.filePaths }
    },
  },
  [IPC_CHANNELS.dialogSaveFile]: {
    parse: assertSaveFileOptions,
    handle: async (options, event) => {
      const win = resolveWindow(event)
      const dialogOptions = {
        title: options.title,
        defaultPath: options.defaultPath,
        filters: options.filters,
      }
      const result = win ? await dialog.showSaveDialog(win, dialogOptions) : await dialog.showSaveDialog(dialogOptions)
      return { canceled: result.canceled, path: result.filePath ?? null }
    },
  },
  [IPC_CHANNELS.systemInfo]: {
    parse: noPayload,
    handle: (): SystemInfo => ({
      platform: toPlatformName(),
      arch: process.arch,
      cpuModel: os.cpus()[0]?.model ?? '未知',
      cpuCount: os.cpus().length,
      totalMemoryBytes: os.totalmem(),
      freeMemoryBytes: os.freemem(),
      hostname: os.hostname(),
      appUptimeSeconds: Math.round(process.uptime()),
      locale: app.getLocale(),
    }),
  },
  [IPC_CHANNELS.updaterCheck]: {
    parse: noPayload,
    handle: () => updaterService.check(),
  },
  [IPC_CHANNELS.updaterDownload]: {
    parse: noPayload,
    handle: () => updaterService.download(),
  },
  [IPC_CHANNELS.updaterInstall]: {
    parse: noPayload,
    handle: (): void => {
      updaterService.install()
    },
  },
}

/**
 * 来源校验：
 * 1. 必须是主框架（拒绝子 frame 调用）
 * 2. 必须来自我们自己的主窗口 webContents
 * 3. 当前 URL 必须命中导航白名单
 */
function isTrustedSender(event: IpcMainInvokeEvent): boolean {
  const frame = event.senderFrame
  if (!frame || frame.parent !== null) return false
  const win = getMainWindow()
  if (!win || win.isDestroyed() || event.sender !== win.webContents) return false
  return isAllowedNavigation(frame.url)
}

/** 注册全部 IPC 通道，统一做来源校验、参数校验与错误封装 */
export function registerIpcHandlers(): void {
  for (const channel of IPC_CHANNEL_LIST) {
    ipcMain.handle(channel, async (event, payload: unknown) => {
      if (!isTrustedSender(event)) {
        logger.warn('ipc', '已拒绝来源不可信的请求', { channel, frameUrl: event.senderFrame?.url ?? '未知' })
        return ipcFail(IPC_ERROR_CODES.untrustedSender, '请求来源不可信，已拒绝')
      }

      const definition = registry[channel] as HandlerDefinition<unknown, unknown>
      try {
        const args = definition.parse(payload)
        const data = await definition.handle(args, event)
        return ipcOk(data)
      } catch (error) {
        if (error instanceof IpcValidationError) {
          logger.warn('ipc', '参数校验失败', { channel, message: error.message })
          return ipcFail(IPC_ERROR_CODES.invalidArgument, error.message)
        }
        logger.error('ipc', '通道执行失败', {
          channel,
          error: error instanceof Error ? error.message : String(error),
        })
        return ipcFail(IPC_ERROR_CODES.internal, '主进程处理请求时发生错误')
      }
    })
  }

  logger.info('ipc', 'IPC 通道已注册', { count: IPC_CHANNEL_LIST.length })
}
