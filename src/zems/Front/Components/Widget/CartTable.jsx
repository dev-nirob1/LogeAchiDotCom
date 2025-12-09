import { useDispatch } from "react-redux";
import { clearCart } from "../../../../store/cartSlice";
const CartTable = ({cart}) => {
  const dispatch = useDispatch()
  const handleDeleteCart = ()=> {
    dispatch(clearCart())
  }
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
        {
         cart?.cart.map(item => {
        return <tr key={item.id} className="not-last:border-b not-last:border-b-accent">
          <td className="p-2 flex items-center gap-4">
            <img
              className="h-16 w-16"
              src={item.image}
              alt=""
            />
            <div>
              <h5 className="font-semibold">{item.name}</h5>
              <p className="text-sm mt-1">Size: L</p>
            </div>
          </td>

          <td>৳ {item.price}</td>

          <td>
            <div className="flex items-center">
              <button className="px-3 py-1 bg-primary text-white">-</button>
              <input className="px-4 py-1 bg-accent" type="text" value={cart.quantity} />
              {/* <span className="px-4 py-1 bg-accent">{cart.quantity}</span> */}
              <button className="px-3 py-1 bg-primary text-white">+</button>
            </div>
          </td>

          <td>৳ {cart.totalAmount}</td>

          <td>
            <button onClick={handleDeleteCart} className="bg-red-600 rounded text-white px-2 py-1">
              Remove
            </button>
          </td>
        </tr>

         }) 
        }
      </tbody>
    </table>
  );
};

export default CartTable;
