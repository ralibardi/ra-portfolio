import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { getAppRoutes } from '@utils/getAppRoutes';
import IRoute from '@type/route';
import { rootPath } from '@utils/routePaths';

const Loading = lazy(() => import('@components/loading'));
const BasePage = lazy(() => import('@pages/basePage'));

const AllRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path={rootPath} element={<BasePage />}>
            {getAppRoutes.map((route: IRoute) => (
              <Route
                key={route.path}
                path={route.path}
                index={route.index}
                element={<route.component />}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;
