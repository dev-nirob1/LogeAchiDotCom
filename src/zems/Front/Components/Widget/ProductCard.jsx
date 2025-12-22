import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handleAddToCart } from "../../../../store/cartSlice";
import { Button } from "@/components/ui/button"

const ProductCard = ({ item }) => {
  const {id, title, price, thumbnail } = item;
  const cartData = {
    id: id,
    name: title,
    price:price, 
    image: thumbnail
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
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="card-body font-medium pt-3">
        <Link to="/product/1">
          <h5 className="group-hover:text-blue-400 transition sub-title">{title}</h5>
        </Link>
        <div className="flex items-center gap-2">
          <p>BDT {price} ৳</p>
          <del>{price} ৳</del>
        </div>
        <Button className="w-full text-white mt-2" onClick={HandleAddToCart}>Add To Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
