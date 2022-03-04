import './RecipeDisplay.scss';
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipeDisplay = ({ recipes }) => {
  let cards = recipes.map(recipe => {
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
      { cards }
    </section>
  )
}

export default RecipeDisplay;