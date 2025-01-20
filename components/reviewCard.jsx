const ReviewCard = ({ review }) => {
    return (
      <div className="flex flex-col md:flex-row items-center  bg-white shadow-lg rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-6 md:h-[300px] md:w-2/3 justify-center mx-auto">
        <div className="flex-shrink-0 pb-4 md:pb-0">
          <img
            src= {review.image}
            alt= {review.name}
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <div className="md:pt-0 pt-4">
          <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
          <p className="text-sm text-footer_back font-open_sans">{review.role}</p>
          <p className="mt-2 text-sm text-gray-600">“{review.review}”</p>
        </div>
      </div>
    );
  };
export default ReviewCard;