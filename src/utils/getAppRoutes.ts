import { lazy } from "react";
import { faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import RouteType from "@type/routeType";
import { errorPagePath, homePagePath, rootPath } from "./routePaths";

const BasePage = lazy(() => import('@pages/basePage'));
const HomePage = lazy(() => import('@pages/homePage'));
const ErrorPage = lazy(() => import('@pages/errorPage'));

export const getAppRoutes: RouteType[] = [
  { path: rootPath, component: BasePage, label: 'Home', icon: faHome,
    children: [
      { path: homePagePath, component: HomePage, label: 'Home', icon: faHome },
    ]
  },
  { path: errorPagePath, component: ErrorPage, label: 'About', icon: faInfoCircle },
];
