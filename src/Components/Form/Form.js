import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ getFilterRecipes }) => {
  const [searchInput, setSearchInput] = useState({});
  const [searchSelection, setSearchSelection] = useState('recipe')

  const handleChange = (event) => {
    setSearchInput({ ...searchInput, value: event.target.value })
    console.log(searchSelection)
    return getFilterRecipes(searchSelection, event.target.value)
  }

  const handleSelection = (event) => {
    setSearchSelection(event.target.value)
  }

  return (
    <form>
      <label>Recipe</label>
      <input type='radio' onChange={ (event) => handleSelection(event) } defaultChecked value='recipe' name='search-selection'/>
      <label>Ingredient</label>
      <input type='radio' onChange={ (event) => handleSelection(event) } value='ingredient' name='search-selection'/>
      <input aria-label='search-input' type='search' placeholder='Search...' onChange={ (event) => handleChange(event) }></input>
    </form>
  )
};

Form.propTypes = {
  getFilterRecipes: PropTypes.func
}

export default Form;