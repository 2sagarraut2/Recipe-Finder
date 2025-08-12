import { useContext } from "react";
import UserContext from "../context/UserContext";

const Footer = () => {
  return (
    <div className="border-t border-red-500 text-center mt-5 pt-5 text-[#999] flex justify-around ml-[1%]">
      <div>
        <img
          className="w-full h-[100px] rounded-[12px]"
          src="https://dcassetcdn.com/design_img/10150/18538/18538_298076_10150_image.jpg"
          alt="logo"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Footer;
