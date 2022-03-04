import { useState } from 'react';

const Form = () => {
  const [searchInput, setSearchInput] = useState({});

  const handleChange = (event) => {
    setSearchInput({ ...searchInput, value: event.target.value })
    
  }

  return (
    <form>
      <input type='search' onChange={(event) => handleChange(event) }></input>
      <button type='submit'>Clear</button>
    </form>
  )
};

export default Form;