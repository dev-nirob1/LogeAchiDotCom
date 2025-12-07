const SectionTitle = ({ children }) => {
  return (
    <h3 className="text-2xl text-center md:text-3xl font-bold pb-3 mb-8 relative uppercase after:content-[''] after:absolute after:mx-auto after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 md:after:h-1 after:w-20 after:bg-dark">
      {children}
    </h3>
  );
};

export default SectionTitle;
