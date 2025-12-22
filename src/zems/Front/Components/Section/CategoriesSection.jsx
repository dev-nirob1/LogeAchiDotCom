import { Link } from "react-router-dom";
import SectionTitle from "../../../../Components/Widgets/SectionTitle";
import { useEffect, useState } from "react";
import axios from "axios";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  // const categories = [
  //   {
  //     id: 1,
  //     name: "Men",
  //     slug: "men",
  //     image:
  //       "https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 2,
  //     name: "Women",
  //     slug: "women",
  //     image:
  //       "https://images.pexels.com/photos/17360615/pexels-photo-17360615.jpeg?_gl=1*1o42yst*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3NjUxMjMxOTIkbzQwJGcxJHQxNzY1MTIzMjA3JGo0NSRsMCRoMA..",
  //   },
  //   {
  //     id: 3,
  //     name: "Accessories",
  //     slug: "accessories",
  //     image:
  //       "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 4,
  //     name: "Baby",
  //     slug: "baby",
  //     image:
  //       "https://images.unsplash.com/photo-1549588974-98aae09c3845?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data);
    };
    fetchCategories();
  }, []);
  
  return (
    <section className="bg-accent">
      <div className="my-container">
        <SectionTitle>Categories</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-6">
          {categories.map((item) => {
            return (
              <Link
                to={`/products/${item.slug}`}
                key={item.id}
                className="group relative"
              >
                <div className="image overflow-hidden rounded">
                  <img
                    className="group-hover:scale-110 transition duration-500"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 group-hover:bg-linear-to-t from-[rgba(0,0,0,.5)] to-[rgba(0,0,0,.0)] md:invisible md:group-hover:visible flex items-center justify-center">
                  <p className="text-white font-medium text-sm md:text-xl">
                    {item.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
