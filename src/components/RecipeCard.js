import { useState } from "react";
import {
  INGREDIENTS,
  INSTRUCTIONS,
  MINS,
  PERSONS,
  SEE_MORE,
} from "../utils/constants";
import RecipeDetails from "./RecipeDetails";
import { FaBowlFood, FaStar } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { PiChefHatFill } from "react-icons/pi";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const [showReadMore, setShowReadMore] = useState(false);

  const handleMoreButtonClick = (id) => {
    setShowReadMore(!showReadMore);
    navigate(`/recipe/${id}`);
  };

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
    <>
      <NavLink key={id} className="no_underline" to={"/recipe/" + id}>
        <div className="recipe-image-container">
          <img src={image} alt={name} className="recipe-image" loading="lazy" />
        </div>
        <div>
          <div className="receipes-data">
            <h2>{name}</h2>
            <h3>{cuisine}</h3>
            <h4>
              <FaBowlFood className="icon-inline" /> Calories:{" "}
              {caloriesPerServing}
            </h4>
            <h4>
              <MdOutlineAccessTimeFilled className="icon-inline" /> Cooking
              time: {cookTimeMinutes} {MINS}
            </h4>
            <h4>
              <PiChefHatFill className="icon-inline" /> Difficulty: {difficulty}
            </h4>
            <h4>
              <FaStar className="icon-inline" /> Ratings: {rating}
            </h4>
            <h4>
              <BiSolidDish className="icon-inline" /> Servings: {servings}{" "}
              {PERSONS}
            </h4>
          </div>
          {/* <div>
            <button
              className="see-more-button"
              onClick={() => {
                handleMoreButtonClick(id);
              }}
            >
              {SEE_MORE}
            </button>
          </div> */}

          <div className="read-more-data">
            {showReadMore && (
              <RecipeDetails
                id={id}
                showReadMore={showReadMore}
                setShowReadMore={setShowReadMore}
              />
            )}
          </div>
        </div>
      </NavLink>
    </>
  );
};
export default RecipeCard;
