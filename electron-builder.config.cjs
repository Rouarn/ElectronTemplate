// electron-builder 打包唯一配置源。
// 从 YAML 换成 CJS 的原因：Electron 二进制镜像地址要读取环境变量，YAML 不支持表达式。
// 所有打包脚本均通过 --config electron-builder.config.cjs 显式指向本文件。

// Electron 二进制默认镜像（与 .npmrc 的 electron_mirror 保持一致）。
// 镜像优先级：ELECTRON_MIRROR > npm_config_electron_mirror（.npmrc 的 electron_mirror）
//             > ELECTRON_BUILDER_BINARIES_MIRROR > 默认值。
// 说明：electron 45 起 package.json 已没有 postinstall，安装期二进制由 scripts/install.mjs 调 install.js 下载；
//      electron-builder 不解析 .npmrc，所以这里显式写上同一个默认值，
//      保证「安装依赖」和「打包」两个阶段用同一套源。
// 注意：ELECTRON_BUILDER_BINARIES_MIRROR 若被用作兜底，它必须指向 Electron 镜像根目录，
//      而不是 electron-builder-binaries 目录（.npmrc 里的那个值只适用于打包工具二进制）。
const DEFAULT_ELECTRON_MIRROR = 'https://npmmirror.com/mirrors/electron/'
const electronMirrorRaw =
  process.env.ELECTRON_MIRROR ||
  process.env.npm_config_electron_mirror ||
  process.env.ELECTRON_BUILDER_BINARIES_MIRROR ||
  DEFAULT_ELECTRON_MIRROR
// @electron/get 直接做字符串拼接，缺少结尾斜杠会拼出错误 URL
const electronMirror = electronMirrorRaw.endsWith('/') ? electronMirrorRaw : `${electronMirrorRaw}/`

module.exports = {
  // 应用唯一标识（反向域名格式），用于 macOS Bundle ID、Windows AppUserModelId 等
  appId: 'com.rouarn.electronTemplate',
  // 安装包与快捷方式上显示的产品名称
  productName: 'ElectronTemplate',
  // 版权信息，会写入 macOS 应用信息和 Windows 程序属性
  copyright: '© 2026 woyuxiaji Technology Co., Ltd.',
  // 统一产物命名，避免不同平台默认命名规则不一致
  artifactName: '${productName}-${version}-${os}-${arch}.${ext}',

  // Electron 二进制下载源：electron-builder 26 只读 electronDownload.mirror，
  // 不会解析 .npmrc 的 electron_mirror，所以必须在这里显式指定
  electronDownload: {
    mirror: electronMirror,
  },

  directories: {
    // 打包产物（dmg/exe/AppImage 等）输出目录
    output: 'release',
    // 构建资源目录（图标、安装脚本、entitlements 等都在里面找）
    buildResources: 'build',
  },

  // 只打进运行期真正需要的文件，源码与开发依赖不进包
  files: [
    // 编译后的主进程/预加载脚本
    'dist-electron/**/*',
    // 编译后的前端页面
    'frontend/dist/**/*',
    'package.json',
    // 排除 sourcemap，减小体积、避免泄露源码结构
    '!**/*.map',
  ],

  // 是否把源码打包成 asar 归档（单文件，防直接查看源码，加载更快）
  asar: true,

  mac: {
    // macOS 应用图标（.icns 格式）
    icon: 'build/icons/icon.icns',
    // App Store 分类（工具类）
    category: 'public.app-category.utilities',
    // 支持跟随系统深色模式
    darkModeSupport: true,
    // 签名与公证需要真实证书，模板默认开启强化运行时，发布前请替换为你的 Team ID
    // 强化运行时：提高安全性，是苹果公证（notarize）的前置条件
    hardenedRuntime: true,
    // 打包时不做 Gatekeeper 评估（开发阶段跳过，正式发布可开）
    gatekeeperAssess: false,
    // 应用权限声明文件（如允许 JIT、网络等），签名时生效
    entitlements: 'build/entitlements.mac.plist',
    // 子进程（渲染进程等）继承的权限声明
    entitlementsInherit: 'build/entitlements.mac.plist',
    target: [
      {
        // 打包成 dmg 安装镜像
        // 架构不在此处固定：由 scripts 里的 --x64 / --arm64 决定，避免配置与命令行两处打架
        target: 'dmg',
      },
    ],
  },

  win: {
    // Windows 应用图标（.ico 格式）
    icon: 'build/icons/icon.ico',
    target: [
      {
        // 使用 NSIS 制作 Windows 安装程序
        target: 'nsis',
      },
    ],
  },

  // NSIS 安装程序的详细配置
  nsis: {
    // 非一键安装：用户可以看到安装向导并选择选项
    oneClick: false,
    // 按当前用户安装（不需要管理员权限，不装到 Program Files）
    perMachine: false,
    // 允许用户在安装时请求提升权限
    allowElevation: true,
    // 允许用户自定义安装目录
    allowToChangeInstallationDirectory: true,
    // 安装后创建桌面快捷方式
    createDesktopShortcut: true,
    // 创建开始菜单快捷方式
    createStartMenuShortcut: true,
    // 快捷方式上显示的名称
    shortcutName: 'ElectronTemplate',
    // 安装程序本身的图标
    installerIcon: 'build/icons/icon.ico',
    // 卸载程序的图标
    uninstallerIcon: 'build/icons/icon.ico',
  },

  linux: {
    // Linux 应用图标（png，推荐 512x512）
    icon: 'build/icons/512x512.png',
    // 应用菜单分类
    category: 'Utility',
    // 可执行文件名（决定 /opt/<name> 与 /usr/bin 链接名），显式指定以保证各平台一致
    executableName: 'electron-template',
    // deb 包必需的维护者字段，fpm 要求「名字 <邮箱>」格式
    maintainer: 'woyuxiaji <woyuxiaji@foxmail.com>',
    // 一段式短描述，写入 deb 的 Description 首行（Synopsis）
    synopsis: 'Electron + Vue 3 桌面应用模板',
    // 多段式详细描述，写入 deb 的 Description 正文与 .desktop 的 Comment
    description: 'Electron + Vue 3 + Vite 桌面应用模板，主进程、preload 与渲染进程共享同一份类型化 IPC 契约，内置安全基线与自动更新能力。',
    // 让 .desktop 文件名对齐 package.json 的 desktopName，
    // 从而与 Electron 运行期 app_id / WM_CLASS 一致，任务栏才能正确关联窗口
    syncDesktopName: true,
    target: [
      // AppImage：免安装单文件，双击即用
      'AppImage',
      // deb：Debian/Ubuntu 系安装包
      'deb',
    ],
  },

  // 自动更新源：请改成你自己的 HTTPS 静态资源地址。
  // 主进程还会读取 APP_UPDATE_FEED_URL 环境变量覆盖此值，并在运行期强制校验 HTTPS。
  publish: {
    // generic：使用自建静态服务器托管更新包（非 GitHub Releases 等托管服务）
    provider: 'generic',
    // 更新文件所在的服务器目录地址（需放 latest.yml 等更新清单）
    url: 'https://updates.example.com/electron-template/',
  },
}
