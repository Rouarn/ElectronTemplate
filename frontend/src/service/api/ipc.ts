/**
 * 定义主进程和渲染进程之间的通信通道
 */
const ipcApiRoute = {
  appUpdater: {
    checkForUpdater: 'controller/os/appUpdater/checkForUpdates',
    downloadApp: 'controller/os/appUpdater/downloadUpdate',
    quitAndInstall: 'controller/os/appUpdater/quitAndInstall',
    // 服务端推送状态的通道
    status: 'custom/app/updater',
  },
}

/**
 * 自定义通道
 * 格式：自定义（建议添加前缀）
 */
const specialIpcRoute = {
  appUpdater: 'custom/app/updater', // 更新频道
}

export { ipcApiRoute, specialIpcRoute }
