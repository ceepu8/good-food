import { AiOutlineShoppingCart } from "react-icons/ai";

import { useEffect, useState } from "react";
import { useCart } from "../../../providers/CartProvider";
import { cn } from "../../../utils";
import { Button } from "../../base/Button";
import CartModal from "../CartModal";

const CartNumber = () => {
  const { state } = useCart();
  const { totalQuantity } = state;

  return (
    <div className="relative">
      <AiOutlineShoppingCart size={24} />
      <span className="absolute -top-1 -right-1.5 text-[10px] leading-4 w-4 h-4 rounded-2xl bg-white group-hover:text-white group-hover:bg-yellow-500 text-yellow-500">
        {totalQuantity}
      </span>
    </div>
  );
};

type CartToggleProps = {
  onClick: () => void;
  toggled: boolean;
};

const CartToggle = ({ onClick, toggled }: CartToggleProps) => {
  return (
    <Button
      onClick={onClick}
      variant="primary"
      className={cn("uppercase group flex", {
        "animation-heartbeat": toggled,
      })}
    >
      <CartNumber />
      <span className="hidden sm:block">Shopping Cart</span>
    </Button>
  );
};

const CartModalToggle = () => {
  const [open, setOpen] = useState(false);
  const [toggled, setToggled] = useState(false);
  const { state } = useCart();

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    setToggled(true);
    let timeout = setTimeout(() => {
      setToggled(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [state]);

  return (
    <div className="flex items-center gap-x-2">
      <CartToggle onClick={openModal} toggled={toggled} />
      <CartModal show={open} handleClose={closeModal} />
    </div>
  );
};

export default CartModalToggle;
