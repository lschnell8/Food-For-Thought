import './Header.scss';
import Form from '../Form/Form';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ getFilterRecipes }) => {
  return (
    <header>
      <section className='logo'>
        <h1>Food For Thought</h1>
        <p> - Eat, Don't Die</p>
      </section>
      <Route exact path='/'>
        <Form getFilterRecipes={ getFilterRecipes } />
      </Route>
      <Route path='/:id'>
        <Link to='/'>
          <button>Back</button>
        </Link>
      </Route>
    </header>
  )
};

Header.propTypes = {
  getFilterRecipes: PropTypes.func
};

export default Header;