import { IMAGES } from "../../../constants";
import { useCart } from "../../../providers/CartProvider";
import { formatAsDollar } from "../../../utils";
import Image from "../../base/Image";
import Modal from "../../base/Modal";
import CartItem from "../CartItem";

const CartModalFooter = () => {
  const { state } = useCart();
  const {  totalPrice } = state;

  return (
    <div className="flex justify-between text-xl sm:text-2xl font-semibold pt-8">
      <span>Total Amount</span>
      <span>{formatAsDollar(totalPrice)}</span>
    </div>
  );
};

const CartEmpty = () => {
  return (
    <div className="flex flex-col space-y-8 pb-4">
      <Image src={IMAGES.EMPTY} alt="empty" className="max-w-[120px] mx-auto" />
      <p className="text-center text-xl uppercase font-semibold">
        No items in cart
      </p>
    </div>
  );
};

const CartModalContent = () => {
  const { state } = useCart();
  const { cartItems } = state;

  return (
    <div className="divide-y divide-gray-400 space-y-2 pb-4">
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
  const { cartItems } = state;

  const onOrder = () => {
    console.log(state);
    dispatch({ type: "CLEAR_CART"});
    
  }

  return (
    <Modal
      show={show}
      handleClose={handleClose}
      onOk={onOrder}
      disabled={!cartItems?.length}
    >
      <CartModalContent />
    </Modal>
  );
};

export default CartModal;
