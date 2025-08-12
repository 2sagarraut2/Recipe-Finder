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
import { useContext } from "react";
import UserContext from "../context/UserContext";

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
        <div className="w-full h-[200px] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-[120%] block"
            loading="lazy"
          />
        </div>
        <div>
          <div className="p-4 flex flex-col">
            <h2 className="whitespace-nowrap overflow-hidden text-ellipsis w-full truncate font-bold text-[20px]">
              {name}
            </h2>
            <h3 className="whitespace-nowrap overflow-hidden text-ellipsis w-full truncate">
              {cuisine}
            </h3>
            <h4 className="whitespace-nowrap overflow-hidden text-ellipsis w-full flex truncate text-gray-500">
              <FaBowlFood className="mr-1" /> {CALORIES} {caloriesPerServing}
            </h4>
            <h4 className="whitespace-nowrap overflow-hidden text-ellipsis w-full flex truncate text-gray-500">
              <MdOutlineAccessTimeFilled className="mr-1" /> {COOKING_TIME}{" "}
              {cookTimeMinutes} {MINS}
            </h4>
            <h4 className="whitespace-nowrap overflow-hidden text-ellipsis w-full flex truncate text-gray-500">
              <PiChefHatFill className="mr-1" /> Difficulty: {difficulty}
            </h4>
            <h4 className="whitespace-nowrap overflow-hidden text-ellipsis w-full flex truncate text-gray-500">
              <FaStar className="mr-1" /> {RATINGS} {rating}
            </h4>
            <h4 className="whitespace-nowrap overflow-hidden text-ellipsis w-full flex truncate text-gray-500">
              <BiSolidDish className="mr-1" /> {SERVINGS} {servings} {PERSONS}
            </h4>
          </div>
        </div>
      </NavLink>
    </>
  );
};
export default RecipeCard;
