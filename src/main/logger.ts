import fs from 'node:fs'
import path from 'node:path'
import { app } from 'electron'

export type LogLevel = 'debug' | 'info' | 'warn' | 'error'

const LEVEL_WEIGHT: Record<LogLevel, number> = { debug: 10, info: 20, warn: 30, error: 40 }
const MAX_LOG_FILES = 7
const MAX_REDACT_DEPTH = 4

/** 命中这些字段名的值会被脱敏，避免 token、密码等进入磁盘日志 */
const SENSITIVE_KEY_PATTERN = /pass(word)?|token|secret|authorization|cookie|credential|api[-_]?key/i

let logDir = ''
let minLevel: LogLevel = 'info'

function currentLevel(): LogLevel {
  const fromEnv = process.env.ELECTRON_LOG_LEVEL
  if (fromEnv === 'debug' || fromEnv === 'info' || fromEnv === 'warn' || fromEnv === 'error') return fromEnv
  return minLevel
}

/** 递归脱敏，深度受限以避免循环引用 */
function redact(value: unknown, depth = 0): unknown {
  if (depth > MAX_REDACT_DEPTH) return '[层级过深]'
  if (value instanceof Error) {
    return { name: value.name, message: value.message, stack: app.isPackaged ? undefined : value.stack }
  }
  if (Array.isArray(value)) return value.map((item) => redact(item, depth + 1))
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>)
    const result: Record<string, unknown> = {}
    for (const [key, item] of entries) {
      result[key] = SENSITIVE_KEY_PATTERN.test(key) ? '[已脱敏]' : redact(item, depth + 1)
    }
    return result
  }
  return value
}

function serialize(payload: unknown[]): string {
  if (payload.length === 0) return ''
  try {
    return JSON.stringify(redact(payload))
  } catch {
    return '[无法序列化的日志内容]'
  }
}

function cleanupOldLogs(dir: string): void {
  try {
    const files = fs
      .readdirSync(dir)
      .filter((name) => name.startsWith('main-') && name.endsWith('.log'))
      .sort()
    const removable = files.slice(0, Math.max(0, files.length - MAX_LOG_FILES))
    for (const name of removable) fs.rmSync(path.join(dir, name), { force: true })
  } catch {
    // 清理失败不影响主流程
  }
}

function write(level: LogLevel, scope: string, args: unknown[]): void {
  if (LEVEL_WEIGHT[level] < LEVEL_WEIGHT[currentLevel()]) return

  const line = `[${new Date().toISOString()}] [${level.toUpperCase()}] [${scope}] ${serialize(args)}\n`
  if (level === 'error') console.error(line.trimEnd())
  else if (level === 'warn') console.warn(line.trimEnd())
  else console.log(line.trimEnd())

  if (!logDir) return
  const file = path.join(logDir, `main-${new Date().toISOString().slice(0, 10)}.log`)
  // 使用异步追加，避免阻塞主进程事件循环
  fs.promises.appendFile(file, line, 'utf8').catch(() => {
    // 日志写入失败时静默降级为控制台输出
  })
}

export const logger = {
  debug: (scope: string, ...args: unknown[]) => write('debug', scope, args),
  info: (scope: string, ...args: unknown[]) => write('info', scope, args),
  warn: (scope: string, ...args: unknown[]) => write('warn', scope, args),
  error: (scope: string, ...args: unknown[]) => write('error', scope, args),
}

/** 应用就绪后初始化日志目录，并清理由此产生的过期文件 */
export function initLogger(): void {
  minLevel = app.isPackaged ? 'info' : 'debug'
  logDir = path.join(app.getPath('userData'), 'logs')
  try {
    fs.mkdirSync(logDir, { recursive: true })
    cleanupOldLogs(logDir)
  } catch (error) {
    console.error('[logger] 初始化日志目录失败', error)
    logDir = ''
  }
}

/** 供设置页展示日志目录 */
export function getLogDir(): string {
  return logDir
}
