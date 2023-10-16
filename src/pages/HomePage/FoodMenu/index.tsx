import Heading from "../../../components/base/Heading";
import FilterFoodBar from "../../../components/food/FilterFoodBar";
import FoodItem from "../../../components/food/FoodItem";

const FoodMenuHeader = () => {
  return (
    <div className="text-center font-montserrat">
      <Heading bold={false} className="text-[32px]">
        Just Choose From <b>THE BEST</b>
      </Heading>
      <p className="text-gray-400 text-[17px]">Menu</p>
    </div>
  );
};

const FoodMenuListing = () => {
  const FOOD_ITEMS = [
    {
      label: "Maxican Pizza",
      price: 29,
      image: "./images/meal-1.jpeg",
      rating: 4.5,
    },
    {
      label: "Maxican Pizza Test Better",
      price: 29,
      image: "./images/meal-2.jpeg",
      rating: 4.5,
    },
    {
      label: "Maxican Pizza",
      price: 29,
      image: "./images/meal-3.jpeg",
      rating: 4.5,
    },
    {
      label: "Maxican Pizza",
      price: 29,
      image: "./images/meal-4.jpeg",
      rating: 4.5,
    },
    {
      label: "Maxican Pizza",
      price: 29,
      image: "./images/meal-5.jpeg",
      rating: 4.5,
    },
    {
      label: "Maxican Pizza",
      price: 29,
      image: "./images/meal-6.jpeg",
      rating: 4.5,
    },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-lg">
      {FOOD_ITEMS.map((item) => {
        return <FoodItem key={item.label} item={item} />;
      })}
    </div>
  );
};

const FoodMenu = () => {
  return (
    <section>
      <div className="container mx-auto">
        <FoodMenuHeader />
        <FilterFoodBar />
        <FoodMenuListing />
      </div>
    </section>
  );
};

export default FoodMenu;
