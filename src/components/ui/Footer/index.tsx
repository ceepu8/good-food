import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import Heading from "../../base/Heading";
import Image from "../../base/Image";
import LineBreak from "../../base/LineBreak";
import Link from "../../base/Link";
import { FaInstagramSquare } from "react-icons/fa";
import { getCurrentYear } from "../../../utils/dates";
import { IconType } from "react-icons";
import { IMAGES } from "../../../constants";

const NavigationCol = ({ data, title }: { data: string[]; title: string }) => {
  const renderItem = (item: string) => {
    return (
      <li key={item} className="group">
        <Link to="/">
          <span className="group-hover:text-yellow-500 transition-colors">
            {item}
          </span>
        </Link>
      </li>
    );
  };

  return (
    <div className="md:ml-auto">
      <Heading
        size="medium"
        className="font-montserrat font-semibold"
        bold={false}
      >
        {title}
      </Heading>
      <ul className="text-sm list-disc pl-[18px] mt-4 space-y-2">
        {data.map(renderItem)}
      </ul>
    </div>
  );
};

const CopyRight = () => {
  const currentYear = getCurrentYear();

  return (
    <div className="text-center text-gray-600 text-sm pb-6">
      All rights reserved {currentYear} &copy; uyencao.
    </div>
  );
};

const SocialMediaList = () => {
  const SOCIAL_MEDIAS = [
    {
      label: "facebook",
      icon: AiFillFacebook,
    },
    {
      label: "twitter",
      icon: AiFillTwitterSquare,
    },
    {
      label: "instagram",
      icon: FaInstagramSquare,
    },
  ];

  const renderItem = (item: { label: string; icon: IconType }) => {
    const { label, icon: Icon } = item;
    return (
      <li key={label} className="hover:text-yellow-500 transition-colors">
        <Link to="/">
          <Icon size={24} />
        </Link>
      </li>
    );
  };

  return (
    <div className="md:ml-auto">
      <Heading
        size="medium"
        className="font-montserrat font-semibold"
        bold={false}
      >
        Follow On
      </Heading>

      <ul className="flex space-x-2">{SOCIAL_MEDIAS.map(renderItem)}</ul>
    </div>
  );
};

const FooterIntro = () => {
  return (
    <div>
      <Image src={IMAGES.LOGO_FOOTER} alt="logo-footer" />
      <p className="text-[13px] mt-4">
        It To Make A Type Specimen Book. It Has Survived Not Only Five
        Centuries. Not Only Five Centuries.
      </p>
    </div>
  );
};

const Footer = () => {
  const QUICK_LINKS = [
    "Add Restaurant",
    "Restaurant Widgets",
    "Business App",
    "Products For Businesses",
  ];
  const SUPPORT_LIST = ["Privacy", "Terms", "Policy"];

  return (
    <footer className="bg-black text-white pt-[50px] sm:px-0 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <FooterIntro />
          <NavigationCol data={QUICK_LINKS} title="Quick Links" />
          <NavigationCol data={SUPPORT_LIST} title="Support" />
          <SocialMediaList />
        </div>
      </div>

      <LineBreak className="bg-white my-6 h-[1px] opacity-25" />
      <CopyRight />
    </footer>
  );
};

export default Footer;
