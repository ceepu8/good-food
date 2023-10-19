import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";
import {
  addToCart,
  calcTotalPrice,
  calcTotalQuantity,
  decreaseCartItem,
} from "../../utils/cart";
import { CartItemInterface } from "../../types";

type CartState = {
  cartItems: CartItemInterface[];
  totalQuantity: number;
  totalPrice: number;
};

type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItemInterface }
  | { type: "REMOVE_FROM_CART"; payload: CartItemInterface }
  | { type: "DECREASE_ITEM_QUANTITY"; payload: CartItemInterface }
  | { type: "CLEAR_CART" };

const CartContext = createContext<
  { state: CartState; dispatch: Dispatch<CartAction> } | undefined
>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const addedCart = addToCart(state.cartItems, action.payload);
      return {
        ...state,
        cartItems: addedCart,
        totalPrice: calcTotalPrice(addedCart),
        totalQuantity: calcTotalQuantity(addedCart),
      };

    case "DECREASE_ITEM_QUANTITY":
      const { cartItems } = state;
      const decreasedCart = decreaseCartItem(cartItems, action.payload);

      return {
        ...state,
        cartItems: decreasedCart,
        totalPrice: calcTotalPrice(decreasedCart),
        totalQuantity: calcTotalQuantity(decreasedCart),
      };

    case "REMOVE_FROM_CART":
      const filteredCart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: filteredCart,
        totalPrice: calcTotalPrice(filteredCart),
        totalQuantity: calcTotalQuantity(filteredCart),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
        totalPrice: 0,
        totalQuantity: 0,
      };

    default:
      return state;
  }
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    totalPrice: 0,
    totalQuantity: 0,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
