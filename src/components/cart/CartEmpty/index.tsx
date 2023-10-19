import { IMAGES } from "../../../constants";
import Image from "../../base/Image";

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

export default CartEmpty;
