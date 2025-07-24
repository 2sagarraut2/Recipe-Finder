import { useEffect, useState } from "react";
import {
  INGREDIENTS,
  INSTRUCTIONS,
  MINS,
  ONE_RECIPE_API,
  PERSONS,
} from "../utils/constants";
import { useParams } from "react-router";
import { FaBowlFood, FaStar } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { PiChefHatFill } from "react-icons/pi";
import { BiSolidDish } from "react-icons/bi";
import Shimmer from "./Shimmer";
import { useRecipe } from "../context/RecipeContext";

const RecipeDetails = () => {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const { favorites, addToFavorites, removeFromFavorites } = useRecipe();

  const isFavorite = favorites.includes(recipeDetails.id);

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    getRecipeById();
  }, [id]);

  const getRecipeById = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${ONE_RECIPE_API}${id}`);
      const data = await res.json();
      console.log(data);
      setRecipeDetails(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch recipe:", error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Shimmer />
      ) : (
        <div className="recipe-details-wrapper">
          <div className="recipe-details">
            <div className="recipe-image-wrapper">
              <img
                className="recipe-image-details"
                src={recipeDetails.image}
                alt={recipeDetails.name}
                loading="lazy"
              />
              <div>
                <button
                  className={`favorite-button ${isFavorite ? "favorited" : ""}`}
                  onClick={() =>
                    isFavorite
                      ? removeFromFavorites(recipeDetails.id)
                      : addToFavorites(recipeDetails.id)
                  }
                >
                  {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                </button>
              </div>
            </div>
            <div className="receipes-data">
              <h2>{recipeDetails.name}</h2>
              <h3>{recipeDetails.cuisine}</h3>
              <h4>
                <FaBowlFood className="icon-inline" /> Calories:{" "}
                {recipeDetails.caloriesPerServing}
              </h4>
              <h4>
                <MdOutlineAccessTimeFilled className="icon-inline" /> Cooking
                time: {recipeDetails.cookTimeMinutes} {MINS}
              </h4>
              <h4>
                <PiChefHatFill className="icon-inline" /> Difficulty:{" "}
                {recipeDetails.difficulty}
              </h4>
              <h4>
                <FaStar className="icon-inline" /> Ratings:{" "}
                {recipeDetails.rating}
              </h4>
              <h4>
                <BiSolidDish className="icon-inline" /> Servings:{" "}
                {recipeDetails.servings} {PERSONS}
              </h4>
            </div>
            <span className="ingredients-label">{INGREDIENTS}</span>
            <div className="see-more-data-wrapper">
              {recipeDetails?.ingredients?.map((ingredient) => {
                return (
                  <span className="read-more-element" key={ingredient}>
                    {ingredient}
                  </span>
                );
              })}
            </div>

            <span className="ingredients-label">{INSTRUCTIONS}</span>
            <div className="see-more-data-wrapper">
              {recipeDetails?.instructions?.map((instruction, index) => {
                console.log(instruction);
                return (
                  <span className="read-more-element" key={instruction}>
                    {index + 1}. {instruction}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetails;
