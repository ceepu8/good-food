import { useMemo } from "react";
import { useCart } from "../../../providers/CartProvider";
import { formatAsDollar } from "../../../utils";
import Modal from "../../base/Modal";
import CartEmpty from "../CartEmpty";
import CartItem from "../CartItem";

const CartModalFooter = () => {
  const { state } = useCart();
  const { totalPrice } = state;

  return (
    <div className="flex justify-between text-xl sm:text-2xl font-semibold pt-8">
      <span>Total Amount</span>
      <span>{formatAsDollar(totalPrice)}</span>
    </div>
  );
};

const CartModalContent = () => {
  const { state } = useCart();
  const { cartItems } = state;

  return (
    <div className="divide-y divide-gray-400 space-y-2 py-4">
      {!cartItems?.length && <CartEmpty />}
      {(cartItems || []).map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
      <CartModalFooter />
    </div>
  );
};

type CartModalProps = {
  show: Boolean;
  handleClose: () => void;
};

const CartModal = ({ show, handleClose }: CartModalProps) => {
  const { state, dispatch } = useCart();
  const { cartItems, totalQuantity } = state;

  const onOrder = () => {
    console.log(state);
    dispatch({ type: "CLEAR_CART" });
  };

  const modalTitle = useMemo(
    () => `Shopping Cart (${totalQuantity})`,
    [totalQuantity]
  );

  return (
    <Modal
      show={show}
      handleClose={handleClose}
      onOk={onOrder}
      disabled={!cartItems?.length}
      title={modalTitle}
    >
      <CartModalContent />
    </Modal>
  );
};

export default CartModal;
