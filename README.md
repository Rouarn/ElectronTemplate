# Electron 桌面模板

Electron + Vue 3.5 + Vite+ 组成的桌面应用模板。主进程、preload 与渲染进程共享同一份**类型化 IPC 契约**，安全基线逐项显式开启，克隆后即可开发、检查与打包。

## 技术栈（实际安装版本）

| 依赖                 | 版本    | 说明                                                                               |
| -------------------- | ------- | ---------------------------------------------------------------------------------- |
| Electron             | 45.2.2  | 主进程运行时                                                                       |
| electron-builder     | 26.18.0 | 三平台打包                                                                         |
| electron-updater     | 6.8.11  | 自动更新（HTTPS + 完整性校验）                                                     |
| Vue                  | 3.5.44  | 渲染进程框架，`<script setup>`                                                     |
| vue-router           | 5.4.0   | hash 路由，适配 `app://` 协议                                                      |
| pinia                | 4.1.0   | 状态管理，配合 VueUse 持久化                                                       |
| vue-i18n             | 11.4.18 | 中文默认，英文语言包                                                               |
| Naive UI             | 2.45.3  | 组件库，主题与设计令牌统一                                                         |
| UnoCSS               | 66.12.0 | 原子化样式 + 本地 lucide 图标                                                      |
| axios                | 1.13.x  | 统一 API 客户端（原 `@vakao-ui/axios` 在 npm 不存在，改为标准 axios 封装等价能力） |
| Vite+（`vite-plus`） | 1.5.0   | `vp dev/build/lint/fmt/staged` 工具链                                              |
| TypeScript           | 5.9.3   | 主进程与渲染进程统一严格模式                                                       |
| pnpm                 | 12.16.1 | 包管理器，`packageManager` 已锁定                                                  |

> 说明：TypeScript 最新发布版为 7.0.2（原生编译器），但 `vue-tsc 3.3.14` 的 SFC 类型检查链路尚未适配，模板选用 5.9.3 以保证类型检查可用。`vite` 在 `frontend` 中显式别名到 `@voidzero-dev/vite-plus-core@1.5.0`，这是 `vp` 工具链的要求。

## 目录结构

```
electron-template/
├── build/                      # 打包资源（图标、mac entitlements）
├── frontend/                   # 渲染进程（独立 pnpm workspace 包）
│   ├── src/bridge/             # 桌面 bridge 获取入口 + 浏览器降级 mock
│   ├── src/api/                # axios 客户端、错误归一化、响应解包
│   ├── src/components/         # 通用组件
│   ├── src/layouts/            # 布局壳
│   ├── src/locales/            # i18n 实例、类型化语言包
│   ├── src/router/             # 路由表、守卫、原生菜单联动
│   ├── src/stores/             # Pinia store（主题/语言、运行信息）
│   ├── src/styles/             # 设计令牌与 naive-ui 主题覆盖
│   ├── src/views/              # 首页、IPC 示例、设置、404
│   ├── uno.config.ts           # UnoCSS（本地图标集合，构建期不联网）
│   └── vite.config.ts          # 渲染进程构建配置
├── scripts/                    # 开发编排与主进程构建脚本
├── shared/ipc/                 # 三端共享的 IPC 契约（唯一来源）
│   ├── channels.ts             # 通道常量表 + 事件常量表
│   ├── contracts.ts            # 请求/响应/事件类型映射
│   ├── bridge.ts               # 暴露给渲染进程的类型化接口
│   ├── validation.ts           # 参数校验与归一化
│   └── result.ts               # 统一结果封装与错误码
├── src/main/                   # 主进程
│   ├── index.ts                # 启动编排、单实例锁、生命周期
│   ├── window.ts               # 主窗口创建与安全 webPreferences
│   ├── window-state.ts         # 窗口位置/大小持久化与可见性校验
│   ├── security.ts             # CSP、导航拦截、外部链接白名单
│   ├── protocol.ts             # app:// 协议加载本地产物（防路径穿越）
│   ├── ipc.ts                  # 通道注册、来源校验、统一错误封装
│   ├── updater.ts              # 自动更新（HTTPS 强制、sha512 校验）
│   ├── menu.ts                 # 中文原生菜单
│   ├── logger.ts               # 分级日志 + 脱敏 + 轮转
│   └── crash.ts                # 主/渲染进程异常兜底
├── src/preload/index.ts        # contextBridge 暴露最小能力集
├── electron-builder.yml        # 打包唯一配置源
└── pnpm-workspace.yaml         # workspace + 构建脚本白名单
```

## 常用命令

```sh
pnpm install          # 安装依赖（会下载 Electron 二进制）
pnpm dev              # 启动 Vite 开发服务并拉起 Electron，主进程改动自动重启
pnpm dev:renderer     # 仅启动渲染进程，可在普通浏览器中预览（自动走 mock）
pnpm typecheck        # 主进程 + 渲染进程类型检查
pnpm lint             # Oxlint
pnpm format           # Oxfmt 格式化
pnpm format:check     # 仅检查格式
pnpm build            # 类型检查 + 渲染产物 + 主进程产物（生产模式）
pnpm start            # 构建后直接运行 Electron
pnpm pack             # 生成未压缩的应用目录（release/）
pnpm dist:mac         # macOS dmg
pnpm dist:win         # Windows NSIS 安装包
pnpm dist:linux       # Linux AppImage + deb
```

## 渲染路由与白屏排查

