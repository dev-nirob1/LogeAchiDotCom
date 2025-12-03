import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";

const frontRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
];
export default frontRoutes;
