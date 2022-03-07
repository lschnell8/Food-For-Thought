import './RecipeCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeCard = ({ name, image, id}) => {
    return (
      <Link to={`/recipe/${ id }`}>
        <article className='recipe-card'>
            <img className='image-small' role='link' src={image} alt={`link to ${ name } details`}/>
          <div className='recipe-title'>
            <h2>{ name }</h2>
          </div>
        </article>
      </Link>
  )
};

RecipeCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
}

export default RecipeCard;