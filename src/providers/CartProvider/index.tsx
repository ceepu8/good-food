import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";
import { addToCart, decreaseCartItem } from "../../utils/cart";

type CartItem = {
  id: number;
  label: string;
  price: number;
  rating: number;
  quantity: number;
};

type CartState = {
  cartItems: CartItem[];
};

type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: CartItem }
  | { type: "DECREASE_ITEM_QUANTITY"; payload: CartItem }
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
      };
    case "DECREASE_ITEM_QUANTITY":
      const { cartItems } = state;
      const decreasedCart = decreaseCartItem(cartItems, action.payload);

      return {
        ...state,
        cartItems: decreasedCart,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
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
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
