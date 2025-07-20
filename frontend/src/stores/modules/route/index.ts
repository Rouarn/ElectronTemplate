import { initDynamicRouter } from '@/router/modules/dynamicRouter'
import { fetchAuthMenuListApi } from '@/service/api/login'
import { getCacheRouteNames, getGlobalMenusByRoutes, transformMenuToSearchMenus } from './shared'
import { SetupStoreId } from '@/enum'
import useBoolean from '@/hooks/common/use-boolean'
import { defineStore } from 'pinia'

export const useRouteStore = defineStore(SetupStoreId.Route, () => {
  const { bool: isInitConstantRoute, setBool: setIsInitConstantRoute } = useBoolean()

  /** Global menus */
  const menus = ref<App.Global.Menu[]>([])
  const searchMenus = computed(() => transformMenuToSearchMenus(menus.value))

  /** Get global menus */
  function getGlobalMenus(routes: Api.Route.UserRoute[]) {
    menus.value = getGlobalMenusByRoutes(routes)
  }

  /** Cache routes */
  const cacheRoutes = ref<App.Global.RouteKey[]>([])

  /**
   * Get cache routes
   *
   * @param routes Vue routes
   */
  function getCacheRoutes(routes: Api.Route.UserRoute[]) {
    cacheRoutes.value = getCacheRouteNames(routes)
  }

  /** Initialize route */
  async function initRoute() {
    if (isInitConstantRoute.value) return

    const { data } = await fetchAuthMenuListApi()

    initDynamicRouter(data)

    getGlobalMenus(data)

    getCacheRoutes(data)

    setIsInitConstantRoute(true)
  }

  return {
    menus,
    searchMenus,
    cacheRoutes,
    isInitConstantRoute,
    initRoute,
    getGlobalMenus,
  }
})
