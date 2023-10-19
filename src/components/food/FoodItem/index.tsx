import { useState } from "react";
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

const AddFoodItemForm = ({ item }: { item: FoodItemInterface }) => {
  const { dispatch } = useCart();
  const [value, setValue] = useState(1);

  const addToCart = (item: FoodItemInterface, quantity: number) => {
    dispatch({ type: "ADD_TO_CART", payload: { item, quantity } });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let val = event.target.value;
    if (!val) setValue(1);
    const newValue = parseInt(val, 10);
    if (!isNaN(newValue)) {
      setValue(() => newValue);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addToCart(item, value);
  };

  return (
    <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
      <div className="flex space-x-2 items-center w-full">
        <label htmlFor="amount" className="text-xs font-semibold">
          Amount
        </label>
        <input
          id="amount"
          value={value}
          onChange={handleChange}
          type="number"
          min={1}
          max={5}
          className="w-10 border-[1px] border-gray-500 rounded-md focus-visible:outline-yellow-500 pl-1"
        />
      </div>

      <Button
        type="submit"
        variant="secondary"
        size="sm"
        className="text-sm font-light rounded-md"
      >
        Add
      </Button>
    </form>
  );
};

const FoodItemImage = ({ image }: { image: string }) => {
  return (
    <figure className="aspect-[1.5/1] overflow-hidden">
      <Image
        src={image}
        alt="gallery"
        className="xs:rounded-t-lg group-hover:scale-110 transition-[transform] object-cover w-full h-full"
      />
    </figure>
  );
};

const FoodItemCardContent = ({ item }: FoodItemProps) => {
  const { label, price, rating } = item || {};
  return (
    <div className="font-montserrat">
      <div className="flex justify-between px-2">
        <h5 className="font-semibold text-[15px]">{label}</h5>
        <h4 className="text-yellow-400 text-[22px] font-bold">
          {formatAsDollar(price)}
        </h4>
      </div>
      <div className="flex items-center mt-2 cm-order justify-between px-2">
        <div className="flex items-center space-x-2">
          <RatingStar number={rating} />
          <span className="text-sm">({rating})</span>
        </div>
        <AddFoodItemForm item={item} />
      </div>
    </div>
  );
};

const FoodItem = ({ item }: FoodItemProps) => {
  const { image } = item || {};

  return (
    <Link to="/" disabled>
      <div
        style={{ boxShadow: "0 1px 22px 0 rgb(0 0 0 / 9%)" }}
        className="bg-white pb-4 flex flex-col gap-y-4 xs:rounded-lg cursor-pointer group"
      >
        <FoodItemImage image={image} />
        <FoodItemCardContent item={item} />
      </div>
    </Link>
  );
};

export default FoodItem;
