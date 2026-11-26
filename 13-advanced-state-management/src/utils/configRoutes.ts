import type { AppRoute } from '@/@types/global';
import type {
  RouteObject,
  IndexRouteObject,
  NonIndexRouteObject,
} from 'react-router';


export function configRoutes(navigation: AppRoute[]): RouteObject[] {
  return navigation.map((item) => {
    const { children, ...routeProps } = item;

    // index 라우트 판단: path가 빈 문자열이거나 '/'인 경우
    const isIndex = routeProps.path === '' || routeProps.path === '/';

    let route: RouteObject;

    if (isIndex) {
      // path 제거 + index: true 로 새 객체 생성
      const { path: _omit, ...rest } = routeProps;
      route = { ...rest, index: true } as IndexRouteObject;
    } else {
      route = routeProps as NonIndexRouteObject;
    }

    if (children && children.length > 0) {
      route.children = configRoutes(children);
    }

    return route;
  });
}

