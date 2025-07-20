/**
 * Namespace Api
 *
 * All backend api type
 */
declare namespace Api {
  /**
   * namespace Auth
   *
   * backend api module: "auth"
   */
  namespace Auth {
    interface LoginToken {
      token: string
    }

    interface UserInfo {
      userId: string
      userName: string
    }
  }

  /**
   * namespace Route
   *
   * backend api module: "route"
   */
  namespace Route {
    type _RouteRecordBase = import('vue-router')._RouteRecordBase

    /** elegant const route */
    type CustomRoute = Omit<_RouteRecordBase, 'name' | 'path' | 'children'> & {
      name: string
      path: string
      component?: string | (() => Promise<unknown>)
      children?: CustomRoute[]
    }

    interface UserRoute extends CustomRoute {
      id?: string
    }
  }
}
