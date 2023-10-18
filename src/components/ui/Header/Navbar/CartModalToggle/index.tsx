import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "../../../../base/Button";
import Modal from "../../../../base/Modal";
import { useState } from "react";

const CartNumber = () => {
  return (
    <div className="relative">
      <AiOutlineShoppingCart size={24} />
      <span className="absolute -top-1 -right-1.5 text-[10px] leading-4 w-4 h-4 rounded-2xl bg-white group-hover:text-white group-hover:bg-yellow-500 text-yellow-500">
        1
      </span>
    </div>
  );
};

const CartModalToggle = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={() => setOpen(true)}
        variant="primary"
        className="uppercase group hidden md:flex"
      >
        <CartNumber />
        Shopping cart
      </Button>
      <Button
        onClick={() => setOpen(true)}
        variant="primary"
        size="icon"
        className="md:hidden rounded-md"
      >
        <CartNumber />
      </Button>

      <Modal show={open} handleClose={() => setOpen(false)}>
        123
      </Modal>
    </div>
  );
};

export default CartModalToggle;
