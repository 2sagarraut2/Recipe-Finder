import { Link } from "react-router-dom";
import LogoComponent from "./LogoComponent";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img
          className="logo-footer"
          src="https://dcassetcdn.com/design_img/10150/18538/18538_298076_10150_image.jpg"
          alt="logo"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Footer;
