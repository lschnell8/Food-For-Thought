import './RecipeCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeCard = ({ name, image }) => {
    return (
      <article className='recipe-card'>
        <Link to={`/${ name }`}>
          <img className='image-small' src={ image } alt={ name }/>
        </Link>
        <div className='recipe-title'>
          <h2>{ name }</h2>
        </div>
      </article>
  )
};

RecipeCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  // id: PropTypes.number
}

export default RecipeCard;