import BreadCrumb from "../../../Components/Widgets/BreadCrumb";
import CartSummary from "../Components/Widget/CartSummary";
import CartTable from "../Components/Widget/CartTable";
import CustomerInfoForm from "../Components/Widget/CustomerInfoForm";

const CheckoutPage = () => {
  return (
    <div>
      <BreadCrumb />
      <section className="my-container">
        <div className="grid md:grid-cols-5 gap-4">

          {/* customer information form  */}
          <div className="col-span-2">
            <CustomerInfoForm/>
          </div>

          <div className="border border-accent rounded p-3 col-span-3">
           <CartTable/>

            {/* cart total price  */}
           <CartSummary/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
