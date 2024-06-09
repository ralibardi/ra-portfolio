import {
  createBrowserRouter,
} from "react-router-dom";
import {HomePage} from '@pages/HomePage'


const CustomBrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default CustomBrowserRouter;