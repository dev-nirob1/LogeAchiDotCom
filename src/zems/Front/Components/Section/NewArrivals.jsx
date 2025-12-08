import SectionTitle from "../../../../Components/Widgets/SectionTitle";
import ProductCard from "../Widget/ProductCard";

const NewArrivals = ({newArrivals}) => {

  return (
    <section className="bg-accent">
      <div className="container mx-auto">
        <SectionTitle>New Arrivals</SectionTitle>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {newArrivals.map((item) => {
            return <ProductCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
