import { useContext } from "react";
import { HiHome, HiSearch, HiUser } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";

const NavigatonComponent = ({ setIsOpen, isOpen }) => {
  const menuObject = [
    {
      id: 1,
      label: "Home",
      path: "/",
      icon: <HiHome fontSize={20} />,
    },
    {
      id: 2,
      label: "Search",
      path: "/search",
      icon: <HiSearch fontSize={20} />,
    },
    {
      id: 3,
      label: "Login",
      path: "/login",
      icon: <HiUser fontSize={20} />,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {menuObject.map((menu) => {
        const { label, id, path, icon } = menu;
        return (
          <NavLink
            onClick={() => setIsOpen(!isOpen)}
            to={path}
            key={id}
            className={({ isActive }) =>
              isActive
                ? "hover:bg-[#eaeaea] bg-transparent border-none text-left px-3 py-2 transition-colors duration-300 ease-in-out font-inherit no-underline text-base w-full flex gap-[10px] items-center font-bold text-[#0077cc] "
                : "hover:bg-[#eaeaea] bg-transparent border-none text-left px-3 py-2 transition-colors duration-300 ease-in-out font-inherit no-underline text-[#333] text-base w-full flex gap-[10px] items-center"
            }
          >
            {icon} {label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavigatonComponent;
