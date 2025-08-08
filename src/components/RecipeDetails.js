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
import { useState } from "react";
import Dropdown from "./Dropdown";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeInfo = useRecipeDetails(id);
  const [show, setShow] = useState(false);

  const { favorites, addToFavorites, removeFromFavorites } = useRecipe();

  if (recipeInfo === null) return <RecipeDetailsShimmer />;
  const isFavorite = favorites?.includes(recipeInfo?.id);

  const handleDropdownClick = () => {
    setShow(!show);
  };

  const myData = {
    value: "Sagar",
  };

  return (
    <>
      <div className="recipe-details-wrapper">
        <div className="recipe-details">
          <div className="recipe-image-wrapper">
            <img
              className="recipe-image-details"
              src={recipeInfo?.image}
              alt={recipeInfo?.name}
              loading="lazy"
            />
            <div>
              <button
                className={`favorite-button ${isFavorite ? "favorited" : ""}`}
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
          <div className="receipes-data">
            <h2>{recipeInfo?.name}</h2>
            <h3>{recipeInfo?.cuisine}</h3>
            <h4>
              <FaBowlFood className="icon-inline" /> {CALORIES}{" "}
              {recipeInfo?.caloriesPerServing}
            </h4>
            <h4>
              <MdOutlineAccessTimeFilled className="icon-inline" /> Cooking
              time: {recipeInfo?.cookTimeMinutes} {MINS}
            </h4>
            <h4>
              <PiChefHatFill className="icon-inline" /> {DIFFICULTY}{" "}
              {recipeInfo?.difficulty}
            </h4>
            <h4>
              <FaStar className="icon-inline" /> {RATINGS} {recipeInfo?.rating}
            </h4>
            <h4>
              <BiSolidDish className="icon-inline" /> {SERVINGS}{" "}
              {recipeInfo?.servings} {PERSONS}
            </h4>
          </div>
          <span className="ingredients-label">{INGREDIENTS}</span>
          <div className="see-more-data-wrapper">
            {recipeInfo?.ingredients?.map((ingredient) => {
              return (
                <span className="read-more-element" key={ingredient}>
                  {ingredient}
                </span>
              );
            })}
          </div>
          <span className="ingredients-label">{INSTRUCTIONS}</span>
          <div className="see-more-data-wrapper">
            {recipeInfo?.instructions?.map((instruction, index) => {
              return (
                <span className="read-more-element" key={instruction}>
                  {index + 1}. {instruction}
                </span>
              );
            })}
          </div>

          <Dropdown
            label={INGREDIENTS}
            data={recipeInfo?.ingredients}
            show={show}
            handleDropdownClick={handleDropdownClick}
            myData={myData}
          />

          <Dropdown
            label={INSTRUCTIONS}
            data={recipeInfo?.instructions}
            show={show}
            handleDropdownClick={handleDropdownClick}
            myData={myData}
          />
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
