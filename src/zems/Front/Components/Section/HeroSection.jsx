const HeroSection = () => {
  return (
    <section className="min-h-screen grid place-content-center bg-gray-50">
      <div className="container mx-auto px-2">
        <div className="grid md:grid-cols-2 items-center">
          <div className="py-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize">
              Wear Bold Styles Made For Modern You
            </h1>
            <p className="mt-4 text-gray-600 md:text-lg">
              Discover premium everyday wear designed for comfort, confidence,
              and effortless style. Shop the latest fashion trends now.
            </p>
            <button className="bg-neutral-900 cursor-pointer text-white rounded px-6 py-2 mt-5">
              BUY NOW
            </button>
          </div>
          <div className="w-full h-full relative">
            <img
              className="w-full h-full z-10 relative"
              src="/hero-1.png"
              alt=""
            />
            <div className="h-full w-full absolute inset-0 rounded-full z-0 bg-yellow-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
