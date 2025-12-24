import { FaStar } from "react-icons/fa";
import ReviewCard from "../Widget/ReviewCard";

const ProductReviews = ({ reviews, rating }) => {
  console.log(reviews);
  return (
    <section className="bg-accent">
      <div className="my-container">
        <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="md:col-span-2 space-y-6">
            {reviews.map((review, i) => (
              <ReviewCard review={review} key={i}/>
            ))}
          </div>
          {/* Rating Summary */}
          <div className="border rounded-xl p-6 h-fit bg-white">
            <h3 className="text-4xl font-bold">{rating} / 5</h3>
            <div className="flex items-center gap-1 my-3">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">Based on 120 reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;
