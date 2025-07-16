import { useEffect, useState } from "react";
import { PERSONS, SEE_MORE } from "../utils/constants";

const Body = () => {
  const [recipesData, setRecipesData] = useState([]);

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

  return (
    <div className="body">
      <div className="recipes-wrapper">
        {recipesData.map((recipe) => {
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
              <div>
                <img src={image} alt={name} className="recipe-image" />
              </div>
              <div>
                <div className="receipes-data">
                  <h2>{name}</h2>
                  <h3>{cuisine}</h3>
                  <h4>Calories: {caloriesPerServing}</h4>
                  <h4>Cooking time: {cookTimeMinutes}</h4>
                  <h4>Difficulty: {difficulty}</h4>
                  <h4>Ratings: {rating}</h4>
                  <h4>
                    Servings: {servings} {PERSONS}
                  </h4>
                </div>
                <div>
                  <button className="see-more-button">{SEE_MORE}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
