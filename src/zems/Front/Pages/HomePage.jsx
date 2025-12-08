import { CgHome } from "react-icons/cg";
import BestSellingProduct from "../Components/Section/BestSellingProduct";
import CategoriesSection from "../Components/Section/CategoriesSection";
import FeaturedProduct from "../Components/Section/FeaturedProduct";
import HeroSection from "../Components/Section/HeroSection";
import NewArrivals from "../Components/Section/NewArrivals";
import WhyChooseUs from "../Components/Section/WhyChooseUs";
import { useSelector } from 'react-redux'

const HomePage = () => {
   const home = useSelector((state) => state.homeSlice.home)
   console.log(home.featuredProducts);
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <CategoriesSection/>
      <FeaturedProduct featured={home.featuredProducts} />
      <NewArrivals newArrivals={home.newArrivals} />
      <BestSellingProduct bestSelling={home.bestSellingProducts}/>
    </>
  );
};

export default HomePage;
