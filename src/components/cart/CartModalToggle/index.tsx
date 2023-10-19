import { AiOutlineShoppingCart } from "react-icons/ai";

import { useEffect, useMemo, useState } from "react";
import { useCart } from "../../../providers/CartProvider";
import { cn } from "../../../utils";
import { Button } from "../../base/Button";
import CartModal from "../CartModal";

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
        className={cn("uppercase group flex", {
          "animation-heartbeat": toggled,
        })}
      >
        <CartNumber totalQuantity={totalQuantity} />
        <span className="hidden sm:block">Shopping Cart</span>
      </Button>

      <CartModal show={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default CartModalToggle;
