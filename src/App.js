import { useEffect, useState } from 'react'
import './App.scss';
// import { fetchApi } from './apiCalls'
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import RecipeDisplay from './Components/RecipeDisplay/RecipeDisplay.js';
import RecipeDetails from './Components/RecipeDetails/RecipeDetails.js';
import { recipeData } from './assets/sampleData';


const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    //   fetchApi()
    //     .then((data) => setRecipes(data))
    setRecipes([...recipeData])
    console.log('here', recipes)
  }, [])

  const filterRecipes = (inputValue) => {
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(inputValue.toLowerCase()))
  }

  return (
    <Switch>
      <Route path='/'>
        <Header />
        <RecipeDisplay recipes={ recipes }/>
      </Route>
      <Route path='/:id'>
        <Header />
        <RecipeDetails />
      </Route>
    </Switch>
  );
};

export default App;
