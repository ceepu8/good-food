import { CartItemInterface, FoodItemInterface } from "../types";

const findCartItem = (cartItems: CartItemInterface[], id: string) =>
  cartItems.find((item) => item.id === id);

const updateCartItemQuantity = (
  cartItems: CartItemInterface[],
  id: string,
  quantity: number
) => cartItems.map((item) => (item.id === id ? { ...item, quantity } : item));

export const addToCart = (
  cartItems: CartItemInterface[],
  newItem: FoodItemInterface,
  quantity: number
) => {
  const foundItem = findCartItem(cartItems, newItem.id);

  if (foundItem) {
    const updatedCart = updateCartItemQuantity(
      cartItems,
      newItem.id,
      foundItem.quantity + quantity
    );
    return updatedCart;
  } else {
    const newCart = [...cartItems, { ...newItem, quantity }];
    return newCart;
  }
};

export const decreaseCartItem = (
  cartItems: CartItemInterface[],
  item: FoodItemInterface,
  quantity: number
) => {
  const foundItem = findCartItem(cartItems, item.id);

  if (foundItem) {
    if (foundItem.quantity === 1) {
      const updatedCart = cartItems.filter((each) => each.id !== item.id);
      return updatedCart;
    } else {
      const updatedCart = updateCartItemQuantity(
        cartItems,
        item.id,
        foundItem.quantity - quantity
      );
      return updatedCart;
    }
  } else {
    const newCart = [...cartItems, { ...item, quantity: quantity }];
    return newCart;
  }
};

export const calcTotalPrice = (cartItems: CartItemInterface[]) => {
  return cartItems.reduce(
    (initial, item) => (initial += item.price * item.quantity),
    0
  );
};

export const calcTotalQuantity = (cartItems: CartItemInterface[]) => {
  return cartItems.reduce((initial, item) => (initial += item.quantity), 0);
};
