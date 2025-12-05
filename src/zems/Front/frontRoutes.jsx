import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
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
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
];
export default frontRoutes;
