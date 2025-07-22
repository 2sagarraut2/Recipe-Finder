import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import PaginationComponent from "./PaginationComponent";
import Shimmer from "./Shimmer";

const SearchComponent = () => {
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [recipesData, setRecipesData] = useState([]);
  const [showReadMore, setShowReadMore] = useState(false);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [sortOrder, setSortOrder] = useState("default");

  const handleRecipeSearch = () => {
    searchRecipes();
  };

  const searchRecipes = async () => {
    setLoading(true);
    const data = await fetch(
      "https://dummyjson.com/recipes/search?q=Margherita"
    );
    const resultRecipes = await data.json();

    setTotal(resultRecipes?.total);
    setLoading(false);
  };

  useEffect(() => {
    console.log("useEffect called...");
    getRecipesData();
  }, [skip, limit]);

  const getRecipesData = async () => {
    setLoading(true);
    const data = await fetch(
      `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`
    );
    const recipesData = await data.json();

    setRecipesData(recipesData?.recipes || []);
    setTotal(recipesData?.total);
    setLoading(false);
  };

  return (
    <div className="body">
      {loading ? (
        <Shimmer />
      ) : (
        <>
          <div className="search-wrapper">
            <input id="search" type="text" className="search-box" />
            <button className="search-button" onClick={handleRecipeSearch}>
              Search
            </button>
          </div>
          <RecipeCard recipesData={recipesData} />
          <PaginationComponent
            skip={skip}
            limit={limit}
            total={total}
            setSkip={setSkip}
          />
        </>
      )}
    </div>
  );
};

export default SearchComponent;
