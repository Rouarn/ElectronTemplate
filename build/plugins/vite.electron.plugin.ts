/* eslint-disable @typescript-eslint/no-explicit-any */
import { spawn } from 'child_process'
import electron from 'electron'
import { build } from 'electron-builder'
import esbuild from 'esbuild'
import fs from 'fs'
import type { AddressInfo } from 'net'
import path from 'path'
import type { Plugin } from 'vite'

// 共用工具函数
const electronUtils = {
  // 获取 Electron 可执行文件路径
  getElectronPath(): string {
    const electronModulePath = path.dirname(electron as any)
    return path.join(electronModulePath, 'electron.exe')
  },

  // 编译 Electron 主进程代码
  buildMainProcess(): void {
    esbuild.buildSync({
      entryPoints: ['electron/background.ts'],
      bundle: true,
      outfile: 'dist/background.js',
      platform: 'neutral',
      external: ['electron'],
    })
  },

  // 准备打包目录结构
  prepareBuildDir(): void {
    // 修改 package.json 的 main 字段
    const json = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
    json.main = 'background.js'
    fs.writeFileSync('dist/package.json', JSON.stringify(json, null, 2))

    // 创建必要的 node_modules 目录
    if (!fs.existsSync('dist/node_modules')) {
      fs.mkdirSync('dist/node_modules', { recursive: true })
    }
  },

  // 处理 Electron 进程事件
  handleElectronProcess(electronProcess: ReturnType<typeof spawn>) {
    electronProcess.stdout?.on('data', (data) => {
      console.log(`日志: ${data.toString().trim()}`)
    })

    electronProcess.stderr?.on('data', (data) => {
      console.error(`错误: ${data.toString().trim()}`)
    })

    electronProcess.on('error', (err) => {
      console.error('Electron 进程错误:', err)
    })

    electronProcess.on('exit', (code) => {
      console.log(`Electron 进程退出，退出码: ${code}`)
    })

    return electronProcess
  },
}

/**
 * 开发模式插件
 */
export const viteElectronDev = (): Plugin => {
  return {
    name: 'vite-electron-dev',
    configureServer(server) {
      // 初始编译
      electronUtils.buildMainProcess()

      server?.httpServer?.once('listening', () => {
        const addressInfo = server.httpServer?.address() as AddressInfo
        const IP = `http://localhost:${addressInfo.port}`

        // 启动 Electron 进程
        let electronProcess = electronUtils.handleElectronProcess(spawn(electronUtils.getElectronPath(), ['dist/background.js', IP]))

        // 监听文件变化
        fs.watch('electron/background.ts', () => {
          console.log('检测到主进程文件变更，重新编译...')
          electronProcess.kill()
          electronUtils.buildMainProcess()
          electronProcess = electronUtils.handleElectronProcess(spawn(electronUtils.getElectronPath(), ['dist/background.js', IP]))
        })
      })
    },
  }
}

/**
 * 生产构建插件
 */
export const viteElectronBuild = (): Plugin => {
  return {
    name: 'vite-electron-build',
    closeBundle() {
      // 编译主进程代码
      electronUtils.buildMainProcess()

      // 准备打包目录
      electronUtils.prepareBuildDir()

      // 执行打包
      build({
        config: {
          appId: 'com.example.app',
          productName: 'vite-electron',
          directories: {
            output: path.join(process.cwd(), 'dist_electron'),
            app: path.join(process.cwd(), 'dist'),
          },
          files: ['**/*'],
          asar: true,
          nsis: {
            oneClick: false,
            perMachine: false,
            allowElevation: true,
            allowToChangeInstallationDirectory: true,
            createDesktopShortcut: true,
            createStartMenuShortcut: true,
          },
          win: {
            target: 'nsis',
            icon: path.join(process.cwd(), '/favicon.ico'),
          },
        },
      })
        .then(() => console.log('🚀 Electron 应用打包完成!'))
        .catch((err) => console.error('❌ 打包失败:', err))
    },
  }
}

export const createElectronPlugin = () => {
  if (process.env.NODE_ENV === 'production') {
    return [viteElectronBuild()]
  } else {
    return [viteElectronDev()]
  }
}
