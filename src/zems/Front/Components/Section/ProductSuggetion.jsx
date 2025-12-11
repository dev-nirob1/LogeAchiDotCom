import ProductCard from "../Widget/ProductCard";

const ProductSuggetion = () => {
  const productSuggetion = [
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Premium Denim Jacket",
      price: 3499,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Stylish Running Sneakers",
      price: 2899,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Casual Slim Fit Jeans",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="bg-accent">
      <section className="my-container">
      <h3 className="text-3xl font-medium mb-4">Product you may like</h3>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productSuggetion.map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })}
      </div>
    </section>
    </div>
  );
};

export default ProductSuggetion;
