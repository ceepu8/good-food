import Heading from "../../base/Heading";
import FoodItem from "../FoodItem";
import FOOD_LIST from "../../../services/food-list.json";

const FoodMenuHeader = () => {
  return (
    <div className="text-center font-montserrat">
      <Heading
        bold={false}
        truncation={2}
        className="text-[24px] md:text-[32px]"
      >
        Just Choose From <b className="block xs:inline">THE BEST</b>
      </Heading>
      <p className="text-gray-400 text-[17px]">Menu</p>
    </div>
  );
};

const FoodMenuListing = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-lg">
      {FOOD_LIST.map((item) => {
        return <FoodItem key={item.id} item={item} />;
      })}
    </div>
  );
};

const FoodMenu = () => {
  return (
    <section>
      <div className="container mx-auto space-y-4">
        <FoodMenuHeader />
        <FoodMenuListing />
      </div>
    </section>
  );
};

export default FoodMenu;
