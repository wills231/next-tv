import Image from "next/image";
import logo from "../../../public/ntlogo-white.svg";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link className="c-header__logo" href="/">
        <Image
          className="c-header__logo-visual"
          src={logo}
          alt="logo"
          priority="true"
        />
        <span className="u-visually-hidden">
          Logo NEXT TV app - Back to home
        </span>
      </Link>
    </>
  );
};

export default Logo;
