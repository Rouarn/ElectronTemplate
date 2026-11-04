import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'

export type ApiErrorCode = 'NETWORK_ERROR' | 'TIMEOUT' | 'HTTP_ERROR' | 'BUSINESS_ERROR' | 'UNKNOWN'

/** 统一的接口错误类型，界面层只需要判断 code 与 message */
export class ApiError extends Error {
  readonly code: ApiErrorCode
  readonly status?: number
  readonly detail?: unknown

  constructor(code: ApiErrorCode, message: string, status?: number, detail?: unknown) {
    super(message)
    this.name = 'ApiError'
    this.code = code
    this.status = status
    this.detail = detail
  }
}

interface ApiEnvelope<T> {
  code: number | string
  data: T
  message?: string
}

function isEnvelope<T>(value: unknown): value is ApiEnvelope<T> {
  return typeof value === 'object' && value !== null && 'code' in value && 'data' in value
}

function extractMessage(body: unknown): string | null {
  if (typeof body !== 'object' || body === null) return null
  const record = body as Record<string, unknown>
  if (typeof record.message === 'string' && record.message.trim()) return record.message
  if (typeof record.error === 'string' && record.error.trim()) return record.error
  return null
}

function toApiError(error: unknown): ApiError {
  if (error instanceof ApiError) return error
  if (axios.isAxiosError(error)) {
    const status = error.response?.status
    if (error.code === 'ECONNABORTED') return new ApiError('TIMEOUT', '请求超时，请稍后重试', status)
    if (!error.response) return new ApiError('NETWORK_ERROR', '网络连接失败，请检查接口地址或网络状态', undefined, error.message)
    return new ApiError(
      'HTTP_ERROR',
      extractMessage(error.response.data) ?? `接口返回异常（HTTP ${status ?? '未知'}）`,
      status,
      error.response.data,
    )
  }
  return new ApiError('UNKNOWN', error instanceof Error ? error.message : '未知错误')
}

const TIMEOUT_MS = 15_000
const MAX_ATTEMPTS = 2
const RETRY_DELAY_MS = 300

export const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '',
  timeout: TIMEOUT_MS,
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.request.use((config) => {
  // 每次请求带上追踪 ID，便于和网关日志对齐
  config.headers.set('X-Request-Id', crypto.randomUUID())
  return config
})

http.interceptors.response.use(
  (response) => response,
  (error: unknown) => Promise.reject(toApiError(error)),
)

function canRetry(method: string | undefined): boolean {
  const normalized = (method ?? 'get').toLowerCase()
  return normalized === 'get' || normalized === 'head'
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

/**
 * 发起请求并解包常见的 { code, data, message } 响应结构。
 * GET / HEAD 在网络错误或 5xx 时自动重试一次，其余方法不重试，避免重复写入。
 */
export async function request<T>(config: AxiosRequestConfig): Promise<T> {
  const attempts = canRetry(config.method) ? MAX_ATTEMPTS : 1
  let lastError: ApiError | null = null

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await http.request<unknown>(config)
      const body = response.data

      if (isEnvelope<T>(body)) {
        const succeeded = body.code === 0 || body.code === '0' || body.code === 200
        if (!succeeded) {
          throw new ApiError('BUSINESS_ERROR', body.message ?? '业务处理失败', response.status, body)
        }
        return body.data
      }

      return body as T
    } catch (error) {
      const apiError = toApiError(error)
      lastError = apiError
      const retryable = apiError.code === 'NETWORK_ERROR' || (apiError.status !== undefined && apiError.status >= 500)
      if (attempt === attempts - 1 || !retryable) break
      await sleep(RETRY_DELAY_MS * (attempt + 1))
    }
  }

  throw lastError ?? new ApiError('UNKNOWN', '请求失败')
}
