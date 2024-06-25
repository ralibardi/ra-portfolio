import { lazy } from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import IRoute from '@type/route';
import { homePagePath } from './routePaths';

const HomePage = lazy(() => import('@pages/homePage'));

export const getAppRoutes: IRoute[] = [
  { path: homePagePath, index: true, component: HomePage, label: 'Home', icon: faHome },
];
