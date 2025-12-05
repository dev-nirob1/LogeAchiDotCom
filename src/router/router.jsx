import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import frontRoutes from "../zems/Front/frontRoutes";
import AuthLayout from "../zems/Auth/Layout/AuthLayout";
import { authRoutes } from "../zems/Auth/authRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [...frontRoutes, ],
  },
  {
    element: <AuthLayout/>,
    children:[...authRoutes]
  }
]);
export default router