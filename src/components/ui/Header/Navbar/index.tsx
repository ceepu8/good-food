import { memo } from "react";
import { IconType } from "react-icons";
import { AiFillPhone, AiOutlineMenu } from "react-icons/ai";
import { FaHamburger, FaPizzaSlice, FaUserAlt } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { Routes } from "../../../../constants";
import { Button } from "../../../base/Button";
import Link from "../../../base/Link";
import Logo from "../../Logo";
import CartModalToggle from "./CartModalToggle";

type NavigationItemProps = {
  item: {
    label: string;
    icon: IconType;
    route: string;
  };
};

const NavigationItem = memo(({ item }: NavigationItemProps) => {
  const { label, icon: Icon, route } = item || {};
  return (
    <li className="hover:text-yellow-500 transition-colors">
      <Link to={route}>
        <div className="flex-center space-x-2">
          <Icon />
          <span className="uppercase">{label}</span>
        </div>
      </Link>
    </li>
  );
});

const NavigationListing = () => {
  const NAVIGATION_LIST = [
    {
      label: "About",
      icon: FaUserAlt,
      route: Routes.ABOUT,
    },
    {
      label: "Dishes",
      icon: FaHamburger,
      route: Routes.HOME,
    },
    {
      label: "Menu",
      icon: FaPizzaSlice,
      route: Routes.MENU,
    },
    {
      label: "Event",
      icon: RiStackFill,
      route: Routes.EVENT,
    },
    {
      label: "Contact",
      icon: AiFillPhone,
      route: Routes.CONTACT,
    },
    {
      label: "Login",
      icon: FaUserAlt,
      route: Routes.LOGIN,
    },
  ];
  return (
    <ul className="hidden lg:flex items-center justify-end flex-1 space-x-6 xl:space-x-8">
      {NAVIGATION_LIST.map((item) => (
        <NavigationItem key={item.label} item={item} />
      ))}
    </ul>
  );
};

const MobileNavbarToggle = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="lg:hidden rounded-md w-12 h-12"
    >
      <AiOutlineMenu size={24} />
    </Button>
  );
};

const Navbar = () => {
  return (
    <nav
      style={{ boxShadow: "4px -86px 123px rgb(0 0 0 / 7" }}
      className="fixed top-0 left-0 w-full z-50 bg-white"
    >
      <div className="container mx-auto flex items-center justify-between py-2">
        <Logo />
        <div className="flex items-center space-x-2 lg:space-x-4">
          <NavigationListing />
          <CartModalToggle />
          <MobileNavbarToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
