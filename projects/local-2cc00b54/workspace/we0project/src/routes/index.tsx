import type { RouteObject } from 'react-router-dom';
import { featureRoutes } from "../features/client";
import HomePage from '../app/home';
import AuthPage from '../app/auth';
import We0AuthCallbackPage from '../app/auth/we0';
import { ClientOnlyRoute, lazyRoute } from '../../we0-runtime';
import RoutePlaceholder from '../../we0-runtime/route-placeholder';

const Back = lazyRoute(() => import('../app/admin/back'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/auth/we0',
    element: <We0AuthCallbackPage />,
  },
  {
    path: '/cms/*',
    // ClientOnlyRoute keeps CMS out of SSR; Back is Suspense-safe via lazyRoute.
    element: (
      <ClientOnlyRoute>
        <Back />
      </ClientOnlyRoute>
    ),
  },
  ...featureRoutes,
  {
    path: '*',
    element: <RoutePlaceholder />,
  },
];
