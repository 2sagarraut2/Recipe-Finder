import { TITLE } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import LogoComponent from "./LogoComponent";
import NavigatonComponent from "./NavigatonComponent";
import { Link } from "react-router-dom";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <Link to="/" className="no-underline">
        <div className="logo-container">
          <LogoComponent />
          <h3 className="title-wrapper no-underline">{TITLE}</h3>
        </div>
      </Link>
      <div className="navigation-container">
        <NavigatonComponent />
        <h3 className={onlineStatus ? "online" : "offline"}>
          {onlineStatus ? "Online ✅" : "Offline 🔴"}
        </h3>
      </div>
      <div className="header-bottom-text">Made with ❤️ in India</div>
    </div>
  );
};

export default Header;
