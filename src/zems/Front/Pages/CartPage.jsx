import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-6 gap-4">
          {/* cart table  */}
          <table className="col-span-4 w-full border border-gray-50">
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

          {/* cart calculation  */}
          <div className="border border-gray-50 col-span-2 h-fit">
            <div>
              <h5 className="sub-title bg-gray-100 py-2 px-4">Cart Summary</h5>

              {/* cart information  */}
              <div className="data py-4 px-4">
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
                <Link to="/checkout"><button className="p-2 mt-2 cursor-pointer rounded bg-neutral-900 text-white font-semibold w-full">
                  Proceed To Checkout
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
