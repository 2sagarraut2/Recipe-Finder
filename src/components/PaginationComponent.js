const PaginationComponent = ({ skip, limit, total, setSkip }) => {
  const handleNext = () => {
    if (skip + limit < total) {
      setSkip(skip + limit);
      //   window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (skip >= limit) {
      setSkip(skip - limit);
      //   window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center mt-[2%]">
      <div>
        <p className="">
          Showing {skip + 1}–{skip + limit} of {total} recipes
        </p>
      </div>
      <div>
        <button
          className="px-5 py-2.5 m-[10px] mx-[5px] bg-[#4caf50] text-white border-none rounded-lg text-base cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#45a049]"
          onClick={handlePrevious}
          disabled={skip < limit}
        >
          Prev.
        </button>
        <button
          className="px-5 py-2.5 m-[10px] mx-[5px] bg-[#4caf50] text-white border-none rounded-lg text-base cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#45a049]"
          onClick={handleNext}
          disabled={skip + limit >= total}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
