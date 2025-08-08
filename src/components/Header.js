import { TITLE } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import LogoComponent from "./LogoComponent";
import NavigatonComponent from "./NavigatonComponent";
import { Link } from "react-router-dom";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="fixed top-0 left-0 w-[220px] min-w-[200px] h-[100vh] bg-[#f9f9f9] border-[1px] border-solid border-[#ddd] flex flex-col items-center pt-[20px] pb-[20px] pl-0 pr-0 shadow-2xs z-[1000] transition-all ease-[0.3s]">
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
