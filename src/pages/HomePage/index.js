import BusinessInfo from "../../components/ui/BusinessInfo";
import Carousel from "../../components/ui/Carousel";
import MainLayout from "../../layout/MainLayout";
import FoodList from "./FoodList";

export default function HomePage() {
  return (
    <MainLayout>
      <Carousel />
      <BusinessInfo />
      <FoodList />
    </MainLayout>
  );
}
