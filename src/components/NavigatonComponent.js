import { useState } from "react";
import { HiHome, HiSearch, HiUser } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const NavigatonComponent = () => {
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
    <div className="navigation-component">
      {menuObject.map((menu) => {
        const { label, id, path, icon } = menu;
        return (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) =>
              isActive
                ? "navigation-button menu-items active"
                : "navigation-button menu-items"
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
