import { useCart } from "../../../providers/CartProvider";
import { FoodItemInterface } from "../../../types";
import { formatAsDollar } from "../../../utils";
import { Button } from "../../base/Button";
import Image from "../../base/Image";
import Link from "../../base/Link";
import RatingStar from "../../ui/RatingStar";

type FoodItemProps = {
  item: FoodItemInterface;
};

const FoodItem = ({ item }: FoodItemProps) => {
  const { label, image, rating, price } = item || {};
  const { dispatch } = useCart();

  const addToCart = (item: any) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <Link to="/" disabled>
      <div
        style={{ boxShadow: "0 1px 22px 0 rgb(0 0 0 / 9%)" }}
        className="bg-white pb-4 flex flex-col gap-y-4 xs:rounded-lg cursor-pointer group"
      >
        <figure className="aspect-[1.5/1] overflow-hidden">
          <Image
            src={image}
            alt="gallery"
            className="xs:rounded-t-lg group-hover:scale-110 transition-[transform] object-cover w-full h-full"
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
            <div className="flex items-center space-x-2">
              <RatingStar number={rating} />
              <span className="text-sm">({rating})</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="text-sm font-light rounded-md"
              onClick={() => addToCart(item)}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FoodItem;
