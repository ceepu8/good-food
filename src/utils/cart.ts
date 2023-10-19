type CartItem = {
  id: number;
  label: string;
  price: number;
  rating: number;
  quantity: number;
};

export const addToCart = (cartItems: CartItem[], newItem: CartItem) => {
  let newCart = [];
  const foundItem = cartItems.find((item) => item.id === newItem.id);

  if (foundItem) {
    newCart = cartItems.map((item) => {
      if (item.id === newItem.id) {
        return { ...item, quantity: (item.quantity += 1) };
      }

      return item;
    });
  } else {
    newCart = [...cartItems, { ...newItem, quantity: 1 }];
  }

  return newCart;
};

export const decreaseCartItem = (cartItems: CartItem[], newItem: CartItem) => {
  let newCart = [];
  const foundItem = cartItems.find((item) => item.id === newItem.id);

  if (foundItem) {
    if (foundItem.quantity === 1) {
      newCart = cartItems.filter((item: any) => item.id !== newItem.id);
    } else {
      newCart = cartItems.map((item) => {
        if (item.id === newItem.id) {
          return { ...item, quantity: (item.quantity -= 1) };
        }

        return item;
      });
    }
  } else {
    newCart = [...cartItems, { ...newItem, quantity: 1 }];
  }

  return newCart;
};
