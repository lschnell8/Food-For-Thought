import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ getFilterRecipes }) => {
  const [searchInput, setSearchInput] = useState({});

  const handleChange = (event) => {
    setSearchInput({ ...searchInput, value: event.target.value })
    return getFilterRecipes(event.target.value)
  }

  return (
    <form>
      {console.log('onchange', searchInput)}
      <input type='search' placeholder='Search...' onChange={(event) => handleChange(event) }></input>
    </form>
  )
};

Form.propTypes = {
  getFilterRecipes: PropTypes.func
}

export default Form;