import "./Header.css";
import NavigationSpanComp from "../NavigationSpanComp";
import ChetanLogoComp from "../ChetanLogoComp";

const Header = () => {
  return (
    <>
      <header className="header">
        <ChetanLogoComp />
        <nav className="navigation">
          <NavigationSpanComp className="navHome" name="Home" page="/" />
          <NavigationSpanComp
            className="navProject"
            name="Project"
            page="Project"
          />
          <NavigationSpanComp
            className="navProject"
            name="About"
            page="about"
          />
        </nav>
      </header>
    </>
  );
};
export default Header;
