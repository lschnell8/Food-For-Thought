import './Dashboard.scss';
import RecipeCard from '../RecipeCard/RecipeCard';
import PropTypes from 'prop-types';

const Dashboard = ({ bookMarkedRecipes }) => {
  let savedToDash = bookMarkedRecipes.map(recipe => {   
    return (
      <RecipeCard
        key={ recipe.id }
        name={ recipe.name }
        image={ recipe.image }
        id={ recipe.id }
      />
    )
  })
  return (
    <section>
      <aside>
        Search and Filter selections go here
      </aside>
      <article>
        { savedToDash.length ? savedToDash : <p>You don't have any book marked recipes yet</p> }
      </article>

    </section>
  )
};

Dashboard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
  savedRecipes: PropTypes.array
}

export default Dashboard;