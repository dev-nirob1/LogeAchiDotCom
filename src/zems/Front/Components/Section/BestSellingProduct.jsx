import SectionTitle from "../../../../Components/Widgets/SectionTitle";
import ProductCard from "../Widget/ProductCard";

const BestSelling = ({ bestSelling }) => {
  return (
    <section>
      <div className="container mx-auto">
        <SectionTitle>Best selling products</SectionTitle>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bestSelling.map((item) => {
            return <ProductCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default BestSelling;
