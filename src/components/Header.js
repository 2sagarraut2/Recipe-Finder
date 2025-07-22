import { TITLE } from "../utils/constants";
import LogoComponent from "./LogoComponent";
import NavigatonComponent from "./NavigatonComponent";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-container">
          <LogoComponent />
          <div className="title-wrapper no-underline">{TITLE}</div>
        </div>
      </Link>
      <div className="navigation-container">
        <NavigatonComponent />
      </div>
      <div className="header-bottom-text">Made with ❤️ in India</div>
    </div>
  );
};

export default Header;
