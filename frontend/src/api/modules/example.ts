import { request } from '@/api/http'

/** 示例接口返回结构 */
export interface ServerTime {
  iso: string
  timezone: string
}

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API !== '0'

/**
 * 获取服务器时间（示例）。
 * 默认走本地模拟数据，方便离线运行模板；把 VITE_USE_MOCK_API 设为 0 即调用真实接口。
 */
export async function fetchServerTime(): Promise<ServerTime> {
  if (USE_MOCK) {
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 450)
    })
    return {
      iso: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }
  }
  return request<ServerTime>({ url: '/time', method: 'get' })
}
