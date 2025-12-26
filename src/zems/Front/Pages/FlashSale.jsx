import { useEffect, useState } from "react";
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

const FlashSale = () => {
  const [flashSale, setFlashSale] = useState([]);

  useEffect(() => {
    const fetchFlashSale = async () => {
      const res = await axios.get("https://dummyjson.com/products");

      const flashSaleProduct = res.data.products
        .filter((item) => item.discountPercentage >= 10)
        .slice(0, 8);

      setFlashSale(flashSaleProduct);
    };

    fetchFlashSale();
  }, []);

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
          {flashSale.map((item) => {
            return <ProductCard item={item} key={item.id} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default FlashSale;
