import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handleAddToCart } from "../../../../store/cartSlice";

const ProductCard = ({ item }) => {
  const {id, name, price, image } = item;
  const cartData = {
    id: id,
    name: name,
    price:price, 
    image: image
  }
  const dispatch = useDispatch()

  const HandleAddToCart = ()=> {
    dispatch(handleAddToCart(cartData))
  }

  return (
    <div className="card group p-3 rounded-lg bg-white border border-accent hover:shadow-lg transition duration-300">
      <div className="w-full rounded-md overflow-hidden h-[260px]">
        <img
          className="group-hover:scale-110 transition duration-500"
          src={image}
          alt=""
        />
      </div>
      <div className="card-body font-medium pt-3">
        <Link className="group-hover:text-blue-500" to="/product/1">
          <h5 className="sub-title">{name}</h5>
        </Link>
        <div className="flex items-center gap-2">
          <p>BDT {price} ৳</p>
          <del>{price} ৳</del>
        </div>
        <button onClick={HandleAddToCart} className="w-full py-2 text-white bg-primary mt-2">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
