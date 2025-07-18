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
    <div className="pagination-container">
      <div>
        <p className="page-info">
          Showing {skip + 1}–{skip + limit} of {total} recipes
        </p>
      </div>
      <div>
        <button
          className="prev-button"
          onClick={handlePrevious}
          disabled={skip < limit}
        >
          Prev.
        </button>
        <button
          className="next-button"
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
