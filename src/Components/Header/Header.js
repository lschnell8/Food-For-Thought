import './Header.scss';
import Form from '../Form/Form'
import { Route } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Food For Thought<span> - Eat, Don't Die</span></h1>
      <Route path='/'>
        <Form />
      </Route>
    </header>
  )
};

export default Header;