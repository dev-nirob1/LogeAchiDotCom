const SectionTitle = ({ children }) => {
  return (
    <h3 className="text-3xl text-center md:text-4xl font-bold pb-4 mb-8 relative uppercase after:content-[''] after:absolute after:mx-auto after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-20 after:bg-neutral-900">
      {children}
    </h3>
  );
};

export default SectionTitle;
