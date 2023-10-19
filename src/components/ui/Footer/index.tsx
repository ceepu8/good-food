import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { IMAGES } from "../../../constants";
import Heading from "../../base/Heading";
import Image from "../../base/Image";
import LineBreak from "../../base/LineBreak";
import Link from "../../base/Link";
import { FaInstagramSquare } from "react-icons/fa";

const Support = () => {
  const SUPPORT_LIST = ["Privacy", "Terms", "Policy"];

  return (
    <div className="md:ml-auto">
      <Heading
        size="medium"
        className="font-montserrat font-semibold"
        bold={false}
      >
        Quick Links
      </Heading>
      <ul className="text-sm list-disc pl-[18px] mt-4 space-y-2">
        {SUPPORT_LIST.map((item) => {
          return (
            <li key={item} className="group">
              <Link to="/">
                <span className="group-hover:text-yellow-500 transition-colors">
                  {item}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const QuickLinks = () => {
  const QUICK_LINKS = [
    "Add Restaurant",
    "Restaurant Widgets",
    "Business App",
    "Products For Businesses",
  ];

  return (
    <div className="md:ml-auto">
      <Heading
        size="medium"
        className="font-montserrat font-semibold"
        bold={false}
      >
        Quick Links
      </Heading>
      <ul className="text-sm list-disc pl-[18px] mt-4 space-y-2">
        {QUICK_LINKS.map((item) => {
          return (
            <li key={item} className="group">
              <Link to="/">
                <span className="group-hover:text-yellow-500 transition-colors">
                  {item}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const CopyRight = () => {
  //  const getCurrentYear = () => dayjs().year()
  // const currentYear = getCurrentYear()

  return (
    <div className="text-center text-gray-600 text-sm pb-6">
      All rights reserved 2021-2022 &copy; restaurant.
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-[50px]">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <Image src={IMAGES.LOGO_FOOTER} alt="logo-footer" />
            <p className="text-[13px] mt-4">
              It To Make A Type Specimen Book. It Has Survived Not Only Five
              Centuries. Not Only Five Centuries.
            </p>
          </div>
          <QuickLinks />
          <Support />
          <div className="md:ml-auto">
            <Heading
              size="medium"
              className="font-montserrat font-semibold"
              bold={false}
            >
              Follow On
            </Heading>

            <div className="flex space-x-2">
              <AiFillFacebook size={24} />
              <AiFillTwitterSquare size={24} />
              <FaInstagramSquare size={24} />
            </div>
          </div>
        </div>
      </div>

      <LineBreak className="bg-white my-6 h-[1px] opacity-25" />

      <CopyRight />
    </footer>
  );
};

export default Footer;
