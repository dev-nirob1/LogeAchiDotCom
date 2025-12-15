import BreadCrumb from "../../../Components/Widgets/BreadCrumb";
import ProductCard from "../Components/Widget/ProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FlashSale = () => {
  const allProducts = [
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      price: 29.99,
      category: "tshirt",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Premium Sports Hoodie",
      price: 49.99,
      category: "hoodie",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Slim Fit Denim Jacket",
      price: 69.99,
      category: "jacket",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Casual Summer Shorts",
      price: 24.99,
      category: "shorts",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Everyday Track Pants",
      price: 34.99,
      category: "pants",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Sports Performance Tee",
      price: 27.99,
      category: "tshirt",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Winter Fleece Jacket",
      price: 89.99,
      category: "jacket",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Urban Cargo Pants",
      price: 39.99,
      category: "pants",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 9,
      name: "Minimalist Polo Shirt",
      price: 32.99,
      category: "tshirt",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 10,
      name: "Premium Leather Jacket",
      price: 129.99,
      category: "jacket",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
  ];

  return (
    <div>
      <BreadCrumb routeName={"Flash Sale"} />
      <section className="my-container">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-2xl font-medium">All Product</h4>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light">Price: Low to High</SelectItem>
              <SelectItem value="dark">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allProducts.map((item) => {
            return <ProductCard item={item} key={item.id} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default FlashSale;
