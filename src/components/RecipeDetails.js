import {
  CALORIES,
  DIFFICULTY,
  INGREDIENTS,
  INSTRUCTIONS,
  MINS,
  PERSONS,
  RATINGS,
  SERVINGS,
} from "../utils/constants";
import { useParams } from "react-router";
import { FaBowlFood, FaStar } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { PiChefHatFill } from "react-icons/pi";
import { BiSolidDish } from "react-icons/bi";
import { useRecipe } from "../context/RecipeContext";
import useRecipeDetails from "../utils/useRecipeDetails";
import RecipeDetailsShimmer from "./Shimmer/RecipeDetailsShimmer";
import { useContext, useState } from "react";
import Dropdown from "./Dropdown";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeInfo = useRecipeDetails(id);
  const [show, setShow] = useState(null);

  const { favorites, addToFavorites, removeFromFavorites } = useRecipe();

  if (recipeInfo === null) return <RecipeDetailsShimmer />;
  const isFavorite = favorites?.includes(recipeInfo?.id);

  const handleDropdownClick = (label) => {
    setShow((prev) => (prev === label ? null : label));
  };

  return (
    <main className="flex justify-center px-20 pb-8 pl-12 bg-[#f9f9f9] relative">
      <article className="flex flex-col w-full justify-center pr-20 pb-8 pl-12 bg-[#f9f9f9] shadow-[0_6px_16px_rgba(0,0,0,0.15)] p-4 rounded-2xl">
        <figure className="flex justify-center mb-6 relative">
          <img
            className="w-full max-w-[400px] rounded-[12px] object-cover transition-transform duration-300 ease-in-out"
            src={recipeInfo?.image}
            alt={recipeInfo?.name}
            loading="lazy"
          />
          <figcaption className="sr-only">{recipeInfo?.name}</figcaption>
          <button
            className={`absolute border-2 text-base px-4 py-2 rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out font-bold top-4 right-4 
    ${
      isFavorite
        ? "bg-[#ffcc00] border-[#ffcc00] text-white"
        : "bg-[#fff8e1] border-[#ffcc00] text-[#ffcc00]"
    } hover:scale-105 active:scale-95 shadow-md`}
            onClick={() => {
              if (isFavorite) {
                removeFromFavorites(recipeInfo?.id);
              } else {
                addToFavorites(recipeInfo?.id);
              }
            }}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </figure>

        <header className="p-4 flex flex-col">
          <h1 className="text-2xl font-bold">{recipeInfo?.name}</h1>
          <p className="text-lg text-gray-600">{recipeInfo?.cuisine}</p>
          <ul className="mt-2 space-y-1">
            <li className="flex items-center">
              <FaBowlFood className="mr-1" /> {CALORIES}{" "}
              {recipeInfo?.caloriesPerServing}
            </li>
            <li className="flex items-center">
              <MdOutlineAccessTimeFilled className="mr-1" /> Cooking time:{" "}
              {recipeInfo?.cookTimeMinutes} {MINS}
            </li>
            <li className="flex items-center">
              <PiChefHatFill className="mr-1" /> {DIFFICULTY}{" "}
              {recipeInfo?.difficulty}
            </li>
            <li className="flex items-center">
              <FaStar className="mr-1" /> {RATINGS} {recipeInfo?.rating}
            </li>
            <li className="flex items-center">
              <BiSolidDish className="mr-1" /> {SERVINGS} {recipeInfo?.servings}{" "}
              {PERSONS}
            </li>
          </ul>
        </header>

        <section aria-labelledby="ingredients-title">
          <Dropdown
            label={INGREDIENTS}
            data={recipeInfo?.ingredients}
            show={show === "INGREDIENTS"}
            setShow={setShow}
            handleDropdownClick={() => handleDropdownClick("INGREDIENTS")}
          />
        </section>

        <section aria-labelledby="instructions-title">
          <Dropdown
            label={INSTRUCTIONS}
            data={recipeInfo?.instructions}
            show={show === "INSTRUCTIONS"}
            handleDropdownClick={() => handleDropdownClick("INSTRUCTIONS")}
          />
        </section>
      </article>
    </main>
  );
};

export default RecipeDetails;
