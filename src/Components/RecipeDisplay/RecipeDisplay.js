import './RecipeDisplay.scss';
import RecipeCard from '../RecipeCard/RecipeCard';
import PropTypes from 'prop-types';

const RecipeDisplay = ({ recipes, filteredRecipes }) => {
  let recipesToDisplay;
  filteredRecipes.length > 0 ? recipesToDisplay = filteredRecipes : recipesToDisplay = recipes;
  //If no recipes match the input value, display a message "No matches found." Conditionally render message here based on whether or not the input has a value that isn't ''. Add conditon to getFiltered recipes to return a "No matches found." message if the array is empty.

  let cards = recipesToDisplay.map(recipe => {
    
    return (
      <RecipeCard
        key={recipe.name}
        name={recipe.name}
        image={recipe.image}
      />
    )
  });
  return (
    <section className='recipe-display'>
      {cards}
    </section>
  )
};

RecipeDisplay.propTypes = {
  recipes: PropTypes.array,
  filteredRecipes: PropTypes.array
};

export default RecipeDisplay;