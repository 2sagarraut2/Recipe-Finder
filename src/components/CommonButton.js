const CommonButton = ({ label, handleButtonClicked }) => {
  return (
    <button
      className="px-5 py-2.5 text-base bg-indigo-600 text-white rounded-xl border-none cursor-pointer shadow-md transition  duration-200 ease-in-out hover:bg-indigo-700 hover:-translate-y-0.5 active:bg-indigo-800 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-indigo-500/40 my-2"
      onClick={handleButtonClicked}
    >
      {label}
    </button>
  );
};

export default CommonButton;
