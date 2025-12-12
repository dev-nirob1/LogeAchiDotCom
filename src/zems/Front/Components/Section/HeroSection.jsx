// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const HeroSection = () => {
  return (
    <section className="min-h-screen grid place-content-center bg-accent">
      <div className="my-container">
          <Swiper
      spaceBetween={50}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
            <SwiperSlide>
            <div className="grid md:grid-cols-2 items-center">
              <div className="py-8">
                <h1 className="hero-title">Premium Denim Jackets Collection</h1>
                <p className="md:text-lg">
                  Elevate your outfit with our versatile denim jackets. Perfect
                  for layering over tees or dresses, combining comfort and style
                  for every season.
                </p>
                <button className="bg-primary text-white mt-2 rounded px-6 py-2">
                  SHOP NOW
                </button>
              </div>
              <div className="image">
                <img src="/t-shirt.png" alt="image" />
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="grid md:grid-cols-2 items-center">
              <div className="py-8">
                <h1 className="hero-title">Casual Streetwear Looks</h1>
                <p className="md:text-lg">
                  Discover effortless streetwear outfits for everyday style. Mix
                  and match our versatile pieces to create your perfect look.
                </p>
                <button className="bg-primary text-white mt-2 rounded px-6 py-2">
                  SHOP NOW
                </button>
              </div>
              <div className="image">
                <img src="/t-shirt.png" alt="image" />
              </div>
            </div>
            </SwiperSlide>
            </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
