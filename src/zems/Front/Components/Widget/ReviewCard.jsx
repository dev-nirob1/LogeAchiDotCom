import { FaQuoteLeft,  FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { name, comment, rating, date, reviewerName, reviewerEmail } = review;
  return (
    <div className="border rounded-xl p-6 bg-white">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="font-medium">{name}</p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-400">{date.toString()}</span>
      </div>

      <p className="flex gap-2 text-gray-600 py-2"><FaQuoteLeft/> {comment}</p>
      <div className="mt-2">
        <h5 className="sub-title">{reviewerName}</h5>
        <span>{reviewerEmail}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
