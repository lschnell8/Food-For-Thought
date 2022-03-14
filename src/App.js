import { useEffect, useState } from 'react';
import './App.scss';
import { fetchApi } from './apiCalls';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import RecipeDisplay from './Components/RecipeDisplay/RecipeDisplay.js';
import RecipeDetails from './Components/RecipeDetails/RecipeDetails.js';
import ErrorDisplay from './Components/ErrorDisplay/ErrorDisplay.js';
import Dashboard from './Components/Dashboard/Dashboard';
// import { recipeData } from './assets/sampleData';


const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [error, setError] = useState(0);
  const [bookMarkedRecipes, setBookMarkedRecipes] = useState([])

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
            recipe.isMarked = false
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

  const handleBookMarking = (currentRecipe) => {
    let selectedRecipe = recipes.find(recipe => recipe.id === currentRecipe.id)
    if (!selectedRecipe.isMarked && !bookMarkedRecipes.includes(selectedRecipe)) {
      selectedRecipe.isMarked = true
      setBookMarkedRecipes([...bookMarkedRecipes, selectedRecipe])
      return selectedRecipe
    } else if(selectedRecipe.isMarked) {
      selectedRecipe.isMarked = false
      let filteredRecipes = bookMarkedRecipes.filter(recipe => recipe.id !== selectedRecipe.id)
      setBookMarkedRecipes(filteredRecipes)
      return selectedRecipe
    }
  }

  return (
    <main>
      <Header getFilterRecipes={ getFilterRecipes } />
      <Switch>
        <Route exact path='/'>
          <Dashboard bookMarkedRecipes={ bookMarkedRecipes } />
        </Route>
        <Route exact path='/recipes'>
          <RecipeDisplay recipes={ recipes } filteredRecipes={ filteredRecipes } error={ error }/>
        </Route>
        <Route path='/recipe/:id' render={({ match }) => {
          const matchId = parseInt(match.params.id)
          const currentRecipe = getSelectedRecipe(matchId)
          if (!currentRecipe) {
            return 'Loading...'
          }
          return <RecipeDetails currentRecipe={ currentRecipe } handleBookMarking={ (currentRecipe) => handleBookMarking(currentRecipe) } />
        } } />
        <Route path='*'>
          <ErrorDisplay error={ error } />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
