import { FaStar } from "react-icons/fa";

const ProductReviews = ({ reviews, rating }) => {
  return (
    <section className="bg-accent">
      <div className="my-container">
        <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="md:col-span-2 space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border rounded-xl p-6 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <div className="flex items-center gap-1">
                      {reviews.map((review, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm ${
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>

                <p className="text-gray-600">{review.comment}</p>

                <span className="inline-block mt-3 text-xs text-green-600 bg-green-100 px-3 py-1 rounded-full">
                  ✔ Verified Purchase
                </span>
              </div>
            ))}
          </div>
          {/* Rating Summary */}
          <div className="border rounded-xl p-6 h-fit bg-white">
            <p className="text-4xl font-bold">{rating}</p>
            <div className="flex items-center gap-1 my-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
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
