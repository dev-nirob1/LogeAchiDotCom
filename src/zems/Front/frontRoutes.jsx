import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";

const frontRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
];
export default frontRoutes;
