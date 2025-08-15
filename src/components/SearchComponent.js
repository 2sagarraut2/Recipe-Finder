import { useContext, useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import Shimmer from "./Shimmer/ShimmerBlock";
import { useSearchParams } from "react-router-dom";
import { READY_FLAVOUR, SEARCH_RECIPE_API } from "../utils/constants";
import { useUserName } from "../context/UserContext";
import RecipeCardHOC from "./RecipeCardHOC";
import CommonButton from "./CommonButton";

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

  const { userName, updateUserName } = useUserName();

  const LabelRecipeCard = RecipeCardHOC(RecipeCard);

  return (
    <div className="px-8 md:flex md:flex-col">
      <div className="flex items-center gap-[2%] mb-[2%] box-border flex-col sm:flex-row">
        <input
          id="search"
          type="text"
          className="w-full px-4 py-[10px] border border-gray-300 rounded-xl text-base outline-none transition-colors duration-200 ease-in-out focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/20 my-2"
          placeholder="search for recipe..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setSearchParams({ q: e.target.value });
            updateUserName(e.target.value);
          }}
        />
        <CommonButton
          label={"Search"}
          handleButtonClicked={handleRecipeSearch}
        />
        <CommonButton
          label={"Clear"}
          handleButtonClicked={handleClearClicked}
        />
      </div>
      <div className="mb-[2%]">
        {loading ? (
          <Shimmer />
        ) : (
          <div className="flex flex-wrap">
            {searchText ? (
              <div className="flex flex-wrap gap-6 justify-center mb-2">
                {recipesData.map((recipe) => {
                  return (
                    <div
                      key={recipe.id}
                      className="relative flex flex-col rounded-[16px] w-full max-w-[280px] box-border overflow-hidden flex-grow transition-transform duration-200 ease-linear hover:-translate-y-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                    >
                      {recipe.caloriesPerServing <= 200 ? (
                        <LabelRecipeCard recipesData={recipe} />
                      ) : (
                        <RecipeCard key={recipe?.id} recipesData={recipe} />
                      )}
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
      <div>
        <label htmlFor="country">Select Country: </label>
        <select
          className="border-1 rounded-sm"
          id="country"
          onChange={(e) => {
            console.log(e.target.value);
            const countryValue = e.target.value;
            if (countryValue === "india") {
              console.log("Indian citizen: Free entry!");
            } else if (countryValue === "germany") {
              console.log("Foreigner: Rs. 200 fees");
            } else {
              console.log("Foreigner: Rs. 400 fees");
            }
          }}
        >
          <option value="india">India</option>
          <option value="germany">Germany</option>
          <option value="singapore">Singapore</option>
        </select>
      </div>
      <div>
        <span className="pr-2">
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <label htmlFor="male" className="pl-1">
            Male
          </label>
        </span>
        <span className="pr-2">
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <label htmlFor="female" className="pl-1">
            Female
          </label>
        </span>
        <h3>{userName}</h3>
      </div>
    </div>
  );
};

export default SearchComponent;
