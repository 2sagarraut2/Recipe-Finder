import { createContext, useState, useContext } from "react";

// 1. Create Context
const RecipeContext = createContext();

// 2. Create Provider
export const RecipeProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // console.log("favorites ", favorites);

  const addToFavorites = (recipe) => {
    console.log("addToFavorites");
    setFavorites((prev) => [...prev, recipe]);
  };

  const removeFromFavorites = (id) => {
    console.log("removeFromFavorites");
    setFavorites((prev) => prev.filter((favId) => favId !== id));
  };

  return (
    <RecipeContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

// 3. Create custom hook (optional but clean)
export const useRecipe = () => useContext(RecipeContext);
