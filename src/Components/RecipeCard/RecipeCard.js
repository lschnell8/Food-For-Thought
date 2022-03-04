import './RecipeCard.scss';
import anatomicFood from '../../assets/anatomicFood.jpeg'

const RecipeCard = () => {
  let num = 0;
  return (
    <article className='recipe-card'>
      <img className='recipe-small' src={anatomicFood} alt='Recipe Name'></img>
      <h2 className='recipe-title'>Recipe Name{num}</h2>
    </article>
  )
};

export default RecipeCard;