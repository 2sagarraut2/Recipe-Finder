import { Link } from "react-router-dom";

const NavigatonComponent = () => {
  const menuObject = [
    {
      id: 1,
      label: "Home",
    },
    {
      id: 2,
      label: "Recipes",
    },
    {
      id: 3,
      label: "Login",
    },
    {
      id: 4,
      label: "Cart",
    },
  ];
  return (
    <div className="navigation-component">
      {menuObject.map((menu) => {
        const { label, id } = menu;
        return (
          <Link to="/" key={id} className="menu-items">
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavigatonComponent;
