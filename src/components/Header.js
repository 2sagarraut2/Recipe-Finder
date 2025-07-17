import { TITLE } from "../utils/constants";
import LogoComponent from "./LogoComponent";
import NavigatonComponent from "./NavigatonComponent";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-container">
          <div>
            <LogoComponent />
          </div>
          <div className="title-wrapper">
            <h3 className="no-underline">{TITLE}</h3>
          </div>
        </div>
      </Link>
      <div className="navigation-container">
        <NavigatonComponent />
      </div>
    </div>
  );
};

export default Header;
