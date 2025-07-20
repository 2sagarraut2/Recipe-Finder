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
import PaginationComponent from "./PaginationComponent";
import SearchComponent from "./SearchComponent";
import FilterComponent from "./FilterComponent";

const Body = () => {
  const [originalRecipesData, setOriginalRecipesData] = useState([]);
  const [recipesData, setRecipesData] = useState([]);
  // const [filteredRecipesData, setFilteredRecipesData] = useState({});
  const [showReadMore, setShowReadMore] = useState(false);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(10);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    console.log("useEffect called...");
    getRecipesData();
  }, [skip, limit]);

  const getRecipesData = async () => {
    setLoading(true);
    const data = await fetch(
      `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`
      // https://dummyjson.com/recipes?limit=10&skip=0
      // https://dummyjson.com/recipes?limit=10&skip=10
    );
    const recipesData = await data.json();

    setRecipesData(recipesData?.recipes || []);
    setOriginalRecipesData(recipesData?.recipes || []);
    setTotal(recipesData?.total);
    setLoading(false);
  };

  const searchRecipes = async () => {
    setLoading(true);
    const data = await fetch(
      "https://dummyjson.com/recipes/search?q=Margherita"
    );
    const resultRecipes = await data.json();

    setRecipesData(resultRecipes?.recipes || []);
    setTotal(resultRecipes?.total);
    setLoading(false);
  };

  const handleMoreButtonClick = () => {
    setShowReadMore(!showReadMore);
  };

  const handleSearchClear = () => {
    console.log("clear pressed");
    setSortOrder("default");
    setLimit(10);
    setSkip(0);
    getRecipesData();
  };

  const handleSort = (value) => {
    let sorted = [...recipesData];

    if (value === "lowToHigh") {
      sorted.sort((a, b) => a.caloriesPerServing - b.caloriesPerServing);
    } else if (value === "highToLow") {
      sorted.sort((a, b) => b.caloriesPerServing - a.caloriesPerServing);
    } // default just uses original

    setRecipesData(sorted);
  };

  return (
    <div className="body">
      {loading ? (
        <Shimmer />
      ) : (
        <div className="recipes-wrapper">
          <div className="search-filter-wrapper">
            <SearchComponent searchRecipes={searchRecipes} />
            <FilterComponent
              onSortChange={handleSort}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
            <button className="search-button" onClick={handleSearchClear}>
              Clear
            </button>
          </div>
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
      <PaginationComponent
        skip={skip}
        limit={limit}
        total={total}
        setSkip={setSkip}
      />
    </div>
  );
};

export default Body;
