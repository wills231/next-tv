import Link from "next/link";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="c-header" role="banner">
      <div className="c-header--container">
        <nav id="nav" role="navigation" className="c-navigation">
          <Link className="c-navigation__link" as={Link} href="/">
            Home
          </Link>
          <Link className="c-navigation__link" as={Link} href="/search">
            Search
          </Link>
        </nav>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
