import { FaReceipt } from "react-icons/fa";
import Image from "../../base/Image";
import { Button } from "../../base/Button";

type Props = {};

const CarouselContent = () => {
  return (
    <div className="flex flex-col md:flex-1 items-center justify-center md:items-start">
      <h2 className="font-architects-daughter uppercase text-[19px] md:text-[32px] text-white">
        SUPER DELICIOUS
      </h2>
      <b className="text-yellow-500 text-[35px] lg:text-[60px] font-montserrat font-extrabold lg:leading-[72px]">
        Special Weeked
      </b>
      <b className="text-gray-800 md:text-white text-[35px] lg:text-[60px] font-montserrat font-extrabold lg:leading-[72px]">
        Dinner For You
      </b>
      <p className="text-gray-500 md:w-[516px] lg:text-[18px] my-4 font-montserrat text-center md:text-left">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard.
      </p>
      <Button
        variant="ghost"
        className="uppercase"
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
    <div className="w-[380px] md:w-auto md:min-w-[300px]">
      <Image
        style={{ animationDuration: "30000ms" }}
        src="./images/model-3.png"
        alt="model"
        className="animate-spin"
      />
    </div>
  );
};

const Carousel = (props: Props) => {
  return (
    <section
      style={{ backgroundImage: "url('./images/banner-background.png')" }}
      className="md:h-[550px] lg:h-[720px] pt-32 md:pt-0 bg-cover bg-no-repeat"
    >
      <div className="flex-col md:flex-row flex justify-center md:justify-start items-center h-full lg:px-16">
        <CarouselModel />
        <CarouselContent />
      </div>
    </section>
  );
};

export default Carousel;
