import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { useCart } from "../../../providers/CartProvider";
import { CartItemInterface, FoodItemInterface } from "../../../types";
import { formatAsDollar } from "../../../utils";
import { Button } from "../../base/Button";

const CartItem = ({ item }: { item: CartItemInterface }) => {
  const { price, id, label, quantity } = item || {};
  const { dispatch } = useCart();

  const addToCart = (item: FoodItemInterface) => {
    dispatch({ type: "ADD_TO_CART", payload: {item} });
  };

  const decreaseCartItem = (item: FoodItemInterface) => {
    dispatch({ type: "DECREASE_ITEM_QUANTITY", payload: {item} });
  };

  return (
    <div
      key={id}
      className="flex-col sm:flex-row flex justify-between sm:items-center py-4"
    >
      <div className="">
        <p className="text-lg font-semibold">{label}</p>
        <span className="text-lg font-semibold">{formatAsDollar(price)}</span>
      </div>

      <div className="flex flex-wrap justify-end sm:justify-between items-center space-x-2 sm:space-x-4">
        <Button
          size="icon"
          className="rounded-md shrink-0"
          onClick={() => decreaseCartItem(item)}
        >
          <BiMinus size={20} />
        </Button>
        <span className="text-yellow-500 font-bold w-[48px] text-center block shrink-0">
          x{quantity}
        </span>
        <Button
          size="icon"
          className="rounded-md shrink-0"
          onClick={() => addToCart(item)}
        >
          <BsPlus size={20} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
