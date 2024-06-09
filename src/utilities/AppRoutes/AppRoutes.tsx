import { lazy } from "react";
import {RouteProps} from "react-router-dom";

const HomePage = lazy(() => import("@pages/HomePage"));
const ErrorPage = lazy(() => import("@pages/ErrorPage"));
  
const AppRoutes: RouteProps[] = [
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
];

export default AppRoutes;