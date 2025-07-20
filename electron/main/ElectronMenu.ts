import { app, Menu } from "electron";

export function createMenu(win: Electron.CrossProcessExports.BrowserWindow) {
  if (process.platform !== "darwin") {
    const template = [
      {
        label: "我的超级应用",
        submenu: [
          { label: "关于", accelerator: "CmdOrCtrl+I", role: "about" },
          {
            label: "检查更新", // 新增的菜单项
            click: () => {
              win.webContents.send("menuCheckUpdate"); // 向渲染进程发送事件
            },
            accelerator: "CmdOrCtrl+U", // 快捷键
            enabled: true, // 是否启用
          },
          { type: "separator" },
          { label: "隐藏", role: "hide" },
          { label: "隐藏其他", role: "hideOthers" },
          { type: "separator" },
          { label: "服务", role: "services" },
          {
            label: "退出",
            accelerator: "Command+Q",
            click: () => {
              app.quit();
            },
          },
        ],
      },
      {
        label: "编辑",
        submenu: [
          { label: "复制", accelerator: "CmdOrCtrl+C", role: "copy" },
          { label: "粘贴", accelerator: "CmdOrCtrl+V", role: "paste" },
          { label: "剪切", accelerator: "CmdOrCtrl+X", role: "cut" },
          { label: "撤销", accelerator: "CmdOrCtrl+Z", role: "undo" },
          { label: "重做", accelerator: "Shift+CmdOrCtrl+Z", role: "redo" },
          { label: "全选", accelerator: "CmdOrCtrl+A", role: "selectAll" },
        ],
      },
      {
        label: "窗口",
        role: "window",
        submenu: [
          { label: "缩放", role: "Zoom" },
          { label: "最小化", role: "minimize" },
          { label: "关闭", role: "close" },
        ],
      },
      {
        label: "帮助",
        role: "help",
        submenu: [
          {
            label: "开发者工具",
            role: "toggledevtools",
            accelerator: "CommandOrControl+alt+i",
          },
        ],
      },
    ];

    const menu = Menu.buildFromTemplate(template as any);
    Menu.setApplicationMenu(menu);
  } else {
    Menu.setApplicationMenu(null);
  }
}
