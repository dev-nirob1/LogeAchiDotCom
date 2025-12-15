import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";

import BreadCrumb from "../../../Components/Widgets/BreadCrumb";
import CartSummary from "../Components/Widget/CartSummary";
import CartTable from "../Components/Widget/CartTable";
import CustomerInfoForm from "../Components/Widget/CustomerInfoForm";
import PaymenMethod from "../Components/Widget/PaymenMethod";

const CheckoutPage = () => {
  
  const cart = useSelector((state)=> state.cartSlice)
  console.log(cart);
  return (
    <div >
      <BreadCrumb routeName={'Checkout'} />
      <section className="my-container">
        <div className="grid md:grid-cols-2 gap-4">

          {/* customer information form  */}
          <div className="h-fit">
            <CustomerInfoForm/>
          </div>

          <div className="border border-accent rounded p-3 h-fit">
           <CartTable cart={cart}/>

            {/* cart total price  */}
           <CartSummary cart={cart}/>
           <PaymenMethod/>
           <Button className="text-white w-full mt-4">Order Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
