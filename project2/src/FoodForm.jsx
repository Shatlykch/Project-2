import React from 'react';

function FoodForm({ query, onChangeHandler, onSubmitHandler }) {
  return (
    <form onSubmit={onSubmitHandler} className='form'>
      <input type='text' value={query} onChange={onChangeHandler} />
      <button type='submit'>submit</button>
    </form>
  );
}

export default FoodForm;
