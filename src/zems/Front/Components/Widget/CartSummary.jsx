const CartSummary = () => {
  return (
    <div className="data p-4 shadow-sm">
      <div className="flex justify-between">
        <h5 className="font-semibold">SubTotal</h5>
        <p className="font-bold">৳ 1400</p>
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

      <div className="space-y-3 mt-3">
        <div className="flex items-center gap-2 p-3 border border-accent">
          <input type="radio" name="payment" id="bkash" />{" "}
          <label For="bkash">Bkash</label>
        </div>
        <div className="flex items-center gap-2 p-3 border border-accent">
          <input type="radio" name="payment" id="nagod" />{" "}
          <label For="nogod">Nagod</label>
        </div>
        <div className="flex items-center gap-2 p-3 border border-accent">
          <input type="radio" name="payment" id="rocket" />{" "}
          <label For="rocket">Rocket</label>
        </div>
      </div>

      <button className="p-2 mt-4 bg-primary text-white w-full">
        Order Now
      </button>
    </div>
  );
};

export default CartSummary;
