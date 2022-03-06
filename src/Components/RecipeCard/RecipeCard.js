import './RecipeCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeCard = ({ name, image }) => {
    return (
      <article className='recipe-card'>
        <Link to={`/${ name }`}>
          <img className='image-small' src={ image } alt={ name }/>
        </Link>
        <h2 className='recipe-title'>{ name }</h2>
      </article>
  )
};

RecipeCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  // id: PropTypes.number
}

export default RecipeCard;