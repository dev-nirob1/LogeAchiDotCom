import { Link } from "react-router-dom";

const ShoppingCard = ({ item }) => {
  const { name, price, image } = item;
  return (
    <div className="card group p-3 rounded-lg bg-white hover:shadow-lg transition duration-300">
      <div className="w-full rounded-md overflow-hidden h-[280px]">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          src={image}
          alt=""
        />
      </div>
      <div className="card-body font-medium pt-3">
        <Link className="group-hover:text-red-500" to="/product/1">
          <h5 className="sub-title">{name}</h5>
        </Link>
        <p className="py-2">BDT {price} ৳</p>
        <button className="w-full py-2 text-white bg-neutral-800 rounded cursor-pointer">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingCard;
