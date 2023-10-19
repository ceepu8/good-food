import { memo } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

type RatingStarProps = {
  number: number;
};

const RatingStar = memo(({ number: _number }: RatingStarProps) => {
  const number = Math.min(5, Math.max(0, _number));

  const integerPart = Math.floor(number);

  const stars = [];

  for (let i = 0; i < integerPart; i++) {
    stars.push(<BsStarFill className="text-yellow-500" />);
  }

  const decimalPart = number - integerPart;

  if (decimalPart > 0) {
    if (decimalPart > 0.25) {
      stars.push(<BsStarHalf className="text-yellow-500" />);
    } else {
      stars.push(<BsStarFill className="text-yellow-500" />);
    }
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(
      <BsStarFill className="fill-white stroke-1 stroke-yellow-500" />
    );
  }
  return <div className="flex space-x-1">{stars}</div>;
});

export default RatingStar;
