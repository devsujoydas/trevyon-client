import React from "react";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const RatingStars = ({ rating = 0, reviewsCount = 0 }) => {
  const fullStars = Math.floor(rating); // pura star
  const hasHalfStar = rating - fullStars >= 0.5; // half star thakbe naki
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // baki empty

  return (
    <div className="flex items-center gap-0.5 text-xs md:text-lg">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <IoStar key={`full-${i}`} className="" />
      ))}

      {/* Half star */}
      {hasHalfStar && <IoStarHalf className="" />}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <IoStarOutline key={`empty-${i}`} className="" />
      ))}

      {/* Reviews count */}
      <span className="ml-2">{reviewsCount} Reviews</span>
    </div>
  );
};

export default RatingStars;
