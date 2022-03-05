import './Header.scss';
import Form from '../Form/Form'
import { Route } from 'react-router-dom';

const Header = ({ filteredRecipes, getFilterRecipes }) => {
  return (
    <header>
      <h1>Food For Thought<span> - Eat, Don't Die</span></h1>
      <Route exact path='/'>
        <Form getFilterRecipes={ getFilterRecipes } filterRecipes={ getFilterRecipes }/>
      </Route>
    </header>
  )
};

export default Header;