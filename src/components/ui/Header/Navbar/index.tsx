import { IconType } from "react-icons";
import { Routes } from "../../../../constants";
import Logo from "../../Logo";
import { AiFillPhone, AiOutlineShoppingCart } from "react-icons/ai";
import { FaHamburger, FaPizzaSlice, FaUserAlt } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import Link from "../../../base/Link";
import { memo } from "react";
import { Button } from "../../../base/Button";

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
    <ul className="flex items-center justify-end flex-1 space-x-8">
      {NAVIGATION_LIST.map((item) => (
        <NavigationItem item={item} />
      ))}

      <ButtonCart />
    </ul>
  );
};

const CartNumber = () => {
  return (
    <div className="relative">
      <AiOutlineShoppingCart size={24} />
      <span className="absolute -top-1 -right-1.5 text-[10px] leading-4 w-4 h-4 rounded-2xl bg-white group-hover:text-white group-hover:bg-yellow-500 text-yellow-500">
        1
      </span>
    </div>
  );
};

const ButtonCart = () => {
  return (
    <div>
      <Button variant="primary" className="uppercase group">
        <CartNumber />
        Shopping cart
      </Button>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between py-2">
        <Logo />
        <NavigationListing />
      </div>
    </nav>
  );
};

export default Navbar;
