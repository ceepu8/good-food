export interface FoodItemInterface {
  id: string;
  label: string;
  price: number;
  image: string;
  rating: number;
}

export interface CartItemInterface extends FoodItemInterface {
  quantity: number;
}
