
const CartSummary = ({ cart }) => {
  return (
    <div className="data p-4 shadow-sm">
      <div className="flex justify-between">
        <h5 className="font-semibold">SubTotal</h5>
        <p className="font-bold">৳ {cart.totalAmount}</p>
      </div>
      <div className="flex justify-between">
        <h5 className="font-semibold">Deliver Charge</h5>
        <p className="font-bold">৳ 120</p>
      </div>
      {/* total  */}
      <div className="flex justify-between items-center border-t border-t-gray-100">
        <h5 className="font-semibold">Total</h5>
        <p className="font-bold">৳ 1520</p>
      </div>

      {/* payment method */}

      {/* <PaymenMethod/> */}
    </div>
  );
};

export default CartSummary;
