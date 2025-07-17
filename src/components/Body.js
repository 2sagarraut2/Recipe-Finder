import { useEffect, useState } from "react";
import {
  INGREDIENTS,
  INSTRUCTIONS,
  MINS,
  PERSONS,
  SEE_MORE,
} from "../utils/constants";
import Shimmer from "./Shimmer";
import RecipeCard from "./RecipeCard";

const Body = () => {
  const [recipesData, setRecipesData] = useState([]);
  const [showReadMore, setShowReadMore] = useState(false);

  useEffect(() => {
    console.log("useEffect called...");
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const data = await fetch("https://dummyjson.com/recipes");

    const recipesData = await data.json(); // parsing
    console.log(recipesData.recipes);
    setRecipesData(recipesData.recipes);
  };

  const handleMoreButtonClick = () => {
    setShowReadMore(!showReadMore);
  };

  return (
    <div className="body">
      {recipesData.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="recipes-wrapper">
          <RecipeCard recipesData={recipesData} />
          {/* {recipesData.map((recipe) => {
            const {
              caloriesPerServing,
              cookTimeMinutes,
              cuisine,
              difficulty,
              id,
              image,
              ingredients,
              instructions,
              mealType,
              name,
              prepTimeMinutes,
              rating,
              servings,
              tags,
            } = recipe;
            return (
              <div key={id} className="recipe-card">
                <div className="recipe-image-container">
                  <img
                    src={image}
                    alt={name}
                    className="recipe-image"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="receipes-data">
                    <h2>{name}</h2>
                    <h3>{cuisine}</h3>
                    <h4>Calories: {caloriesPerServing}</h4>
                    <h4>
                      Cooking time: {cookTimeMinutes} {MINS}
                    </h4>
                    <h4>Difficulty: {difficulty}</h4>
                    <h4>Ratings: {rating}</h4>
                    <h4>
                      Servings: {servings} {PERSONS}
                    </h4>
                  </div>
                  <div>
                    <button
                      className="see-more-button"
                      onClick={handleMoreButtonClick}
                    >
                      {SEE_MORE}
                    </button>
                  </div>
                  {showReadMore && (
                    <div className="read-more-data">
                      <span className="ingredients-label">{INGREDIENTS}</span>
                      <div className="see-more-data-wrapper">
                        {ingredients.map((ingredient) => {
                          return (
                            <span
                              className="read-more-element"
                              key={ingredient}
                            >
                              {ingredient}{" "}
                            </span>
                          );
                        })}
                      </div>

                      <span className="ingredients-label">{INSTRUCTIONS}</span>
                      <div className="see-more-data-wrapper">
                        {instructions.map((instruction) => {
                          return (
                            <span
                              className="read-more-element"
                              key={instruction}
                            >
                              {instruction}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })} */}
        </div>
      )}
    </div>
  );
};

export default Body;
