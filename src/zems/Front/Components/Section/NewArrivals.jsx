import SectionTitle from "../../../../Components/Widgets/SectionTitle";
import ProductCard from "../Widget/ProductCard";

const NewArrivals = () => {
  const newArrivals = [
    {
      id: 1,
      name: "Urban Oversized Hoodie",
      price: 2199,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Lightweight Sports Jacket",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Premium Cotton Polo Shirt",
      price: 1599,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Slim Fit Denim Jeans",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Classic High-Top Sneakers",
      price: 3299,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Soft Linen Casual Shirt",
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Soft Linen Casual Shirt",
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Soft Linen Casual Shirt",
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="bg-accent">
      <div className="container mx-auto">
        <SectionTitle>New Arrivals</SectionTitle>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {newArrivals.map((item) => {
            return <ProductCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
