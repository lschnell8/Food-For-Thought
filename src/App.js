import { useEffect, useState } from 'react'
import './App.scss';
import { fetchApi } from './apiCalls'
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import RecipeDisplay from './Components/RecipeDisplay/RecipeDisplay.js';
import RecipeDetails from './Components/RecipeDetails/RecipeDetails.js';


const App = () => {

  const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   fetchApi()
  //     .then((data) => setRecipes(data))
  // })

  const filterRecipes = (inputValue) => {
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(inputValue))
  }

  return (
    <Switch>
      <Route path='/'>
        <Header />
        <RecipeDisplay />
      </Route>
      <Route path='/:id'>
        <Header />
        <RecipeDetails />
      </Route>
    </Switch>
  );
};

export default App;
