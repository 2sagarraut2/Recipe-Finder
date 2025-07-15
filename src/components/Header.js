import { TITLE } from "../utils/constants";
import LogoComponent from "./LogoComponent";
import NavigatonComponent from "./NavigatonComponent";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <div>
          <LogoComponent />
        </div>
        <div className="title-wrapper">
          <h3>{TITLE}</h3>
        </div>
      </div>
      <div className="navigation-container">
        <NavigatonComponent />
      </div>
    </div>
  );
};

export default Header;
