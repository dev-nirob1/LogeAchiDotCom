const CheckoutPage = () => {
  return (
    <div className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {/* customer information  */}
          <div className="border border-gray-100 rounded p-3">
            <div>
              <h5 className="sub-title">Customer Information</h5>
              <p>Provide Information to deliver your order.</p>
            </div>
            <div className="py-4">
              <form>
                <label>
                  Your Name
                  <input
                    className="my-2 w-full border-gray-200 rounded"
                    type="text"
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Your Email
                  <input
                    className="my-2 w-full border-gray-200 rounded"
                    type="email"
                    placeholder="Your Email"
                  />
                </label>
                <label>
                  Your Number
                  <input
                    className="my-2 w-full border-gray-200 rounded"
                    type="number"
                    placeholder="Your Phone Number"
                  />
                </label>
                <label>
                  Your Full Address
                  <input
                    className="my-2 w-full border-gray-200 rounded"
                    type="text"
                    placeholder="Your Full Address"
                  />
                </label>
                <label>
                  Special message
                  <textarea
                    rows={3}
                    className="my-2 w-full border-gray-200 rounded"
                    placeholder="Any Special Instructions"
                  />
                </label>
              </form>
            </div>
          </div>

          <div className="border border-gray-100 rounded p-3">
            <table className="col-span-4 w-full border border-gray-50 mb-6">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 text-left">Product</th>
                  <th className="py-2 text-left">Price</th>
                  <th className="py-2 text-left">Quantity</th>
                  <th className="py-2 text-left">Total</th>
                  <th className="py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="not-last:border-b not-last:border-b-gray-50">
                  <td className="py-2 flex items-center gap-4">
                    <img
                      className="h-16 w-16"
                      src="https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop"
                      alt=""
                    />
                    <div>
                      <h5 className="font-semibold">Classic Cotton T-Shirt</h5>
                      <p className="text-sm text-gray-500">Size: L</p>
                    </div>
                  </td>

                  <td>৳ 1400</td>

                  <td>
                    <div className="flex items-center">
                      <button className="px-3 py-1 bg-neutral-900 text-white">
                        -
                      </button>
                      <span className="px-4 py-1 bg-gray-200">0</span>
                      <button className="px-3 py-1 bg-neutral-900 text-white">
                        +
                      </button>
                    </div>
                  </td>

                  <td>৳ 1400</td>

                  <td>
                    <button className="bg-red-500 rounded text-white px-2 py-1">
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* cart total price  */}
            <div className="data p-4 border border-gray-100">
              <div className="flex justify-between py-2">
                <h5 className="font-semibold text-neutral-800">SubTotal</h5>
                <p className="font-bold text-neutral-700">৳ 1400</p>
              </div>
              <div className="flex justify-between py-2">
                <h5 className="font-semibold text-neutral-800">
                  Deliver Charge
                </h5>
                <p className="font-bold text-neutral-700">৳ 120</p>
              </div>
              {/* total  */}
              <div className="flex justify-between py-2 border-t border-t-gray-100">
                <h5 className="font-semibold text-neutral-800">Total</h5>
                <p className="font-bold text-neutral-700">৳ 1520</p>
              </div>

              {/* payment method */}

              <div className="space-y-3 mt-3">
                <div className="flex items-center gap-2 p-3 border border-gray-100">
                  <input type="radio" name="payment" id="bkash" />{" "}
                  <label For="bkash">Bkash</label>
                </div>
                <div className="flex items-center gap-2 p-3 border border-gray-100">
                  <input type="radio" name="payment" id="nagod" />{" "}
                  <label For="nogod">Nagod</label>
                </div>
                <div className="flex items-center gap-2 p-3 border border-gray-100">
                  <input type="radio" name="payment" id="rocket" />{" "}
                  <label For="rocket">Rocket</label>
                </div>
              </div>

              <button className="p-2 mt-4 cursor-pointer rounded bg-neutral-900 text-white font-semibold w-full">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
