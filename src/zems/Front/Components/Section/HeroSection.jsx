const HeroSection = () => {
  return (
    <section className="min-h-screen grid place-content-center bg-gray-200">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 items-center">
          <div>
            <h1 className="text-6xl font-bold">
              NEW ARRIVAL SPORTS EDITION <br /> T-SHIRT
            </h1>
            <button className="bg-neutral-900 text-white rounded px-6 py-2 mt-5">
              BUY NOW
            </button>
          </div>
          <div className="w-full h-full relative">
            <img className="w-full h-full z-10 relative" src="/hero-1.png" alt="" />
            <div className="h-full w-full absolute inset-0 rounded-full z-0 bg-yellow-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
