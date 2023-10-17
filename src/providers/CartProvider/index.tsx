import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

// Định nghĩa loại dữ liệu cho sản phẩm trong giỏ hàng
type CartItem = {
  id: number;
  name: string;
  price: number;
};

// Định nghĩa trạng thái cho giỏ hàng
type CartState = {
  cartItems: CartItem[];
};

// Các hành động cho giỏ hàng
type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: CartItem }
  | { type: "CLEAR_CART" };

// Khởi tạo CartContext
const CartContext = createContext<
  { state: CartState; dispatch: Dispatch<CartAction> } | undefined
>(undefined);

// Reducer để quản lý trạng thái giỏ hàng
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
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

// Custom hook để sử dụng CartContext
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
  console.log(cartReducer);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
