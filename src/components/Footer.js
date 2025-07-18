import { Link } from "react-router-dom";

const Footer = () => {
  const menuObject = [
    {
      id: 1,
      label: "Home",
      path: "/",
    },
    {
      id: 2,
      label: "Recipes",
      path: "/recipes",
    },
    {
      id: 3,
      label: "Login",
      path: "/",
    },
  ];

  return (
    <div className="footer">
      {menuObject.map((menu) => {
        const { label, id, path } = menu;
        return (
          <Link to={path} key={id} className="footer-items">
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
