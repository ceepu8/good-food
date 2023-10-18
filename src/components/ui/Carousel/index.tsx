import { FaReceipt } from "react-icons/fa";
import Image from "../../base/Image";
import { Button } from "../../base/Button";

type Props = {};

const CarouselContent = () => {
  return (
    <div className="flex flex-col md:flex-1 items-center justify-center md:items-start mt-[35px] md:mt-0">
      <h2 className="font-architects-daughter uppercase text-[19px] md:text-[32px] md:text-white">
        SUPER DELICIOUS
      </h2>
      <h2 className="leading-[1.2] font-montserrat font-extrabold text-[25px] md:text-[46px] xl:text-[60px] text-center md:text-left mb-2">
        <span className="text-yellow-500">Special Weeked</span>
        <span className="text-gray-800 block md:text-white">
          Dinner For You
        </span>
      </h2>
      <p className="text-gray-500 max-w-[516px] text-sm md:text-base lg:text-[18px] mb-4 font-montserrat text-center md:text-left">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard.
      </p>
      <Button
        variant="ghost"
        className="md:uppercase"
        style={{ boxShadow: "0px 21px 10px -10px rgb(0 0 0 / 31%)" }}
      >
        <FaReceipt />
        Order Now
      </Button>
    </div>
  );
};

const CarouselModel = () => {
  return (
    <div className="w-[80%] sm:w-[59%] md:w-[37%] max-w-fit overflow-hidden">
      <Image
        style={{ animationDuration: "30000ms" }}
        src="./images/model-3.png"
        alt="model"
        className="animate-spin w-full h-full block object-contain"
      />
    </div>
  );
};

const Carousel = (props: Props) => {
  return (
    <section
      style={{ backgroundImage: "url('./images/banner-background.png')" }}
      className="pt-[75px] h-[584px] sm:h-[854px] md:h-[550px] lg:h-[720px] md:pt-0 md:bg-center sm:bg-cover bg-no-repeat"
    >
      <div className="flex-col md:flex-row flex justify-center md:justify-start lg:gap-x-32 items-center h-full lg:px-16">
        <CarouselModel />
        <CarouselContent />
      </div>
    </section>
  );
};

export default Carousel;
