import { LuCircleChevronDown, LuCircleChevronUp } from "react-icons/lu";

// controlled component
const Dropdown = ({ label, data, show, myData, handleDropdownClick }) => {
  const buttonClasses = `w-12/12 border-1 rounded-t-lg mt-4 p-3 cursor-pointer flex justify-between ${
    show && "bg-[#e5edff]"
  }`;

  return (
    <div className="">
      <button className={buttonClasses} onClick={handleDropdownClick}>
        <span>{label}</span>
        {show ? (
          <span>
            <LuCircleChevronUp fontSize={20} />
          </span>
        ) : (
          <span>
            <LuCircleChevronDown fontSize={20} />
          </span>
        )}
      </button>
      {show && (
        <div className="w-12/12 rounded-b-2xl block p-4 border-r-1 border-l-1 border-b-1">
          {data.map((instruction, index) => {
            return (
              <span className="block" key={instruction}>
                {index + 1}. {instruction}
              </span>
            );
          })}
          {myData.value}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
