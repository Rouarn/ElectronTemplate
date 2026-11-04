import fs from 'node:fs'
import path from 'node:path'
import { app, screen, type BrowserWindow, type Rectangle } from 'electron'
import { logger } from './logger'

interface PersistedWindowState {
  width: number
  height: number
  x?: number
  y?: number
  maximized: boolean
}

const DEFAULT_WIDTH = 1180
const DEFAULT_HEIGHT = 760
const MIN_WIDTH = 960
const MIN_HEIGHT = 600
const SAVE_DEBOUNCE_MS = 400

let stateFile = ''
let state: PersistedWindowState = { width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT, maximized: false }
let saveTimer: NodeJS.Timeout | null = null

function isValidNumber(value: unknown, min: number, max: number): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max
}

/** 读取并校验持久化状态，非法字段直接丢弃 */
function loadState(): PersistedWindowState {
  try {
    const raw = fs.readFileSync(stateFile, 'utf8')
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null) return { ...state }
    const record = parsed as Record<string, unknown>
    return {
      width: isValidNumber(record.width, MIN_WIDTH, 10000) ? record.width : DEFAULT_WIDTH,
      height: isValidNumber(record.height, MIN_HEIGHT, 10000) ? record.height : DEFAULT_HEIGHT,
      x: isValidNumber(record.x, -10000, 10000) ? record.x : undefined,
      y: isValidNumber(record.y, -10000, 10000) ? record.y : undefined,
      maximized: record.maximized === true,
    }
  } catch {
    return { ...state }
  }
}

/** 确保窗口落在某块屏幕内，避免显示器变更后窗口跑到屏幕外 */
function isVisibleOnSomeDisplay(bounds: Rectangle): boolean {
  return screen.getAllDisplays().some((display) => {
    const area = display.workArea
    return (
      bounds.x < area.x + area.width &&
      bounds.x + bounds.width > area.x &&
      bounds.y < area.y + area.height &&
      bounds.y + bounds.height > area.y
    )
  })
}

function saveState(): void {
  if (!stateFile) return
  try {
    fs.writeFileSync(stateFile, JSON.stringify(state, null, 2), 'utf8')
  } catch (error) {
    logger.warn('window-state', '写入窗口状态失败', error)
  }
}

function scheduleSave(): void {
  if (saveTimer) clearTimeout(saveTimer)
  saveTimer = setTimeout(() => {
    saveTimer = null
    saveState()
  }, SAVE_DEBOUNCE_MS)
}

/** 初始化窗口状态（需在 app ready 后调用） */
export function initWindowState(): void {
  stateFile = path.join(app.getPath('userData'), 'window-state.json')
  state = loadState()
  logger.info('window-state', '已加载窗口状态', state)
}

/** 供创建窗口时使用的初始尺寸 */
export function getInitialBounds(): { width: number; height: number; x?: number; y?: number } {
  const visible = isVisibleOnSomeDisplay({
    x: state.x ?? 0,
    y: state.y ?? 0,
    width: state.width,
    height: state.height,
  })
  if (!visible) {
    return { width: state.width, height: state.height }
  }
  return { width: state.width, height: state.height, x: state.x, y: state.y }
}

/** 是否需要恢复最大化 */
export function shouldStartMaximized(): boolean {
  return state.maximized
}

/** 监听窗口变化并持久化 */
export function trackWindow(win: BrowserWindow): void {
  const persist = () => {
    if (win.isDestroyed()) return
    const maximized = win.isMaximized()
    state.maximized = maximized
    if (!maximized && !win.isFullScreen()) {
      const bounds = win.getBounds()
      state.width = bounds.width
      state.height = bounds.height
      state.x = bounds.x
      state.y = bounds.y
    }
  }

  const onChange = () => {
    persist()
    scheduleSave()
  }

  win.on('resize', onChange)
  win.on('move', onChange)
  win.on('maximize', onChange)
  win.on('unmaximize', onChange)
  win.on('close', () => {
    persist()
    flushWindowState()
  })
}

/** 退出前强制落盘 */
export function flushWindowState(): void {
  if (saveTimer) {
    clearTimeout(saveTimer)
    saveTimer = null
  }
  saveState()
}
