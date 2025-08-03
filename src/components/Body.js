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
import useRecipe from "../utils/useRecipe";

const Body = () => {
  const [recipesData, setRecipesData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);

  const originalRecipesData = useRecipe(skip, limit);

  useEffect(() => {
    if (originalRecipesData) {
      setRecipesData(originalRecipesData.recipes);
      setTotal(originalRecipesData.total);
    }
  }, [originalRecipesData]);

  if (originalRecipesData === null) return <Shimmer />;

  const LabelRecipeCard = RecipeCardHOC(RecipeCard);

  return (
    <div className="body">
      <div>
        <>
          <div className="recipes-wrapper">
            {recipesData.map((recipe) => {
              return (
                <div key={recipe.id} className="recipe-card">
                  {recipe.caloriesPerServing <= 200 ? (
                    <LabelRecipeCard recipesData={recipe} />
                  ) : (
                    <RecipeCard key={recipe.id} recipesData={recipe} />
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
      </div>
    </div>
  );
};

export default Body;
