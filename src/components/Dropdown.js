// controlled component
const Dropdown = ({ label, data, show, handleDropdownClick, myData }) => {
  return (
    <div>
      <button
        className="w-12/12 border-2 rounded-2xl mt-4 p-3 cursor-pointer flex justify-between"
        onClick={handleDropdownClick}
      >
        <span>{label}</span> {show ? <span>⬆️</span> : <span>⬇️</span>}
      </button>
      {show && (
        <div className="w-12/12 rounded-b-2xl bg-amber-50 block p-4">
          {data.map((instruction) => {
            return (
              <span className="block" key={instruction}>
                {instruction}
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
