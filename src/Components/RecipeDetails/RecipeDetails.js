import './RecipeDetails.scss';
import PropTypes from 'prop-types';

const RecipeDetails = ({ currentRecipe }) => {
  let key = 1;
  let recipeIngredients = currentRecipe.ingredients.map(ingredient => <li key={key++}>{ingredient}</li>);
  let recipeInstructions = currentRecipe.instructions.map(instruction => <li key={key++}>{ instruction }</li>);
  return (
      <section className='recipe-details'>
        <div className='title-style'>
          <h2 className='selected-name'>{ currentRecipe.name }</h2>
          <img className='image-large' src={ currentRecipe.image } alt={currentRecipe.name} />
          <h3>Ingredients</h3>
          <ul>
            { recipeIngredients }
          </ul>
        </div>
        <div className='instructions'>
          <h3>Instructions</h3>
          <ol>
            { recipeInstructions }
          </ol>
        </div>
      </section>
  )
};

RecipeDetails.propTypes = {
  currentRecipe: PropTypes.object
};

export default RecipeDetails;