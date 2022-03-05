import { useState } from 'react';

const Form = ({ getFilterRecipes }) => {
  const [searchInput, setSearchInput] = useState({});

  const handleChange = (event) => {
    setSearchInput({ ...searchInput, value: event.target.value })
    return getFilterRecipes(event.target.value)
  }

  return (
    <form>
      {console.log('onchange', searchInput)}
      <input type='search' onChange={(event) => handleChange(event) }></input>
    </form>
  )
};

export default Form;