import './RecipeDisplay.scss';
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipeDisplay = ({recipes, filteredRecipes}) => {
  let recipesToDisplay;
  filteredRecipes.length > 0 ? recipesToDisplay = filteredRecipes : recipesToDisplay = recipes;

  let cards = recipesToDisplay.map(recipe => {
    return (
      <RecipeCard
        key={recipe.name}
        name={recipe.name}
        image={recipe.image}
        id={recipe.name}
      />
    )
  });
  return (
    <section className='recipe-display'>
      { cards }
    </section>
  )
}

export default RecipeDisplay;