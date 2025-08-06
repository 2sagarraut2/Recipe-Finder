import ShimmerBlock from "./ShimmerBlock";

const RecipeCardShimmer = () => (
  <div className="recipe-card-shimmer" style={{ padding: 16 }}>
    <ShimmerBlock width="100%" height="200px" borderRadius="16px" />
    <div style={{ padding: 16 }}>
      <ShimmerBlock width="80%" height="24px" style={{ marginBottom: 8 }} />{" "}
      {/* Title */}
      <ShimmerBlock
        width="60%"
        height="16px"
        style={{ marginBottom: 12 }}
      />{" "}
      {/* Cuisine */}
      {[1, 2, 3, 4, 5].map((n) => (
        <ShimmerBlock
          key={n}
          width="70%"
          height="14px"
          style={{ marginBottom: 8 }}
        />
      ))}
    </div>
  </div>
);

export default RecipeCardShimmer;
