import { useSvgIcon } from '@/hooks/common/icon'
import { $t } from '@/locales'
import type { _RouteRecordBase } from 'vue-router'

/**
 * Get cache route names
 *
 * @param routes Vue routes (two levels)
 */
export function getCacheRouteNames(routes: Api.Route.UserRoute[]) {
  const cacheNames: App.Global.RouteKey[] = []

  routes.forEach((route) => {
    // only get last two level route, which has component
    route.children?.forEach((child) => {
      if (child.component && child.meta?.isKeepAlive) {
        cacheNames.push(child.name as App.Global.RouteKey)
      }
    })
  })

  return cacheNames
}

/**
 * Transform menu to searchMenus
 *
 * @param menus - menus
 * @param treeMap
 */
export function transformMenuToSearchMenus(menus: App.Global.Menu[], treeMap: App.Global.Menu[] = []) {
  if (menus && menus.length === 0) return []
  return menus.reduce((acc, cur) => {
    if (!cur.children) {
      acc.push(cur)
    }
    if (cur.children && cur.children.length > 0) {
      transformMenuToSearchMenus(cur.children, treeMap)
    }
    return acc
  }, treeMap)
}

/**
 * Get global menu by route
 *
 * @param route
 */
function getGlobalMenuByBaseRoute(route: Api.Route.UserRoute) {
  const { SvgIconVNode } = useSvgIcon()

  const { name, path } = route
  const { title, i18nKey, icon = import.meta.env.VITE_MENU_ICON, localIcon, iconFontSize } = route.meta ?? {}

  const label = i18nKey ? $t(i18nKey) : title!

  const menu: App.Global.Menu = {
    key: name as string,
    label,
    i18nKey,
    routeKey: name as App.Global.RouteKey,
    routePath: path as App.Global.RoutePath,
    icon: SvgIconVNode({ icon, localIcon, fontSize: iconFontSize || 20 }),
  }

  return menu
}

/**
 * Get global menus by auth routes
 *
 * @param routes Auth routes
 */
export function getGlobalMenusByRoutes(routes: Api.Route.UserRoute[]) {
  const menus: App.Global.Menu[] = []

  routes.forEach((route) => {
    if (!route.meta?.hideInMenu) {
      const menu = getGlobalMenuByBaseRoute(route)

      if (route.children?.some((child) => !child.meta?.hideInMenu)) {
        menu.children = getGlobalMenusByRoutes(route.children)
      }

      menus.push(menu)
    }
  })

  return menus
}

/**
 * Update locale of global menus
 *
 * @param menus
 */
export function updateLocaleOfGlobalMenus(menus: App.Global.Menu[]) {
  const result: App.Global.Menu[] = []

  menus.forEach((menu) => {
    const { i18nKey, label, children } = menu

    const newLabel = i18nKey ? $t(i18nKey) : label

    const newMenu: App.Global.Menu = {
      ...menu,
      label: newLabel,
    }

    if (children?.length) {
      newMenu.children = updateLocaleOfGlobalMenus(children)
    }

    result.push(newMenu)
  })

  return result
}
