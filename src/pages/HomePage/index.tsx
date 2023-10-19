import BusinessInfo from "../../components/ui/BusinessInfo";
import Carousel from "../../components/ui/Carousel";
import FoodMenu from "./FoodMenu";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <BusinessInfo />
      <FoodMenu />
    </>
  );
}
