import './Header.scss';
import Form from '../Form/Form';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ getFilterRecipes }) => {
  return (
    <header>
      <h1>Food For Thought<span> - Eat, Don't Die</span></h1>
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