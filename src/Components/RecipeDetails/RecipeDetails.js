import './RecipeDetails.scss';
// import { Route } from 'react-router-dom'
import PropTypes from 'prop-types';

const RecipeDetails = ({ recipes, name }) => {
  let selectedRecipe = recipes.find((recipe) => recipe.name === name)
  let key = 1;
  let recipeIngredients = selectedRecipe.ingredients.map(ingredient => <li key={key++}>{ingredient}</li>);
  let recipeInstructions = selectedRecipe.instructions.map(instruction => <li key={key++}>{ instruction }</li>);
  return (
    // <Route exact path='/:name'>

      <section className='recipe-details'>
        <div className='title-style'>
          <h2 className='selected-name'>{ selectedRecipe.name }</h2>
          <img className='image-large' src={ selectedRecipe.image } alt={selectedRecipe.name} />
        {/* <div className='ingredients'> */}
          <h3>Ingredients</h3>
          <ul>
            { recipeIngredients }
          </ul>
        {/* </div> */}
        </div>
        <div className='instructions'>
          <h3>Instructions</h3>
          <ol>
            { recipeInstructions }
          </ol>
        </div>
      </section>
    // </Route>
  )
};

RecipeDetails.propTypes = {
  recipes: PropTypes.array,
  name: PropTypes.string
};

export default RecipeDetails;