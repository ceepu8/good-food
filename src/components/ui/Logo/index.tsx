import { Routes } from "../../../constants";
import Image from "../../base/Image";
import Link from "../../base/Link";

const Logo = () => {
  return (
    <Link to={Routes.HOME} className="py-[0.3125rem] shrink-0">
      <Image src="./images/logo.png" alt="logo" />
    </Link>
  );
};

export default Logo;
