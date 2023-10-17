import BusinessInfo from "../../components/ui/BusinessInfo";
import Carousel from "../../components/ui/Carousel";
import CartProvider from "../../providers/CartProvider";
import FoodMenu from "./FoodMenu";

export default function HomePage() {
  return (
    <CartProvider>
      <Carousel />
      <BusinessInfo />
      <FoodMenu />
    </CartProvider>
  );
}


