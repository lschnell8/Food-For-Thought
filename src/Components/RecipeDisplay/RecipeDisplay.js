import './RecipeDisplay.scss';
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipeDisplay = (props) => {
  // let cards = props.recipes.map(recipe => <RecipeCard />);
  return (
    // <h2>Cards go here</h2>
    // { cards }
    <section className='recipe-display'>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </section>
  )
}

export default RecipeDisplay;