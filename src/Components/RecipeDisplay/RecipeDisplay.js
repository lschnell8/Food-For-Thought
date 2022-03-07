import './RecipeDisplay.scss';
import RecipeCard from '../RecipeCard/RecipeCard';
import PropTypes from 'prop-types';

const RecipeDisplay = ({ recipes, filteredRecipes, error }) => {
  let recipesToDisplay;
  // if (filteredRecipes.length > 0) {
  //   recipesToDisplay = filteredRecipes
  // } else if (error)
  filteredRecipes.length > 0 ? recipesToDisplay = filteredRecipes : recipesToDisplay = recipes;
  //If no recipes match the input value, display a message "No matches found." Conditionally render message here based on whether or not the input has a value that isn't ''. Add conditon to getFiltered recipes to return a "No matches found." message if the array is empty.

  let cards = recipesToDisplay.map(recipe => {
    
    return (
      <RecipeCard
        key={recipe.id}
        name={recipe.name}
        image={recipe.image}
        id={recipe.id}
      />
    )
  });
  return (
    <section className='recipe-display'>
      {error ? error : cards}
    </section>
  )
};

RecipeDisplay.propTypes = {
  recipes: PropTypes.array,
  filteredRecipes: PropTypes.array,
  error: PropTypes.string
};

export default RecipeDisplay;