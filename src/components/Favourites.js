import { useDispatch, useSelector } from "react-redux";
import { useRecipe } from "../context/RecipeContext";
import { clearFavourites } from "../utils/redux/favouriteSlice";

const Favourites = () => {
  // const { favorites } = useRecipe();

  const favourites = useSelector((store) => store.favourite.items);
  const dispatch = useDispatch(clearFavourites);
  console.log(favourites);

  const handleClearFavourites = () => {
    dispatch(clearFavourites());
  };

  return (
    <div>
      {favourites.map((favourite) => {
        return (
          <section key={favourite.id} className="flex justify-between">
            <h3>{favourite.name}</h3>
          </section>
        );
      })}
      <section>
        <button
          onClick={handleClearFavourites}
          className="bg-red-500 p-2 rounded-lg cursor-pointer hover:bg-red-600 text-white"
        >
          Clear Favourites
        </button>
      </section>
    </div>
  );
};

export default Favourites;
