import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import Shimmer from "./Shimmer/ShimmerBlock";
import { useSearchParams } from "react-router-dom";
import { READY_FLAVOUR, SEARCH_RECIPE_API } from "../utils/constants";

const SearchComponent = () => {
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [recipesData, setRecipesData] = useState([]);
  // const [showReadMore, setShowReadMore] = useState(false);
  // const [sortOrder, setSortOrder] = useState("default");
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("q") || "");

  const handleRecipeSearch = () => {
    searchRecipes(searchText);
  };

  const searchRecipes = async (searchText) => {
    setLoading(true);
    const data = await fetch(SEARCH_RECIPE_API + searchText);
    const resultRecipes = await data.json();

    setRecipesData(resultRecipes?.recipes || []);
    setTotal(resultRecipes?.total);
    setLoading(false);
  };

  const handleClearClicked = () => {
    setSearchText("");
    setRecipesData([]);
    setSearchParams("");
    setLoading(false);
  };

  useEffect(() => {
    if (searchText) {
      searchRecipes(searchText);
    }
  }, []);

  return (
    <div className="search-wrapper-wrapper">
      <div className="search-wrapper">
        <input
          id="search"
          type="text"
          className="search-box"
          placeholder="search for recipe..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setSearchParams({ q: e.target.value });
          }}
        />
        <button className="search-button" onClick={handleRecipeSearch}>
          Search
        </button>
        <button className="search-button" onClick={handleClearClicked}>
          Clear
        </button>
      </div>
      {loading ? (
        <Shimmer />
      ) : (
        <div className="search-data-wrapper">
          {searchText ? (
            <div className="recipes-wrapper">
              {recipesData.map((recipe) => {
                return (
                  <div key={recipe.id} className="recipe-card">
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  </div>
                );
              })}
            </div>
          ) : (
            <h3>
              <span>{READY_FLAVOUR}</span>
            </h3>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
