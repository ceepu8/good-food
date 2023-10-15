import BusinessInfo from "../../components/ui/BusinessInfo";
import Carousel from "../../components/ui/Carousel";
import MainLayout from "../../layout/MainLayout";
import FoodMenu from "./FoodMenu";

export default function HomePage() {
  return (
    <MainLayout>
      <Carousel />
      <BusinessInfo />
      <FoodMenu />
    </MainLayout>
  );
}
