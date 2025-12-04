import FeaturedProduct from "../Components/Section/FeaturedProduct";
import HeroSection from "../Components/Section/HeroSection";
import NewArrivals from "../Components/Section/NewArrivals";
import WhyChooseUs from "../Components/Section/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <WhyChooseUs />
      <FeaturedProduct />
      <NewArrivals />
    </>
  );
};

export default HomePage;
