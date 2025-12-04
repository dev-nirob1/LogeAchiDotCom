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
              <tr className="not-last:border-b">
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
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

        {/* cart calculation  */}
    <div className="border col-span-2">
        
    </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
