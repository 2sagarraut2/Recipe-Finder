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
import { NavLink } from "react-router-dom";

const RecipeCard = ({ recipesData }) => {
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
    <NavLink key={id} className="no_underline" to={`/recipe/${id}`}>
      <article className="bg-white shadow-sm rounded-lg overflow-hidden transition hover:shadow-md">
        <figure className="w-full h-[200px] overflow-hidden">
          <img
            src={image}
            alt={`Recipe: ${name}`}
            className="w-full h-[120%] block object-cover"
            loading="lazy"
          />
        </figure>

        <section className="p-4 flex flex-col gap-1">
          <header>
            <h2 className="truncate font-bold text-[20px]">{name}</h2>
            <p className="truncate text-gray-700">{cuisine}</p>
          </header>

          <ul className="list-none p-0 m-0 text-gray-500 space-y-1">
            <li className="flex items-center truncate">
              <FaBowlFood className="mr-1" />
              {CALORIES} {caloriesPerServing}
            </li>
            <li className="flex items-center truncate">
              <MdOutlineAccessTimeFilled className="mr-1" />
              {COOKING_TIME} {cookTimeMinutes} {MINS}
            </li>
            <li className="flex items-center truncate">
              <PiChefHatFill className="mr-1" />
              Difficulty: {difficulty}
            </li>
            <li className="flex items-center truncate">
              <FaStar className="mr-1" />
              {RATINGS} {rating}
            </li>
            <li className="flex items-center truncate">
              <BiSolidDish className="mr-1" />
              {SERVINGS} {servings} {PERSONS}
            </li>
          </ul>
        </section>
      </article>
    </NavLink>
  );
};

export default RecipeCard;
