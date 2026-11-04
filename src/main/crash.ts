import { app, dialog, type WebContents } from 'electron'
import { logger } from './logger'

/**
 * 主进程兜底：任何未捕获异常都不能让进程静默退出。
 * 记录日志，并在窗口仍可用时给出可读提示。
 */
export function registerProcessGuards(): void {
  process.on('uncaughtException', (error: Error) => {
    logger.error('crash', '主进程未捕获异常', { name: error.name, message: error.message, stack: error.stack })
    if (app.isReady()) {
      dialog.showErrorBox('应用发生异常', `${error.name}: ${error.message}\n\n详细信息已写入日志，可在设置页查看日志目录。`)
    }
  })

  process.on('unhandledRejection', (reason: unknown) => {
    logger.error('crash', '主进程未处理的 Promise 拒绝', reason)
  })

  app.on('child-process-gone', (_event, details) => {
    logger.error('crash', '子进程异常退出', details)
  })
}

/**
 * 渲染进程崩溃兜底：给出「重新加载 / 退出」选择，避免白屏且无提示。
 */
export function watchRendererProcess(contents: WebContents): void {
  contents.on('render-process-gone', (_event, details) => {
    logger.error('crash', '渲染进程异常退出', details)
    if (details.reason === 'clean-exit') return

    void dialog
      .showMessageBox({
        type: 'error',
        title: '页面已崩溃',
        message: '渲染进程异常退出',
        detail: `原因：${details.reason}\n退出码：${details.exitCode}`,
        buttons: ['重新加载', '退出应用'],
        defaultId: 0,
        cancelId: 1,
      })
      .then((result) => {
        if (result.response === 0) {
          contents.reload()
          return
        }
        app.quit()
      })
  })
}
