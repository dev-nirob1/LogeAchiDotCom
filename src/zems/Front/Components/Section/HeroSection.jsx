import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// swiper js styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const HeroSection = () => {
  return (
    <section className="min-h-screen grid place-content-center bg-accent">
      <div className="my-container">
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          speed={800}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className="grid md:grid-cols-2 items-center">
              <div className="py-8">
                <h1 className="hero-title">
                  Classic White T-Shirt
                </h1>
                <p className="md:text-lg">
                 Stay comfortable and stylish with this premium cotton t-shirt. Perfect for casual wear or layering with jackets.
                </p>
                <button className="bg-primary text-white mt-2 rounded px-6 py-2">
                  BUY NOW
                </button>
              </div>
              <div className="image relative">
                <img className="z-10 relative" src="https://images.unsplash.com/photo-1593032465170-17c3c6b1c8f2?auto=format&fit=crop&w=800&q=80" alt="" />
                <div className="h-full w-full absolute inset-0 rounded-full z-0 bg-secondary"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid md:grid-cols-2 items-center">
              <div className="py-8">
                <h1 className="hero-title">
                  Wear Bold Styles Made For Modern You
                </h1>
                <p className="md:text-lg">
                  Discover premium everyday wear designed for comfort,
                  confidence, and effortless style. Shop the latest fashion
                  trends now.
                </p>
                <button className="bg-primary text-white mt-2 rounded px-6 py-2">
                  BUY NOW
                </button>
              </div>
              <div className="image relative">
                <img className="z-10 relative" src="/hero-1.png" alt="" />
                <div className="h-full w-full absolute inset-0 rounded-full z-0 bg-secondary"></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
