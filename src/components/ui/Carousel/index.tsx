import { FaReceipt } from "react-icons/fa";
import Image from "../../base/Image";
import { Button } from "../../base/Button";

type Props = {};

const CarouselContent = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-architects-daughter uppercase text-[32px] text-white">
        SUPER DELICIOUS
      </h2>
      <b className="text-yellow-500 text-[60px] font-montserrat font-extrabold leading-[72px]">
        Special Weeked
      </b>
      <b className="text-white text-[60px] font-montserrat font-extrabold leading-[72px]">
        Dinner For You
      </b>
      <p className="text-gray-500 w-[516px] font-[18px] my-4 font-montserrat">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard.
      </p>
      <Button variant="ghost" className="uppercase">
        <FaReceipt />
        Order Now
      </Button>
    </div>
  );
};

const CarouselModel = () => {
  return (
    <div>
      <Image
        style={{ animationDuration: "30000ms" }}
        src="./images/model-3.png"
        alt="model"
        className="animate-spin "
      />
    </div>
  );
};

const Carousel = (props: Props) => {
  return (
    <section
      style={{ backgroundImage: "url('./images/banner-background.png')" }}
      className="h-[720px] overflow-hidden bg-cover bg-no-repeat"
    >
      <div className="flex justify-start items-center h-full px-16 gap-x-48">
        <CarouselModel />
        <CarouselContent />
      </div>
    </section>
  );
};

export default Carousel;
