import BestSellingProduct from "../Components/Section/BestSellingProduct";
import CategoriesSection from "../Components/Section/CategoriesSection";
import FeaturedProduct from "../Components/Section/FeaturedProduct";
import HeroSection from "../Components/Section/HeroSection";
import NewArrivals from "../Components/Section/NewArrivals";
import WhyChooseUs from "../Components/Section/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <CategoriesSection/>
      <FeaturedProduct />
      <NewArrivals />
      <BestSellingProduct/>
    </>
  );
};

export default HomePage;
