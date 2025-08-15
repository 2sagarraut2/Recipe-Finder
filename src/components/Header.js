import { useContext, useState } from "react";
import { TITLE } from "../utils/constants";
import LogoComponent from "./LogoComponent";
import NavigatonComponent from "./NavigatonComponent";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, updateTheme } = useTheme();

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 p-2 bg-indigo-600 text-white z-[1100] rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[900] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[220px] min-w-[200px] h-screen bg-[#f9f9f9] border border-[#ddd] flex flex-col items-center pt-5 pb-5 shadow-md z-[1000] transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <Link to="/" className="no-underline mb-6">
          <div className="flex flex-col items-center">
            <LogoComponent />
            <h3 className="text-lg font-bold text-[#333] mt-2">{TITLE}</h3>
          </div>
        </Link>

        <div className="w-full px-2">
          <NavigatonComponent setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>

        <button
          onClick={updateTheme}
          className="bg-green-500 p-2 rounded-xl cursor-pointer"
        >
          Change Theme
        </button>
        <div
          className={`mt-auto text-sm ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Made with ❤️ in India
        </div>
      </div>
    </>
  );
};

export default Header;
