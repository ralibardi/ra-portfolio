import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from '@utilities/AppRoutes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loading } from '@components/shared/loading';

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
      <Routes>
        {AppRoutes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
)
