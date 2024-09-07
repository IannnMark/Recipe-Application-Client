import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function RecipeItem({ recipe }) {
  return (
    <div
      className="bg-white shadow-md hover:shadow-lg 
transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]"
    >
      <Link to={`/recipe/${recipe._id}`}>
        <img
          src={recipe.imageUrls[0]}
          alt="recipe cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale
          duration-300"
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="truncate text-lg font-semibold text-slate-900">
            {recipe.title}
          </p>
        </div>
      </Link>
    </div>
  );
}

//Add prop types validation
RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    userRef: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    _id: PropTypes.number.isRequired,
    imageUrls: PropTypes.array.isRequired,
  }).isRequired, //The entire listing is required
};
