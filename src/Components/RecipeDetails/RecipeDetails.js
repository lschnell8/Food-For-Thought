import './RecipeDetails.scss';
import PropTypes from 'prop-types';
import bookmark from '../../assets/bookmark.png';
import unbookmark from '../../assets/unbookmark.png';

const RecipeDetails = ({ currentRecipe, handleBookMarking }) => {

  console.log('Deets', currentRecipe)
  let key = 1;
  let recipeIngredients = currentRecipe.ingredients.map(ingredient => <li key={ key++ }>{ ingredient }</li>);
  let recipeInstructions = currentRecipe.instructions.map(instruction => <li key={ key++ }>{ instruction }</li>);
  return (
    <section className='recipe-details'>
        <div className='title-style'>
          {currentRecipe.isMarked ? <img className='bookmark' src={ bookmark } alt='filled bookmark' id={ currentRecipe.id } onClick={ () => handleBookMarking(currentRecipe) } /> : <img className='bookmark' src={ unbookmark } alt='unfilled bookmark' onClick={ () => handleBookMarking(currentRecipe) } />}
            <h2 className='selected-name'>{ currentRecipe.name }</h2>
          <img className='image-large' src={ currentRecipe.image } alt={ currentRecipe.name } />
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
  currentRecipe: PropTypes.object,
  handleBookMarking: PropTypes.func
};

export default RecipeDetails;