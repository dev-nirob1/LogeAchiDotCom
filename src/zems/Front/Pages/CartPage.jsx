import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import CartSummary from "../Components/Widget/CartSummary";
import CartTable from "../Components/Widget/CartTable";
import BreadCrumb from "../../../Components/Widgets/BreadCrumb";
import { useSelector } from "react-redux";

const CartPage = () => {

  const cart = useSelector((state)=> state.cartSlice)
  console.log(cart);
  return (
    <div>
      <BreadCrumb routeName={'Cart'} />
      <section className="container mx-auto">
        <div className="grid grid-cols-6 gap-4 items-start">
          {/* cart table  */}
          <div className="col-span-4">
            <CartTable cart={cart} />
          </div>

          {/* cart summary  */}
          <div className="col-span-2">
            <CartSummary cart={cart} />
            
      <Button asChild className="mt-3 bg-primary text-white w-full">
        <Link to="/checkout">
        Checkout</Link>
      </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