- 渲染进程使用 hash 路由（入口 `app://bundle/index.html#/`，页面为 `#/ipc`、`#/settings`）。`app://` 协议处理器对未命中的无扩展名路径回退 `index.html`，因此深链与打包后启动都不会白屏。
- Naive UI 组件按需显式导入（项目未启用组件自动导入插件），`App.vue` 中的各 Provider 必须保留导入，否则页面里的 `useMessage` / `useDialog` 会在 setup 阶段抛错并导致整页空白。
- 渲染层的 Vue `errorHandler`、`window.error` 与 `unhandledrejection` 会经 `app:report-error` 上报到主进程日志；开发态同时在右下角显示红色错误浮层，不再静默白屏。

## IPC 契约设计

1. **通道唯一来源**：所有 `invoke` 通道与推送事件都定义在 [channels.ts](shared/ipc/channels.ts)，主进程注册、preload 白名单、渲染层调用全部引用常量，代码中不存在手写通道字符串。
2. **请求/响应类型映射**：`IpcRequestMap` / `IpcResponseMap` 以通道常量为键，新增通道只要补一行映射，三端同时获得类型约束。
3. **参数校验**：`validation.ts` 统一做类型、长度、协议白名单校验，校验失败返回 `INVALID_ARGUMENT`，不会把原始异常抛给渲染进程。
4. **来源校验**：主进程拒绝子 frame、非主窗口 webContents 以及不在导航白名单内的调用，返回 `UNTRUSTED_SENDER`。
5. **统一错误封装**：主进程返回 `{ ok: true, data }` 或 `{ ok: false, error }`；preload 将失败转换为 `BridgeError`，渲染层按 `code` 分支处理。
6. **最小暴露面**：preload 不暴露 `ipcRenderer`，只暴露 `app / window / dialog / system / updater / menu` 六组方法；事件订阅也走白名单。

浏览器环境下 `frontend/src/bridge/mock.ts` 实现同一份 `DesktopBridge` 接口，因此 `pnpm dev:renderer` 脱离 Electron 也能正常运行，只是原生能力为降级模拟。

## 安全基线落点

| 项                                                                    | 落点                                                                                                                         |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `contextIsolation: true` / `sandbox: true` / `nodeIntegration: false` | [window.ts](src/main/window.ts) 的 `webPreferences`，逐项显式声明                                                            |
| `webSecurity` / 禁用 webview / 禁止子 frame Node                      | 同上 + `app.enableSandbox()`                                                                                                 |
| CSP                                                                   | [security.ts](src/main/security.ts)，开发/生产两套，经 `onHeadersReceived` 注入                                              |
| `will-navigate` / `will-redirect` / `setWindowOpenHandler`            | [security.ts](src/main/security.ts)，站外一律拦截                                                                            |
| `will-attach-webview`                                                 | [security.ts](src/main/security.ts) 直接阻止                                                                                 |
| 生产禁用开发者工具                                                    | `DEVTOOLS_ALLOWED` 控制 `webPreferences.devTools` 与菜单项                                                                   |
| 本地资源加载                                                          | [protocol.ts](src/main/protocol.ts) 使用 `app://` 协议，校验协议/主机名并防路径穿越                                          |
| 外部链接                                                              | 协议白名单 `https/http/mailto`，其余拒绝                                                                                     |
| 单实例                                                                | [index.ts](src/main/index.ts) `requestSingleInstanceLock` + 聚焦已有窗口                                                     |
| 崩溃兜底                                                              | [crash.ts](src/main/crash.ts) 覆盖 `uncaughtException` / `unhandledRejection` / `child-process-gone` / `render-process-gone` |
| 日志                                                                  | [logger.ts](src/main/logger.ts) 分级、按天文件、保留 7 份、递归脱敏 token/password 等字段                                    |
| 自动更新                                                              | [updater.ts](src/main/updater.ts) 仅打包后启用、强制 HTTPS（联调需显式 `ALLOW_INSECURE_UPDATE=1`）、拒绝缺少 sha512 的更新包 |

## 打包

- 单一配置源：根目录 [electron-builder.yml](electron-builder.yml)，`appId` 与 `app.setAppUserModelId` 保持一致（`com.rouarn.electronTemplate`）。
- 产物输出到 `release/`，不污染源码目录；`files` 只包含 `dist-electron/`、`frontend/dist/` 与 `package.json`。
- 图标：mac 使用 `icon.icns`，Windows 使用 `icon.ico`，Linux 使用 `512x512.png`。
- mac 开启 `hardenedRuntime` 并引用 `build/entitlements.mac.plist`；正式发布前需替换签名证书与公证信息。
- 自动更新源在 `publish.url` 中配置为占位 HTTPS 地址，发布前请替换；也可用 `APP_UPDATE_FEED_URL` 环境变量覆盖。

## 提交规范

- 提交信息遵循 Conventional Commits（见 [commitlint.config.ts](commitlint.config.ts)），描述使用中文。
- `pre-commit` 通过 `vp staged` 对暂存文件执行格式化与检查；`commit-msg` 执行 commitlint。

## 已知未验证项

- 未做 GUI 视觉走查：窗口布局、主题切换、图标渲染仅通过构建与启动日志验证，未做人工像素级检查。
- 未在 Windows / Linux 实机验证安装包与签名流程；mac 仅验证本地启动，未验证公证。
- 自动更新只验证了开发/未配置更新源时的降级路径，未对接真实更新服务器做端到端升级。
