/*************************************************
 ** preload为预加载模块，该文件将会在程序启动时加载 **
 *************************************************/

import { appUpdaterService } from '../service/os/appUpdater'
import { logger } from 'ee-core/log'

function preload() {
  logger.info('[preload] load 1')
  appUpdaterService.create()
}

/**
 * 预加载模块入口
 */
export { preload }
