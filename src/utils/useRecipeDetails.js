import { useEffect, useState } from "react";
import { ONE_RECIPE_API } from "./constants";

const useRecipeDetails = (id) => {
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    getRecipeById();
  }, [id]);

  const getRecipeById = async () => {
    try {
      const res = await fetch(`${ONE_RECIPE_API}${id}`);
      const data = await res.json();
      setRecipeDetails(data);
    } catch (error) {
      console.error("Failed to fetch recipe:", error);
    }
  };

  return recipeDetails;
};

export default useRecipeDetails;
