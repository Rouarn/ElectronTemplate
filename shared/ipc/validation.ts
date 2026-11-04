import type { FileFilter, OpenExternalPayload, OpenFileOptions, RendererErrorPayload, SaveFileOptions, ThemeMode } from './contracts'
import { IPC_ERROR_CODES } from './result'

/**
 * 参数校验工具。
 *
 * 校验逻辑放在 shared 中，主进程与浏览器降级实现共用同一份规则；
 * 校验失败抛出带错误码的异常，由 IPC 包装层统一转换为错误响应。
 */
export class IpcValidationError extends Error {
  readonly code = IPC_ERROR_CODES.invalidArgument

  constructor(message: string) {
    super(message)
    this.name = 'IpcValidationError'
  }
}

const ALLOWED_EXTERNAL_PROTOCOLS = new Set(['https:', 'http:', 'mailto:'])
const MAX_URL_LENGTH = 2048
const MAX_TITLE_LENGTH = 120

function asRecord(input: unknown, label: string): Record<string, unknown> {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) {
    throw new IpcValidationError(`${label} 必须是对象`)
  }
  return input as Record<string, unknown>
}

function readRequiredString(input: unknown, field: string, maxLength: number): string {
  if (typeof input !== 'string') throw new IpcValidationError(`${field} 必须是字符串`)
  const value = input.trim()
  if (!value) throw new IpcValidationError(`${field} 不能为空`)
  if (value.length > maxLength) throw new IpcValidationError(`${field} 长度不能超过 ${maxLength}`)
  return value
}

function readOptionalString(input: unknown, field: string, maxLength: number): string | undefined {
  if (input === undefined || input === null) return undefined
  if (typeof input !== 'string') throw new IpcValidationError(`${field} 必须是字符串`)
  const value = input.trim()
  // 可选字段的空字符串按「未提供」处理，避免可选信息缺失导致整条上报被拒绝
  if (!value) return undefined
  if (value.length > maxLength) throw new IpcValidationError(`${field} 长度不能超过 ${maxLength}`)
  return value
}

function readFilters(input: unknown): FileFilter[] | undefined {
  if (input === undefined) return undefined
  if (!Array.isArray(input)) throw new IpcValidationError('filters 必须是数组')
  return input.map((item, index) => {
    const record = asRecord(item, `filters[${index}]`)
    const name = readRequiredString(record.name, `filters[${index}].name`, 60)
    const extensions = record.extensions
    if (!Array.isArray(extensions) || extensions.length === 0) {
      throw new IpcValidationError(`filters[${index}].extensions 必须是非空数组`)
    }
    return {
      name,
      extensions: extensions.map((extension, extIndex) => {
        if (typeof extension !== 'string' || !extension.trim()) {
          throw new IpcValidationError(`filters[${index}].extensions[${extIndex}] 必须是字符串`)
        }
        return extension.trim().replace(/^\./, '')
      }),
    }
  })
}

/** 校验并归一化外部链接参数，阻止 file://、javascript: 等危险协议 */
export function assertOpenExternalPayload(input: unknown): OpenExternalPayload {
  const record = asRecord(input, 'openExternal 参数')
  const raw = readRequiredString(record.url, 'url', MAX_URL_LENGTH)

  let parsed: URL
  try {
    parsed = new URL(raw)
  } catch {
    throw new IpcValidationError('url 不是合法的地址')
  }
  if (!ALLOWED_EXTERNAL_PROTOCOLS.has(parsed.protocol)) {
    throw new IpcValidationError(`不允许打开 ${parsed.protocol} 协议的链接`)
  }
  return { url: parsed.toString() }
}

/** 校验主题参数 */
export function assertThemePayload(input: unknown): ThemeMode {
  const record = asRecord(input, '主题参数')
  const theme = record.theme
  if (theme !== 'system' && theme !== 'light' && theme !== 'dark') {
    throw new IpcValidationError('theme 只能是 system、light 或 dark')
  }
  return theme
}

/** 校验渲染层异常上报参数，限制长度避免日志被超大堆栈刷爆 */
export function assertRendererErrorPayload(input: unknown): RendererErrorPayload {
  const record = asRecord(input, '渲染层异常参数')
  const kind = record.kind
  if (kind !== 'vue' && kind !== 'error' && kind !== 'unhandledrejection') {
    throw new IpcValidationError('kind 只能是 vue、error 或 unhandledrejection')
  }
  return {
    kind,
    message: readRequiredString(record.message, 'message', 2000),
    stack: readOptionalString(record.stack, 'stack', 6000),
    source: readOptionalString(record.source, 'source', 2048),
  }
}

/** 校验打开文件对话框参数 */
export function assertOpenFileOptions(input: unknown): OpenFileOptions {
  if (input === undefined) return {}
  const record = asRecord(input, 'openFile 参数')
  const options: OpenFileOptions = {
    title: readOptionalString(record.title, 'title', MAX_TITLE_LENGTH),
    filters: readFilters(record.filters),
    multiple: record.multiple === undefined ? undefined : Boolean(record.multiple),
  }
  return options
}

/** 校验保存文件对话框参数 */
export function assertSaveFileOptions(input: unknown): SaveFileOptions {
  if (input === undefined) return {}
  const record = asRecord(input, 'saveFile 参数')
  return {
    title: readOptionalString(record.title, 'title', MAX_TITLE_LENGTH),
    defaultPath: readOptionalString(record.defaultPath, 'defaultPath', 512),
    filters: readFilters(record.filters),
  }
}
