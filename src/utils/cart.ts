import { CartItemInterface } from "../types";

const findCartItem = (cartItems: CartItemInterface[], id: string) =>
  cartItems.find((item) => item.id === id);

const updateCartItemQuantity = (
  cartItems: CartItemInterface[],
  id: string,
  quantity: number
) => cartItems.map((item) => (item.id === id ? { ...item, quantity } : item));

export const addToCart = (
  cartItems: CartItemInterface[],
  newItem: CartItemInterface
) => {
  const foundItem = findCartItem(cartItems, newItem.id);

  if (foundItem) {
    const updatedCart = updateCartItemQuantity(
      cartItems,
      newItem.id,
      foundItem.quantity + 1
    );
    return updatedCart;
  } else {
    const newCart = [...cartItems, { ...newItem, quantity: 1 }];
    return newCart;
  }
};

export const decreaseCartItem = (
  cartItems: CartItemInterface[],
  cartItem: CartItemInterface
) => {
  const foundItem = findCartItem(cartItems, cartItem.id);

  if (foundItem) {
    if (foundItem.quantity === 1) {
      const updatedCart = cartItems.filter((item) => item.id !== cartItem.id);
      return updatedCart;
    } else {
      const updatedCart = updateCartItemQuantity(
        cartItems,
        cartItem.id,
        foundItem.quantity - 1
      );
      return updatedCart;
    }
  } else {
    const newCart = [...cartItems, { ...cartItem, quantity: 1 }];
    return newCart;
  }
};
