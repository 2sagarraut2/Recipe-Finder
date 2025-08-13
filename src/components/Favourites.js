import { useRecipe } from "../context/RecipeContext";

const Favourites = () => {
  const { favorites } = useRecipe();
  console.log(favorites);
  return (
    <div>
      {favorites.map((favorite) => {
        return <span key={favorite}>{favorite}</span>;
      })}
    </div>
  );
};

export default Favourites;
