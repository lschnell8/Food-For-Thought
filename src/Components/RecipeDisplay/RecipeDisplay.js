import './RecipeDisplay.scss';
import RecipeCard from '../RecipeCard/RecipeCard';
import PropTypes from 'prop-types';

const RecipeDisplay = ({ recipes, filteredRecipes }) => {
  let recipesToDisplay;
  filteredRecipes.length ? recipesToDisplay = filteredRecipes : recipesToDisplay = recipes;

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
      {cards}
    </section>
  )
};

export default RecipeDisplay;

RecipeDisplay.propTypes = {
  recipes: PropTypes.array,
  filteredRecipes: PropTypes.array,
};