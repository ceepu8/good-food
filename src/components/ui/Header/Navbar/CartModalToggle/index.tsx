import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "../../../../base/Button";
import Modal from "../../../../base/Modal";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "../../../../../providers/CartProvider";
import { cn, formatAsDollar } from "../../../../../utils";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import Image from "../../../../base/Image";
import { IMAGES } from "../../../../../constants";

const CartNumber = ({ totalQuantity }: { totalQuantity: number }) => {
  return (
    <div className="relative">
      <AiOutlineShoppingCart size={24} />
      <span className="absolute -top-1 -right-1.5 text-[10px] leading-4 w-4 h-4 rounded-2xl bg-white group-hover:text-white group-hover:bg-yellow-500 text-yellow-500">
        {totalQuantity}
      </span>
    </div>
  );
};

const CartModalContent = () => {
  const { state, dispatch } = useCart();
  const { cartItems } = state;

  const addToCart = (item: any) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const decreaseCartItem = (item: any) => {
    dispatch({ type: "DECREASE_ITEM_QUANTITY", payload: item });
  };

  return (
    <div className="divide-y divide-gray-400">
      {!cartItems?.length && (
        <div className="flex flex-col space-y-8">
          <Image
            src={IMAGES.EMPTY}
            alt="empty"
            className="max-w-[120px] mx-auto"
          />
          <p className="text-center text-xl uppercase font-semibold">
            No items in cart
          </p>
        </div>
      )}
      {(cartItems || []).map((item) => {
        return (
          <div
            key={item.id}
            className="flex-col sm:flex-row flex justify-between sm:items-center py-4"
          >
            <div className="">
              <p className="text-lg font-semibold">{item.label}</p>
              <span className="text-lg font-semibold">
                {formatAsDollar(item.price)}
              </span>
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
                x{item.quantity}
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
      })}
    </div>
  );
};

const CartModalToggle = () => {
  const [open, setOpen] = useState(false);
  const [toggled, setToggled] = useState(false);
  const { state } = useCart();

  const { cartItems } = state;

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((initial, item) => (initial += item.quantity), 0);
  }, [cartItems]);

  useEffect(() => {
    setToggled(true);

    let timeout = setTimeout(() => {
      setToggled(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [state]);

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={() => setOpen(true)}
        variant="primary"
        className={cn("uppercase group hidden md:flex", {
          "animation-heartbeat": toggled,
        })}
      >
        <CartNumber totalQuantity={totalQuantity} />
        Shopping cart
      </Button>
      <Button
        onClick={() => setOpen(true)}
        variant="primary"
        size="icon"
        className="md:hidden rounded-md"
      >
        <CartNumber totalQuantity={totalQuantity} />
      </Button>

      <Modal show={open} handleClose={() => setOpen(false)} onOk={() => {}}>
        <CartModalContent />
      </Modal>
    </div>
  );
};

export default CartModalToggle;
