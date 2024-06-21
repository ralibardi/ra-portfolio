// import packages
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { getAppRoutes } from '@utils/getAppRoutes';
import IRoute from '@type/route';

const Loading = lazy(() => import('@components/loading'));

const AllRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          {getAppRoutes.map((route: IRoute) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;
