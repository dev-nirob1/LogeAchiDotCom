
const PaymenMethod = () => {
    return (
        <div className="space-y-3 my-4">
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
    );
};

export default PaymenMethod;