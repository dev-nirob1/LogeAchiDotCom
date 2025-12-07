import { Link } from "react-router-dom";
import CartSummary from "../Components/Widget/CartSummary";
import CartTable from "../Components/Widget/CartTable";
import BreadCrumb from "../../../Components/Widgets/BreadCrumb";

const CartPage = () => {
  return (
    <div>
      <BreadCrumb />
      <section className="container mx-auto">
        <div className="grid grid-cols-6 gap-4 items-start">
          {/* cart table  */}
          <CartTable />

          {/* cart summary  */}
          <div className="col-span-2">
            <CartSummary />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
