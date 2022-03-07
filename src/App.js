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
  const [error, setError] = useState(0)

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
    // let recipesWithIds = recipeData.map(recipe => {
    //   let index = recipeData.indexOf(recipe);
    //   recipe.id = index
    //   return recipe
    // })
    // setRecipes([...recipesWithIds])
  }, [])

  const getFilterRecipes = (inputValue) => {
    //UPDATE TO FILTER BY INGREDIENTS OR ADD OPTIONS TO SELECT A FILTER BY TYPE AND INCLUDE A NEW FILTER FOR FILTERING BY INGREDIENT OR MAYBE A SELECTOR THAT GIVES YOU PROTEIN OPTIONS TO FILTER BY??
    let filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(inputValue.toLowerCase()))
    setFilteredRecipes([...filteredRecipes])
    if (inputValue && !filteredRecipes.length) {
      setError(`Sorry, there are no recipes matching ${inputValue}`)
    }
  }

  return (
    <main>
      <Header getFilterRecipes={getFilterRecipes} />
      <Switch>
        <Route path='/error'>
          <ErrorDisplay error={error} />
        </Route>
        <Route path='/:id' render={({ match }) => {
          const matchId = parseInt(match.params.id)
          return <RecipeDetails recipes={ recipes } id={ matchId }/>
        } } />
        <Route exact path='/'>
          <RecipeDisplay recipes={recipes} filteredRecipes={filteredRecipes} />
        </Route>
        {/* <Route path='*'> */}

        {/* </Route> */}
      </Switch>
    </main>
  );
};

export default App;


