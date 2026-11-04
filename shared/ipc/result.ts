/**
 * 统一的 IPC 结果封装。
 *
 * 主进程永远不把异常直接抛给渲染进程（Electron 会把异常堆栈原样序列化），
 * 而是统一转换为 `{ ok: false, error }` 结构，避免泄露内部实现细节。
 */

export const IPC_ERROR_CODES = {
  invalidArgument: 'INVALID_ARGUMENT',
  untrustedSender: 'UNTRUSTED_SENDER',
  unsupported: 'UNSUPPORTED',
  notAvailable: 'NOT_AVAILABLE',
  internal: 'INTERNAL',
} as const

export type IpcErrorCode = (typeof IPC_ERROR_CODES)[keyof typeof IPC_ERROR_CODES]

export interface IpcErrorPayload {
  code: IpcErrorCode
  message: string
}

export interface IpcOk<T> {
  ok: true
  data: T
}

export interface IpcFailure {
  ok: false
  error: IpcErrorPayload
}

export type IpcResult<T> = IpcOk<T> | IpcFailure

export function ipcOk<T>(data: T): IpcResult<T> {
  return { ok: true, data }
}

export function ipcFail(code: IpcErrorCode, message: string): IpcFailure {
  return { ok: false, error: { code, message } }
}

export function isIpcErrorPayload(value: unknown): value is IpcErrorPayload {
  if (typeof value !== 'object' || value === null) return false
  const record = value as Record<string, unknown>
  return typeof record.code === 'string' && typeof record.message === 'string'
}

/** 渲染进程侧统一的错误对象，浏览器降级实现也会抛出同样的结构 */
export class BridgeError extends Error {
  readonly code: IpcErrorCode

  constructor(payload: IpcErrorPayload) {
    super(payload.message)
    this.name = 'BridgeError'
    this.code = payload.code
  }
}

export function isBridgeError(value: unknown): value is BridgeError {
  return value instanceof BridgeError
}
