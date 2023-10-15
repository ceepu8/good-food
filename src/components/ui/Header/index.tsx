import Button from "../../base/Button";
import CartModal from "../../modal/CartModal";
import Logo from "../Logo";

const NavigationItem = () => {
  return <li>123</li>;
};

const NavigationListing = () => {
  return (
    <ul className="flex-center">
      <NavigationItem />
      <NavigationItem />
      <NavigationItem />
    </ul>
  );
};

const ButtonCart = () => {
  return (
    <div>
      <Button />
      <CartModal />
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex-center">
      <Logo />
      <NavigationListing />
      <ButtonCart />
    </div>
  );
};

export default Header;
