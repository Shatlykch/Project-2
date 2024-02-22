import React from 'react';

function FoodForm({ query, onChangeHandler, onSubmitHandler }) {
  return (
    <form onSubmit={onSubmitHandler} className='form'>
      <input type='text' value={query} onChange={onChangeHandler} placeholder='Enter calorie range (50-500)'/>
      <button type='submit'>submit</button>
    </form>
  );
}

export default FoodForm;
