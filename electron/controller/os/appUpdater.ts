import { appUpdaterService } from '../../service/os/appUpdater'
import { logger } from 'ee-core/log'

/**
 * 自动更新控制器
 * @class
 */
class AppUpdaterController {
  constructor() {
    logger.info('AppUpdaterController initialized')
  }

  /**
   * 检查更新
   */
  async checkForUpdates() {
    logger.info('AppUpdaterController.checkForUpdates called')
    appUpdaterService.checkUpdate()
  }

  /**
   * 下载更新
   */
  async downloadUpdate() {
    logger.info('AppUpdaterController.downloadUpdate called')
    appUpdaterService.download()
  }

  /**
   * 退出并安装更新
   */
  async quitAndInstall() {
    logger.info('AppUpdaterController.quitAndInstall called')
    appUpdaterService.quitAndInstall()
  }
}

AppUpdaterController.toString = () => '[class AppUpdaterController]'
export default AppUpdaterController
