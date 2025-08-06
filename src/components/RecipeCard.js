import {
  CALORIES,
  COOKING_TIME,
  MINS,
  PERSONS,
  RATINGS,
  SERVINGS,
} from "../utils/constants";
import { FaBowlFood, FaStar } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { PiChefHatFill } from "react-icons/pi";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const RecipeCard = ({ recipesData }) => {
  const navigate = useNavigate();

  const handleMoreButtonClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  const {
    caloriesPerServing,
    cookTimeMinutes,
    cuisine,
    difficulty,
    id,
    image,
    name,
    rating,
    servings,
  } = recipesData;

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
              <FaBowlFood className="icon-inline" /> {CALORIES}{" "}
              {caloriesPerServing}
            </h4>
            <h4>
              <MdOutlineAccessTimeFilled className="icon-inline" />{" "}
              {COOKING_TIME} {cookTimeMinutes} {MINS}
            </h4>
            <h4>
              <PiChefHatFill className="icon-inline" /> Difficulty: {difficulty}
            </h4>
            <h4>
              <FaStar className="icon-inline" /> {RATINGS} {rating}
            </h4>
            <h4>
              <BiSolidDish className="icon-inline" /> {SERVINGS} {servings}{" "}
              {PERSONS}
            </h4>
          </div>
        </div>
      </NavLink>
    </>
  );
};
export default RecipeCard;
