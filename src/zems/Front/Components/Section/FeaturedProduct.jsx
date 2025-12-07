import SectionTitle from "../../../../Components/Widgets/SectionTitle";
import ShoppingCard from "../Widget/ShoppingCard";

const FeaturedProduct = () => {
  const featuredProducts = [
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
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Stylish Running Sneakers",
      price: 2899,
      image:
        "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Casual Slim Fit Jeans",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1618786177957-29d9b6b26d8a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Modern Hoodie Sweatshirt",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Elegant Summer Dress",
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Elegant Summer Dress",
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Elegant Summer Dress",
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="bg-accent">
      <div className="my-container">
        <SectionTitle>Featured Product</SectionTitle>
        {/* <h3 className="text-4xl font-bold mb-8"></h3> */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((item) => {
            return <ShoppingCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
