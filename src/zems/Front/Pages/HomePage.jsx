// import { CgHome } from "react-icons/cg";
import BestSellingProduct from "../Components/Section/BestSellingProduct";
import CategoriesSection from "../Components/Section/CategoriesSection";
import FeaturedProduct from "../Components/Section/FeaturedProduct";
import HeroSection from "../Components/Section/HeroSection";
import NewArrivals from "../Components/Section/NewArrivals";
import WhyChooseUs from "../Components/Section/WhyChooseUs";
// import { useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import axios from "axios";
import FlashSaleBanner from "../Components/Section/FlashSaleBanner";

const HomePage = () => {
  //  const home = useSelector((state) => state.homeSlice.home)
  //  console.log(home.featuredProducts);

  // const [homeData, setHomeData] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);

  useEffect(() => {
    const fetchHomedata = async () => {
      const res = await axios.get("https://dummyjson.com/products?limit=100");
      // setHomeData(res.data.products);

      const featuredProduct = res.data.products
        .filter((item) => item.rating >= 4.5)
        .slice(0, 8);
      const bestProduct = res.data.products
        .filter((item) => item.rating >= 4)
        .slice(0, 8);
      setBestSelling(bestProduct);
      setFeatured(featuredProduct);
    };
    fetchHomedata();
  }, []);

  console.log(featured);

  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <CategoriesSection />
      <FeaturedProduct featured={featured} />
      <FlashSaleBanner/>
      {/* <NewArrivals newArrivals={newArrivals} /> */}
      <BestSellingProduct bestSelling={bestSelling} />
    </>
  );
};

export default HomePage;
