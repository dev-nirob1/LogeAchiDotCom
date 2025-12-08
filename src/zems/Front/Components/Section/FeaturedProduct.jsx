import SectionTitle from "../../../../Components/Widgets/SectionTitle";
import ProductCard from "../Widget/ProductCard";

const FeaturedProduct = ({featured}) => {
console.log(featured);
  return (
    <section className="">
      <div className="my-container">
        <SectionTitle>Featured Product</SectionTitle>
        {/* <h3 className="text-4xl font-bold mb-8"></h3> */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((item) => {
            return <ProductCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
