import './RecipeDetails.scss';

const RecipeDetails = ({ recipes, id }) => {
  let selectedRecipe = recipes.find((recipe) => {
    console.log('deets', id)
    if (recipe.name === id) {  
      return recipe
    }
  })
  let key = 1
  let recipeIngredients = selectedRecipe.ingredients.map(ingredient => <li key={key++}>{ingredient}</li>);
  let recipeInstructions = selectedRecipe.instructions.map(instruction => <li key={key++}>{ instruction }</li>);
  return (
    <section className='recipe-details'>
      <h2>{ selectedRecipe.name }</h2>
      <img className='recipe-large' src={ selectedRecipe.image } alt={selectedRecipe.name}></img>
      <h3>Ingredients</h3>
      <ul>
        { recipeIngredients }
      </ul>
      <h3>Instructions</h3>
      <ol>
        { recipeInstructions }
      </ol>
    </section>
  )
};

export default RecipeDetails;