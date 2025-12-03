import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import frontRoutes from "../zems/Front/frontRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [...frontRoutes],
  },
]);
export default router