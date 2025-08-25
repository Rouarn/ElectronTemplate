import { h } from 'vue'
import { createDiscreteApi } from 'naive-ui'
import { ipc } from './ipcRenderer'
import pkg from '~/package.json'

/**
 * 初始化IPC事件监听
 */
export function setupIpcEvents() {
  if (!ipc) return

  // 监听菜单"关于"事件
  ipc.on('menuAbout', () => {
    // 创建独立的消息API
    const { dialog } = createDiscreteApi(['dialog'])

    // 显示关于对话框
    dialog.info({
      title: '关于',
      content: () => {
        return h(
          'div',
          {
            style:
              'padding: 24px; border-radius: 12px; background: linear-gradient(135deg, #ffffff, #f5f7fa); box-shadow: 0 8px 24px rgba(0,0,0,0.05); position: relative; overflow: hidden;',
          },
          [
            // 背景装饰元素
            h('div', {
              style:
                'position: absolute; top: -30px; right: -30px; width: 120px; height: 120px; border-radius: 50%; background: radial-gradient(circle, rgba(32,128,240,0.1) 0%, rgba(32,128,240,0) 70%);',
            }),
            h('div', {
              style:
                'position: absolute; bottom: -20px; left: -20px; width: 100px; height: 100px; border-radius: 50%; background: radial-gradient(circle, rgba(24,160,88,0.1) 0%, rgba(24,160,88,0) 70%);',
            }),

            // 标题和版本区域
            h(
              'div',
              {
                style:
                  'display: flex; flex-direction: column; align-items: center; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid rgba(0,0,0,0.06); position: relative;',
              },
              [
                // Logo区域（如果有logo可以在这里添加）
                h(
                  'div',
                  {
                    style:
                      'width: 64px; height: 64px; border-radius: 16px; background: linear-gradient(135deg, #2080f0, #1060c0); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(32,128,240,0.3);',
                  },
                  [
                    h(
                      'div',
                      {
                        style: 'color: white; font-size: 28px; font-weight: bold;',
                      },
                      pkg.name.charAt(0).toUpperCase(),
                    ),
                  ],
                ),

                // 应用名称
                h(
                  'div',
                  {
                    style:
                      'font-size: 24px; font-weight: bold; color: #303133; margin-bottom: 8px; background: linear-gradient(to right, #2080f0, #1060c0); -webkit-background-clip: text; -webkit-text-fill-color: transparent;',
                  },
                  pkg.name,
                ),

                // 版本号
                h(
                  'div',
                  {
                    style: 'display: flex; align-items: center; gap: 8px;',
                  },
                  [
                    h(
                      'div',
                      {
                        style:
                          'font-size: 14px; color: #18a058; font-weight: 500; background-color: rgba(24,160,88,0.1); padding: 4px 12px; border-radius: 12px; box-shadow: 0 2px 6px rgba(24,160,88,0.15);',
                      },
                      `版本 v${pkg.version}`,
                    ),
                  ],
                ),
              ],
            ),

            // 信息卡片容器
            h(
              'div',
              {
                style: 'display: flex; flex-direction: column; gap: 12px;',
              },
              [
                // 构建时间卡片
                h(
                  'div',
                  {
                    style:
                      'background-color: #ffffff; padding: 14px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); border: 1px solid rgba(32,128,240,0.1); transition: all 0.3s ease;',
                  },
                  [
                    h('div', { style: 'display: flex; align-items: center;' }, [
                      // 图标区域
                      h(
                        'div',
                        {
                          style:
                            'width: 32px; height: 32px; border-radius: 8px; background-color: rgba(32,128,240,0.1); display: flex; align-items: center; justify-content: center; margin-right: 12px;',
                        },
                        [
                          // 这里可以用图标字体或SVG，这里用文字代替
                          h('div', { style: 'color: #2080f0; font-weight: bold; font-size: 16px;' }, '⏱'),
                        ],
                      ),
                      h('div', { style: 'flex: 1;' }, [
                        h('div', { style: 'font-size: 13px; color: #909399; margin-bottom: 2px;' }, '构建时间'),
                        h('div', { style: 'color: #303133; font-weight: 500;' }, BUILD_TIME || '未知'),
                      ]),
                    ]),
                  ],
                ),

                // 项目地址卡片
                h(
                  'div',
                  {
                    style:
                      'background-color: #ffffff; padding: 14px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); border: 1px solid rgba(32,128,240,0.1); transition: all 0.3s ease;',
                  },
                  [
                    h('div', { style: 'display: flex; align-items: center;' }, [
                      // 图标区域
                      h(
                        'div',
                        {
                          style:
                            'width: 32px; height: 32px; border-radius: 8px; background-color: rgba(32,128,240,0.1); display: flex; align-items: center; justify-content: center; margin-right: 12px;',
                        },
                        [
                          // 这里可以用图标字体或SVG，这里用文字代替
                          h('div', { style: 'color: #2080f0; font-weight: bold; font-size: 16px;' }, '🔗'),
                        ],
                      ),
                      h('div', { style: 'flex: 1; overflow: hidden;' }, [
                        h('div', { style: 'font-size: 13px; color: #909399; margin-bottom: 2px;' }, '项目地址'),
                        h(
                          'a',
                          {
                            style:
                              'color: #2080f0; text-decoration: none; font-weight: 500; transition: all 0.2s ease; display: block; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;',
                            href: pkg.homepage || '#',
                            target: '_blank',
                          },
                          pkg.homepage || '未知',
                        ),
                      ]),
                    ]),
                  ],
                ),
              ],
            ),

            // 底部版权信息
            h(
              'div',
              {
                style: 'margin-top: 20px; text-align: center; font-size: 12px; color: #909399;',
              },
              `© ${new Date().getFullYear()} ${typeof pkg.author === 'object' && pkg.author.name ? pkg.author.name : pkg.name}. All rights reserved.`,
            ),
          ],
        )
      },
      positiveText: '确定',
    })
  })

  // 监听菜单"检查更新"事件
  ipc.on('menuCheckUpdate', () => {
    // 创建独立的消息API
    const { message } = createDiscreteApi(['message'])

    message.info('正在检查更新...', {
      duration: 3000,
    })
    // 这里可以添加实际的检查更新逻辑
  })
}

// 清理IPC事件监听
export function cleanupIpcEvents() {
  if (!ipc) return

  ipc.removeAllListeners('menuAbout')
  ipc.removeAllListeners('menuCheckUpdate')
}
