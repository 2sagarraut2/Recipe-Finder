import RecipeCardShimmer from "./RecipeCardShimmer";

const RecipeListShimmer = ({ count = 10 }) => (
  <div className="recipes-wrapper-shimmer">
    {Array.from({ length: count }).map((_, i) => (
      <RecipeCardShimmer key={i} />
    ))}
  </div>
);

export default RecipeListShimmer;
