import { Link } from "react-router-dom";
import SectionTitle from "../../../../Components/Widgets/SectionTitle";
import { categories } from "../../../../utils";
const CategoriesSection = () => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const res = await axios.get("https://dummyjson.com/products/categories");
  //     setCategories(res.data);
  //   };
  //   fetchCategories();
  // }, []);

  return (
    <section className="bg-accent">
      <div className="my-container">
        <SectionTitle>Categories</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((item,i) => {
            return (
              <Link
                to={`/products?category=${item.slug}`}
                key={i}
                className="group relative border rounded-md flex flex-col items-center gap-3 p-6 bg-white"
              >
                <span className="text-3xl">{item.icon}
                </span>
                <div className="font-medium">{item.name}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
