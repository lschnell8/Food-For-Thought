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
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    //   fetchApi()
    //     .then((data) => setRecipes(data))
    setRecipes([...recipeData])
  }, [])

  const getFilterRecipes = (inputValue) => {
    //UPDATE TO FILTER BY INGREDIENTS OR ADD OPTIONS TO SELECT A FILTER BY TYPE AND INCLUDE A NEW FILTER FOR FILTERING BY INGREDIENT OR MAYBE A SELECTOR THAT GIVES YOU PROTEIN OPTIONS TO FILTER BY??
    let filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(inputValue.toLowerCase()))
    setFilteredRecipes([...filteredRecipes])
  }

  return (
    <main>
      {console.log('appState', filteredRecipes)}
      <Header  getFilterRecipes={ getFilterRecipes } />
      {/* <Switch> */}
        <Route exact path='/'>
          <RecipeDisplay recipes={recipes} filteredRecipes={ filteredRecipes }/>
        </Route>
        <Route path={`/:id`} render={({ match }) => {
          console.log('match', match)
          return (<RecipeDetails recipes={ recipes } id={ match.params.id }/>)
        }} />
      {/* </Switch> */}
    </main>
  );
};

export default App;
