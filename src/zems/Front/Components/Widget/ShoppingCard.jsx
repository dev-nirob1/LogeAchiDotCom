const ShoppingCard = ({item}) => {
    const {name, price, image} = item;
  return (
    <div className="card hover:bg-white">
      <div className="w-full h-[280px]">
        <img className="w-full h-full object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="card-body font-medium py-2 px-1">
        <h5 className="sub-title">{name}</h5>
        <p className="py-2">{price}</p>
        <button className="w-full py-3 text-white bg-neutral-800 rounded">Add To Cart</button>
      </div>
    </div>
  );
};

export default ShoppingCard;
