// import packages
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { getAppRoutes } from '@utils/getAppRoutes';
import IRoute from '@type/route';
import { rootPath } from '@utils/routePaths';
import useError from '@hooks/useError';

const Loading = lazy(() => import('@components/loading'));
const BasePage = lazy(() => import('@pages/basePage'));
const ErrorPage = lazy(() => import('@pages/errorPage'));

const AllRoutes: React.FC = () => {
  const error = useError();

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          {error.error ? (
            <Route path="*" element={<ErrorPage error={error.error} />} />
          ) : (
            <>
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
              <Route path="*" element={<ErrorPage />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;
