import { formatAsDollar } from "../../../utils";
import { Button } from "../../base/Button";
import Image from "../../base/Image";
import Link from "../../base/Link";
import { AiFillStar } from "react-icons/ai";

type FoodItemProps = {
  item: {
    label: string;
    price: number;
    image: string;
    rating: number;
  };
};

const FoodItem = ({ item }: FoodItemProps) => {
  const { label, image, rating, price } = item || {};
  return (
    <Link to="/" disabled>
      <div
        style={{ boxShadow: "0 1px 22px 0 rgb(0 0 0 / 9%)" }}
        className="bg-white pb-4 flex flex-col gap-y-4 rounded-lg cursor-pointer group"
      >
        <figure className="aspect-[1.5/1] overflow-hidden">
          <Image
            src={image}
            alt="gallery"
            className="rounded-t-lg group-hover:scale-110 transition-[transform] object-cover w-full h-full"
          />
        </figure>

        <div className="font-montserrat">
          <div className="flex justify-between px-2">
            <h5 className="font-semibold text-[15px]"> {label}</h5>
            <h4 className="text-yellow-400 text-[22px] font-bold">
              {formatAsDollar(price)}
            </h4>
          </div>
          <div className="flex items-center mt-2 cm-order justify-between px-2">
            <div className="flex text-yellow-500 text-lg gap-x-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>

            <Button
              variant="outline"
              size="sm"
              className="text-sm font-light rounded-md"
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FoodItem;
