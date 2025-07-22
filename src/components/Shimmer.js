const Shimmer = ({ cardCount = 10 }) => {
  return (
    <div className="recipes-wrapper-shimmer">
      {Array.from({ length: cardCount }).map((_, index) => (
        <div key={index} className="recipe-card-shimmer">
          {/* <div className="recipe-image-container-shimmer"></div>
          <div>
            <div className="receipes-data-shimmer"></div>
            <div></div>

            <div className="read-more-data-shimmer"></div>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
