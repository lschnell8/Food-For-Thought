import { useEffect, useState } from 'react';
import './App.scss';
import { fetchApi } from './apiCalls';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import RecipeDisplay from './Components/RecipeDisplay/RecipeDisplay.js';
import RecipeDetails from './Components/RecipeDetails/RecipeDetails.js';
import ErrorDisplay from './Components/ErrorDisplay/ErrorDisplay.js';
// import { recipeData } from './assets/sampleData';


const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [error, setError] = useState(0);

  useEffect(() => {
    fetchApi()
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setError(response.status)
        }
      })
      .then((data) => {
        let recipesWithIds = data.map(recipe => {
          let index = data.indexOf(recipe);
            recipe.id = index
            return recipe
          })
        setRecipes([...recipesWithIds])
      })
  }, [])

  const getFilterRecipes = (inputValue) => {
    let filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(inputValue.toLowerCase()))
    setFilteredRecipes([...filteredRecipes])
  }

  const getSelectedRecipe = (id) => {
    return recipes.find(recipe => recipe.id === id)
    
  }

  return (
    <main>
      <Header getFilterRecipes={getFilterRecipes} />
      <Switch>
        <Route exact path='/'>
          <RecipeDisplay recipes={recipes} filteredRecipes={filteredRecipes} error={error}/>
        </Route>
        <Route path='/recipe/:id' render={({ match }) => {
          const matchId = parseInt(match.params.id)
          const currentRecipe = getSelectedRecipe(matchId)
          if (!currentRecipe) {
            return 'Loading...'
          }
          return <RecipeDetails currentRecipe={currentRecipe} />
        } } />
        <Route path='*'>
          <ErrorDisplay error={error} />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
