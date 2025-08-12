import ShimmerBlock from "./ShimmerBlock";

const RecipeCardShimmer = () => (
  <div
    className="w-full max-w-[280px] h-[390px] 
    bg-white rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] 
    box-border overflow-hidden 
    relative flex flex-col flex-grow
    transition-transform duration-200 ease-linear
    text-decoration-none
    shimmer"
    style={{
      padding: 16,
      backgroundImage:
        "linear-gradient(100deg, #f0f0f0 30%, #e0e0e0 40%, #f0f0f0 60%)",
      backgroundSize: "400% 100%",
    }}
  >
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
