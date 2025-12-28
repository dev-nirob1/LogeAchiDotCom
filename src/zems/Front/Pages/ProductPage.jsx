import BreadCrumb from "../../../Components/Widgets/BreadCrumb";
import ProductCard from "../Components/Widget/ProductCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const ProductPage = () => {
  // const allProducts = [
  //   {
  //     id: 1,
  //     name: "Classic Cotton T-Shirt",
  //     price: 29.99,
  //     category: "tshirt",
  //     image:
  //       "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
  //   },
  //   {
  //     id: 2,
  //     name: "Premium Sports Hoodie",
  //     price: 49.99,
  //     category: "hoodie",
  //     image:
  //       "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
  //   },
  //   {
  //     id: 3,
  //     name: "Slim Fit Denim Jacket",
  //     price: 69.99,
  //     category: "jacket",
  //     image:
  //       "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
  //   },
  //   {
  //     id: 4,
  //     name: "Casual Summer Shorts",
  //     price: 24.99,
  //     category: "shorts",
  //     image:
  //       "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
  //   },
  //   {
  //     id: 5,
  //     name: "Everyday Track Pants",
  //     price: 34.99,
  //     category: "pants",
  //     image:
  //       "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
  //   },
  //   {
  //     id: 6,
  //     name: "Sports Performance Tee",
  //     price: 27.99,
  //     category: "tshirt",
  //     image:
  //       "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
  //   },
  //   {
  //     id: 7,
  //     name: "Winter Fleece Jacket",
  //     price: 89.99,
  //     category: "jacket",
  //     image:
  //       "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
  //   },
  //   {
  //     id: 8,
  //     name: "Urban Cargo Pants",
  //     price: 39.99,
  //     category: "pants",
  //     image:
  //       "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
  //   },
  //   {
  //     id: 9,
  //     name: "Minimalist Polo Shirt",
  //     price: 32.99,
  //     category: "tshirt",
  //     image:
  //       "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
  //   },
  //   {
  //     id: 10,
  //     name: "Premium Leather Jacket",
  //     price: 129.99,
  //     category: "jacket",
  //     image:
  //       "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
  //   },
  // ];
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get("sort");
  // console.log(searchCategory);
  const category = searchParams.get("category");
  const page = Number(searchParams.get("page")) || 1
  const limit = 12;
  const skip = (page - 1) * limit
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      console.log(res.data);
      setProducts(res.data.products);
      // setIsLoading(false);
    };
    fetchProduct();
  }, [limit, skip]);

  const filteredProducts = category
    ? products.filter((item) => item.category === category)
    : products;

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios.get("https://dummyjson.com/products/categories");
      // console.log(res.data);
      setCategories(res.data);
      // setIsLoading(false);
    };
    fetchCategory();
  }, []);
  const sortedProducts = [...filteredProducts];

  if (sort === "price_asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }
  if (sort === "price_desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }
  return (
    <>
      <BreadCrumb routeName={"Products"} />
      <section className="my-container">
        <div className="flex justify-between items-center pb-5 mb-6 border-b border-b-accent">
          <h4 className="text-2xl font-medium">All Product</h4>

          {/* select dropdown  */}
          <Select
            value={sort || ""}
            onValueChange={(value) =>
              setSearchParams({
               category: category || '',
                sort: value,
                page: 1
              })
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="price_asc">Price: Low to High</SelectItem>
              <SelectItem value="price_desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
            <button onClick={()=> {
              setSearchParams({
                category: category || '',
                sort: sort || '',
                limit: limit || '',
                skip: skip
              })
            }}>prev</button>
            <button>next</button>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="border border-accent rounded-md p-3 h-fit">
            {/* filter option  */}
            <div>
              <h5 className="sub-title bg-secondary rounded-md p-2 mb-2">
                Category
              </h5>
              <ul className="space-y-2">
                {categories.map((cat, i) => (
                  <li key={i}>
                    <Link
                      to={`/products?category=${cat.slug}`}
                      className="block p-2 bg-accent rounded"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* product card  */}
          <div className="md:col-span-4 grid md:grid-cols-3 lg:grid-cols-4 gap-4 h-fit">
            {sortedProducts.map((item) => {
              return <ProductCard item={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
