const ShoppingCard = ({ item }) => {
  const { name, price, image } = item;
  return (
    <div className="card p-3 rounded-lg bg-white hover:shadow-lg transition duration-300">
      <div className="w-full rounded-t-md overflow-hidden h-[280px]">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="card-body font-medium pt-3">
        <h5 className="sub-title">{name}</h5>
        <p className="py-2">{price}</p>
        <button className="w-full py-3 text-white bg-neutral-800 rounded">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingCard;
