import { LuCircleChevronDown, LuCircleChevronUp } from "react-icons/lu";
import { useRef, useEffect, useState } from "react";

const Dropdown = ({ label, data, show, handleDropdownClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (show && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [show, data]);

  return (
    <section className="mt-4 border rounded-lg overflow-hidden">
      {/* Header Button */}
      <header>
        <button
          aria-expanded={show}
          aria-controls={`dropdown-content-${label}`}
          className={`w-full flex justify-between items-center px-4 py-3 text-left cursor-pointer transition-colors duration-300 hover:bg-[#e5edff] ${
            show ? "bg-[#e5edff]" : "bg-white"
          }`}
          onClick={handleDropdownClick}
        >
          <span className="font-medium">{label}</span>
          {show ? (
            <LuCircleChevronUp fontSize={20} />
          ) : (
            <LuCircleChevronDown fontSize={20} />
          )}
        </button>
      </header>

      {/* Animated Content */}
      <div
        id={`dropdown-content-${label}`}
        ref={contentRef}
        style={{
          height: `${height}px`,
          transition: "height 0.3s ease, opacity 0.3s ease",
          opacity: show ? 1 : 0,
        }}
        className="bg-white px-4 overflow-hidden"
      >
        <ul className="py-3 list-decimal list-inside">
          {data.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Dropdown;
