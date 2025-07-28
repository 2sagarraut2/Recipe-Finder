import { useEffect, useState } from "react";
import {
  INGREDIENTS,
  INSTRUCTIONS,
  MINS,
  PERSONS,
  RECIPES_API,
  SEE_MORE,
} from "../utils/constants";
import Shimmer from "./Shimmer";
import RecipeCard from "./RecipeCard";
import RecipeCardHOC from "./RecipeCardHOC";
import PaginationComponent from "./PaginationComponent";

const Body = () => {
  const [originalRecipesData, setOriginalRecipesData] = useState([]);
  const [recipesData, setRecipesData] = useState([]);
  const [showReadMore, setShowReadMore] = useState(false);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(10);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    getRecipesData();
  }, [skip, limit]);

  const getRecipesData = async () => {
    setLoading(true);
    const data = await fetch(RECIPES_API + limit + "&skip=" + skip);
    const recipesData = await data.json();

    setRecipesData(recipesData?.recipes || []);
    setOriginalRecipesData(recipesData?.recipes || []);
    setTotal(recipesData?.total);
    setLoading(false);
  };

  const handleMoreButtonClick = () => {
    setShowReadMore(!showReadMore);
  };

  const handleSearchClear = () => {
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

  const LabelRecipeCard = RecipeCardHOC(RecipeCard);

  return (
    <div className="body">
      <div>
        {loading ? (
          <Shimmer />
        ) : (
          <>
            <div className="recipes-wrapper">
              {recipesData.map((recipe) => {
                return (
                  <div key={recipe.id} className="recipe-card">
                    {recipe.caloriesPerServing <= 200 ? (
                      <LabelRecipeCard recipe={recipe} />
                    ) : (
                      <RecipeCard key={recipe.id} recipe={recipe} />
                    )}
                  </div>
                );
              })}
            </div>
            <PaginationComponent
              skip={skip}
              limit={limit}
              total={total}
              setSkip={setSkip}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
