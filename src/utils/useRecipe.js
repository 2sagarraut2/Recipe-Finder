import { useEffect, useState } from "react";
import { RECIPES_API } from "./constants";

const useRecipe = (skip, limit) => {
  const [originalRecipesData, setOriginalRecipesData] = useState(null);

  useEffect(() => {
    getRecipesData();
  }, [skip]);

  const getRecipesData = async () => {
    const data = await fetch(RECIPES_API + limit + "&skip=" + skip);
    const recipesData = await data.json();

    setOriginalRecipesData(recipesData || null);
  };
  return originalRecipesData;
};

export default useRecipe;
