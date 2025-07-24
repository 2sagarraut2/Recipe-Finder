const Shimmer = ({ cardCount = 10 }) => {
  return (
    <div className="recipes-wrapper-shimmer">
      {Array.from({ length: cardCount }).map((_, index) => (
        <div key={index} className="recipe-card-shimmer"></div>
      ))}
    </div>
  );
};

export default Shimmer;
