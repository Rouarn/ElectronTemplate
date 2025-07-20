import router from '@/router'
import { useAuthStore } from '@/stores/modules/auth'
import { GlobalConfig } from '@/enum'
import type { RouteRecordRaw } from 'vue-router'

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob('@/views/**/*.vue')

/**
 * @description 使用递归扁平化菜单，方便添加动态路由
 * @param {Array} menuList 菜单列表
 * @returns {Array}
 */
export function getFlatMenuList(menuList: Api.Route.UserRoute[]): Api.Route.UserRoute[] {
  const newMenuList: Api.Route.UserRoute[] = JSON.parse(JSON.stringify(menuList))
  return newMenuList.flatMap((item) => [item, ...(item.children ? getFlatMenuList(item.children) : [])])
}

/**
 * @description 初始化动态路由
 */
export const initDynamicRouter = async (routes: Api.Route.UserRoute[]) => {
  const authStore = useAuthStore()
  try {
    const routesList = getFlatMenuList(routes)
    // 3.添加动态路由
    routesList.forEach((item: Api.Route.UserRoute) => {
      const { children, ...route } = item
      if (route.component && typeof route.component == 'string') {
        route.component = modules[`/src/views${route.component}.vue`]
      }

      if (route.meta?.isFull) {
        router.addRoute(route as unknown as RouteRecordRaw)
      } else {
        router.addRoute('layout', route as unknown as RouteRecordRaw)
      }
    })
  } catch (error) {
    // 当按钮 || 菜单请求出错时，重定向到登陆页
    authStore.resetStore()
    router.replace(GlobalConfig.LOGIN_URL)
    return Promise.reject(error)
  }
}
