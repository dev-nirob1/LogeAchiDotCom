import CartPage from "./Pages/CartPage";
import CategoryPage from "./Pages/FlashSale";
import CheckoutPage from "./Pages/CheckoutPage";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import ProductPage from "./Pages/ProductPage";
import FlashSale from "./Pages/FlashSale";

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
    path: "/flash-sale",
    element: <FlashSale />,
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
