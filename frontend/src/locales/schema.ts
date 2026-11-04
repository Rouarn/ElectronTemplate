/**
 * 语言包结构定义。
 * 新增文案时只需要改这里与两个语言文件，缺失键会在类型检查阶段报错。
 */
export interface MessageSchema {
  app: {
    name: string
    tagline: string
  }
  nav: {
    home: string
    ipc: string
    settings: string
  }
  common: {
    refresh: string
    copy: string
    copied: string
    loading: string
    empty: string
    electronMode: string
    browserMode: string
    success: string
    cancel: string
    unsupported: string
  }
  home: {
    title: string
    subtitle: string
    startIpc: string
    openSettings: string
    capability: string
    cap1Title: string
    cap1Desc: string
    cap2Title: string
    cap2Desc: string
    cap3Title: string
    cap3Desc: string
    cap4Title: string
    cap4Desc: string
    runtime: string
    techStack: string
    appName: string
    version: string
    electron: string
    chrome: string
    node: string
    platform: string
    packaged: string
    packagedYes: string
    packagedNo: string
  }
  ipc: {
    title: string
    subtitle: string
    appInfo: string
    readAppInfo: string
    systemInfo: string
    readSystemInfo: string
    dialog: string
    openFile: string
    saveFile: string
    windowControl: string
    minimize: string
    toggleMaximize: string
    isMaximized: string
    update: string
    checkUpdate: string
    downloadUpdate: string
    installUpdate: string
    external: string
    openHomepage: string
    result: string
    history: string
    clearHistory: string
    browserHint: string
    duration: string
    updaterState: string
  }
  settings: {
    title: string
    subtitle: string
    appearance: string
    theme: string
    themeSystem: string
    themeLight: string
    themeDark: string
    language: string
    paths: string
    userData: string
    logs: string
    home: string
    temp: string
    apiDemo: string
    apiDesc: string
    callApi: string
    apiResult: string
    about: string
    homepage: string
    quit: string
    quitConfirm: string
  }
  error: {
    notFound: string
    notFoundDesc: string
    backHome: string
  }
}
