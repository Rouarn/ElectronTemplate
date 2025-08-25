import { h } from 'vue'
import { createDiscreteApi } from 'naive-ui'
import { ipc } from './ipcRenderer'
import pkg from '~/package.json'

// 样式常量
const styles = {
  container:
    'padding: 24px; border-radius: 12px; background: linear-gradient(135deg, #ffffff, #f5f7fa); box-shadow: 0 8px 24px rgba(0,0,0,0.05); position: relative; overflow: hidden;',
  decorTop:
    'position: absolute; top: -30px; right: -30px; width: 120px; height: 120px; border-radius: 50%; background: radial-gradient(circle, rgba(32,128,240,0.1) 0%, rgba(32,128,240,0) 70%);',
  decorBottom:
    'position: absolute; bottom: -20px; left: -20px; width: 100px; height: 100px; border-radius: 50%; background: radial-gradient(circle, rgba(24,160,88,0.1) 0%, rgba(24,160,88,0) 70%);',
  headerSection:
    'display: flex; flex-direction: column; align-items: center; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid rgba(0,0,0,0.06); position: relative;',
  logo: 'width: 64px; height: 64px; border-radius: 16px; background: linear-gradient(135deg, #2080f0, #1060c0); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(32,128,240,0.3);',
  logoText: 'color: white; font-size: 28px; font-weight: bold;',
  appName:
    'font-size: 24px; font-weight: bold; color: #303133; margin-bottom: 8px; background: linear-gradient(to right, #2080f0, #1060c0); -webkit-background-clip: text; -webkit-text-fill-color: transparent;',
  versionBadge:
    'font-size: 14px; color: #18a058; font-weight: 500; background-color: rgba(24,160,88,0.1); padding: 4px 12px; border-radius: 12px; box-shadow: 0 2px 6px rgba(24,160,88,0.15);',
  cardsContainer: 'display: flex; flex-direction: column; gap: 12px;',
  card: 'background-color: #ffffff; padding: 14px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); border: 1px solid rgba(32,128,240,0.1); transition: all 0.3s ease;',
  cardContent: 'display: flex; align-items: center;',
  iconContainer:
    'width: 32px; height: 32px; border-radius: 8px; background-color: rgba(32,128,240,0.1); display: flex; align-items: center; justify-content: center; margin-right: 12px;',
  icon: 'color: #2080f0; font-weight: bold; font-size: 16px;',
  textContainer: 'flex: 1; overflow: hidden;',
  label: 'font-size: 13px; color: #909399; margin-bottom: 2px;',
  value: 'color: #303133; font-weight: 500;',
  link: 'color: #2080f0; text-decoration: none; font-weight: 500; cursor: pointer; display: block; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;',
  footer: 'margin-top: 20px; text-align: center; font-size: 12px; color: #909399;',
}

/**
 * 创建信息卡片组件
 */
function createInfoCard(icon: string, label: string, value: string, onClick: (() => void) | null = null) {
  return h('div', { style: styles.card }, [
    h('div', { style: styles.cardContent }, [
      h('div', { style: styles.iconContainer }, [h('div', { style: styles.icon }, icon)]),
      h('div', { style: onClick ? styles.textContainer : 'flex: 1;' }, [
        h('div', { style: styles.label }, label),
        onClick ? h('div', { style: styles.link, onClick }, value) : h('div', { style: styles.value }, value),
      ]),
    ]),
  ])
}

/**
 * 创建关于对话框内容
 */
function createAboutDialogContent() {
  const currentYear = new Date().getFullYear()
  const authorName = typeof pkg.author === 'object' && pkg.author.name ? pkg.author.name : pkg.name
  const homepage = pkg.homepage || 'https://github.com/Rouarn/Electron-template'

  return h('div', { style: styles.container }, [
    // 背景装饰
    h('div', { style: styles.decorTop }),
    h('div', { style: styles.decorBottom }),

    // 标题和版本区域
    h('div', { style: styles.headerSection }, [
      // Logo区域
      h('div', { style: styles.logo }, [h('div', { style: styles.logoText }, pkg.name.charAt(0).toUpperCase())]),

      // 应用名称
      h('div', { style: styles.appName }, pkg.name),

      // 版本号
      h('div', { style: 'display: flex; align-items: center; gap: 8px;' }, [
        h('div', { style: styles.versionBadge }, `版本 v${pkg.version}`),
      ]),
    ]),

    // 信息卡片容器
    h('div', { style: styles.cardsContainer }, [
      // 构建时间卡片
      createInfoCard('⏱', '构建时间', typeof BUILD_TIME !== 'undefined' ? BUILD_TIME : '未知'),

      // 项目地址卡片
      createInfoCard('🔗', '项目地址', homepage, () => {
        if (ipc) {
          // a 链接
          const a = document.createElement('a')
          a.href = homepage
          a.target = '_blank'
          a.rel = 'noopener noreferrer'
          a.click()
          a.remove()
        } else {
          // 浏览器打开
          window.open(homepage, '_blank')
        }
      }),
    ]),

    // 底部版权信息
    h('div', { style: styles.footer }, `© ${currentYear} ${authorName}. All rights reserved.`),
  ])
}

/**
 * 初始化IPC事件监听
 */
export function setupIpcEvents() {
  if (!ipc) return

  // 监听菜单"关于"事件
  ipc.on('menuAbout', () => {
    const { dialog } = createDiscreteApi(['dialog'])
    dialog.info({
      title: '关于',
      content: createAboutDialogContent,
      positiveText: '确定',
    })
  })

  // 监听菜单"检查更新"事件
  ipc.on('menuCheckUpdate', () => {
    const { message } = createDiscreteApi(['message'])
    message.info('正在检查更新...', { duration: 3000 })
    // 这里可以添加实际的检查更新逻辑
  })
}

/**
 * 清理IPC事件监听
 */
export function cleanupIpcEvents() {
  if (!ipc) return
  ipc.removeAllListeners('menuAbout')
  ipc.removeAllListeners('menuCheckUpdate')
}
