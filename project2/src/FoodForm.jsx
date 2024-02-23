import React from 'react';

function FoodForm({ query, onChangeHandler, onSubmitHandler }) {
  return (
      <form onSubmit={onSubmitHandler} className='form'>
          <h1 className='name'>CalorieWise Selector</h1>
      <input type='text' value={query} onChange={onChangeHandler} placeholder='Enter calorie range (50-500)' className='input'/>
      <button type='submit' className='submit-button'>SUBMIT</button>
    </form>
  );
}

export default FoodForm;
