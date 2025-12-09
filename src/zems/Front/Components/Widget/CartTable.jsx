const CartTable = ({cart}) => {
  return (
    <table className="col-span-4 w-full shadow-sm mb-6">
      <thead className="bg-accent px-5">
        <tr className="px-5">
          <th className="p-2 text-left">Product</th>
          <th className="text-left">Price</th>
          <th className="text-left">Quantity</th>
          <th className="text-left">Total</th>
          <th className="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="not-last:border-b not-last:border-b-accent">
          <td className="p-2 flex items-center gap-4">
            <img
              className="h-16 w-16"
              src="https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop"
              alt=""
            />
            <div>
              <h5 className="font-semibold">Classic Cotton T-Shirt</h5>
              <p className="text-sm mt-1">Size: L</p>
            </div>
          </td>

          <td>৳ 1400</td>

          <td>
            <div className="flex items-center">
              <button className="px-3 py-1 bg-primary text-white">-</button>
              <span className="px-4 py-1 bg-accent">{cart.quantity}</span>
              <button className="px-3 py-1 bg-primary text-white">+</button>
            </div>
          </td>

          <td>৳ {cart.totalAmount}</td>

          <td>
            <button className="bg-red-600 rounded text-white px-2 py-1">
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTable;
