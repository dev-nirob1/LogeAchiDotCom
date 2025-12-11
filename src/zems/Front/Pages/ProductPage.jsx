import { FaAngleDown } from "react-icons/fa";
import BreadCrumb from "../../../Components/Widgets/BreadCrumb";
import ProductCard from "../Components/Widget/ProductCard";

const ProductPage = () => {
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
      <BreadCrumb />
      <section className="my-container">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-2xl font-medium">All Product</h4>
          <select className="rounded">
            <option value="" disabled>
              Price
            </option>
            <option value="low-high">Low to High</option>
            <option value="high-low">Hight to Low</option>
          </select>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="border border-accent rounded-md p-3 h-fit">
            {/* filter option  */}
            <div>
              <h5 className="sub-title bg-secondary rounded-md p-2 mb-2">
                Category
              </h5>
              <ul className="space-y-2">
                <li className="p-2 bg-accent flex justify-between items-center">
                  Men{" "}
                  <span>
                    <FaAngleDown />
                  </span>
                </li>
                <li className="p-2 bg-accent flex justify-between items-center cursor-pointer">Women<span>
                    <FaAngleDown />
                  </span></li>
                <li className="p-2 bg-accent flex justify-between items-center cursor-pointer">Baby<span>
                    <FaAngleDown />
                  </span></li>
                <li className="p-2 bg-accent flex justify-between items-center cursor-pointer">Accessories<span>
                    <FaAngleDown />
                  </span></li>
              </ul>
            </div>
          </div>

          {/* product card  */}
          <div className="md:col-span-4 grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allProducts.map((item) => {
              return <ProductCard item={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
