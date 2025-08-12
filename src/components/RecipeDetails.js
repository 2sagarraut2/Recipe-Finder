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
import UserContext from "../context/UserContext";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeInfo = useRecipeDetails(id);
  const [show, setShow] = useState(null);
  const { loggedInUser } = useContext(UserContext);

  const { favorites, addToFavorites, removeFromFavorites } = useRecipe();

  if (recipeInfo === null) return <RecipeDetailsShimmer />;
  const isFavorite = favorites?.includes(recipeInfo?.id);

  const myData = {
    value: "Sagar",
  };

  const handleDropdownClick = (label) => {
    setShow((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <div className="flex justify-center px-20 pb-8 pl-12 bg-[#f9f9f9] relative">
        <div className="flex flex-col w-full justify-center pr-20 pb-8 pl-12 bg-[#f9f9f9] shadow-[0_6px_16px_rgba(0,0,0,0.15)] p-4 rounded-2xl">
          <div className="flex justify-center mb-6">
            <img
              className="w-full max-w-[400px] rounded-[12px] object-cover transition-transform duration-300 ease-in-out"
              src={recipeInfo?.image}
              alt={recipeInfo?.name}
              loading="lazy"
            />
            <div>
              <button
                className={`absolute border-2 border-[#ffcc00] text-[#ffcc00] text-base px-4 py-2 rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out font-bold bg-[#fff8e1] ${
                  isFavorite ? "bg-[#ffcc00] border-[#ffcc00]" : ""
                }`}
                onClick={() =>
                  isFavorite
                    ? removeFromFavorites(recipeInfo?.id)
                    : addToFavorites(recipeInfo?.id)
                }
              >
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              </button>
            </div>
          </div>
          <div className="p-4 flex flex-col">
            <h2>{recipeInfo?.name}</h2>
            <h3>{recipeInfo?.cuisine}</h3>
            <h4 className="flex">
              <FaBowlFood className="mr-1" /> {CALORIES}{" "}
              {recipeInfo?.caloriesPerServing}
            </h4>
            <h4 className="flex">
              <MdOutlineAccessTimeFilled className="mr-1" /> Cooking time:{" "}
              {recipeInfo?.cookTimeMinutes} {MINS}
            </h4>
            <h4 className="flex">
              <PiChefHatFill className="mr-1" /> {DIFFICULTY}{" "}
              {recipeInfo?.difficulty}
            </h4>
            <h4 className="flex">
              <FaStar className="mr-1" /> {RATINGS} {recipeInfo?.rating}
            </h4>
            <h4 className="flex">
              <BiSolidDish className="mr-1" /> {SERVINGS} {recipeInfo?.servings}{" "}
              {PERSONS}
            </h4>
          </div>

          <Dropdown
            label={INGREDIENTS}
            data={recipeInfo?.ingredients}
            show={show === "INGREDIENTS"}
            setShow={setShow}
            myData={myData}
            handleDropdownClick={() => handleDropdownClick("INGREDIENTS")}
          />

          <Dropdown
            label={INSTRUCTIONS}
            data={recipeInfo?.instructions}
            show={show === "INSTRUCTIONS"}
            myData={myData}
            handleDropdownClick={() => handleDropdownClick("INSTRUCTIONS")}
          />
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
