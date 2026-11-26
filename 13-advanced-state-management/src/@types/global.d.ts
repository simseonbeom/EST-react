import type { RouteObject } from 'react-router';

export type AppRoute = Omit<RouteObject, 'children'> & {
  text?: string;
  display?: boolean;      // boolean을 쓰고 있으니 타입도 boolean
  children?: AppRoute[];
}
