import { FunctionComponent } from 'react'
import { RouterProvider } from 'react-router-dom';
import { CustomBrowserRouter } from '@extensions/CustomBrowserRouter'

const Application: FunctionComponent = () => {
  return (
    <RouterProvider router={CustomBrowserRouter} />
  )
}

export default Application
