import ShimmerBlock from "./ShimmerBlock";

const RecipeDetailsShimmer = () => (
  <div className="recipe-details-wrapper">
    <div className="recipe-details">
      <div className="recipe-image-wrapper" style={{ textAlign: "center" }}>
        <ShimmerBlock width="500px" height="400px" borderRadius="16px" />
        <ShimmerBlock
          width="120px"
          height="32px"
          style={{ margin: "16px auto" }}
        />
      </div>
      <div className="receipes-data">
        <ShimmerBlock width="100%" height="28px" style={{ marginBottom: 6 }} />
        <ShimmerBlock width="30%" height="20px" style={{ marginBottom: 12 }} />
        {[1, 2, 3, 4, 5].map((n) => (
          <ShimmerBlock
            key={n}
            width="40%"
            height="16px"
            style={{ marginBottom: 7 }}
          />
        ))}
      </div>
      <div style={{ marginTop: 18 }}>
        <ShimmerBlock width="20%" height="18px" style={{ marginBottom: 12 }} />
        {/* Render ingredient chips shimmer */}
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
          {[...Array(6)].map((_, i) => (
            <ShimmerBlock
              key={i}
              width="80px"
              height="18px"
              borderRadius="12px"
            />
          ))}
        </div>
        <ShimmerBlock
          width="30%"
          height="18px"
          style={{ margin: "22px 0 12px" }}
        />
        {/* Render instructions shimmer */}
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
          {[...Array(4)].map((_, i) => (
            <ShimmerBlock
              key={i}
              width="140px"
              height="18px"
              borderRadius="12px"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default RecipeDetailsShimmer;
