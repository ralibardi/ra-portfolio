// import packages
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import {
  rootPath
} from "./routePaths";
import { Loading } from "@components/loading";

const BasePage = lazy(() => import("@pages/basePage"));
const HomePage = lazy(() => import("@pages/homePage"));
const ErrorPage = lazy(() => import("@pages/errorPage"));

const AllRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path={rootPath} element={<BasePage />}>
            <Route index element={<HomePage />} errorElement={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;