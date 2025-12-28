import BreadCrumb from "../../../Components/Widgets/BreadCrumb";
import ProductCard from "../Components/Widget/ProductCard";
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

const LIMIT = 12;

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  // ===== Query params =====
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const page = Number(searchParams.get("page")) || 1;

  const skip = (page - 1) * LIMIT;

  // ===== Fetch products =====
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
        );
        setProducts(res.data.products);
        setTotal(res.data.total);
      } catch (error) {
        console.error("Product fetch failed", error);
      }
    };

    fetchProducts();
  }, [skip]);

  // ===== Fetch categories =====
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        setCategories(res.data);
      } catch (error) {
        console.error("Category fetch failed", error);
      }
    };

    fetchCategories();
  }, []);

  // ===== Filter by category =====
  const filteredProducts = category
    ? products.filter((item) => item.category === category)
    : products;

  // ===== Sort products =====
  const sortedProducts = [...filteredProducts];

  if (sort === "price_asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "price_desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  const totalPages = Math.ceil(total / LIMIT);

  return (
    <>
      <BreadCrumb routeName="Products" />

      <section className="my-container">
        {/* Header */}
        <div className="flex justify-between items-center pb-5 mb-6 border-b">
          <h4 className="text-2xl font-medium">All Products</h4>

          <Select
            value={sort || ""}
            onValueChange={(value) =>
              setSearchParams({
                category: category || "",
                sort: value,
                page: 1,
              })
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by price" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="price_asc">Price: Low to High</SelectItem>
              <SelectItem value="price_desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-5 gap-6">
          {/* Sidebar */}
          <div className="border rounded-md p-3 h-fit">
            <h5 className="font-medium mb-3">Categories</h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products?page=1"
                  className="block p-2 bg-accent rounded"
                >
                  All
                </Link>
              </li>

              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/products?category=${cat.slug}&page=1`}
                    className="block p-2 bg-accent rounded"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-4">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sortedProducts.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                disabled={page === 1}
                onClick={() =>
                  setSearchParams({
                    category: category || "",
                    sort: sort || "",
                    page: page - 1,
                  })
                }
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Prev
              </button>

              <span className="flex items-center">
                Page {page} of {totalPages}
              </span>

              <button
                disabled={page >= totalPages}
                onClick={() =>
                  setSearchParams({
                    category: category || "",
                    sort: sort || "",
                    page: page + 1,
                  })
                }
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
