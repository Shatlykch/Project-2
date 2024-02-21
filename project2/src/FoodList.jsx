import React from 'react';

function FoodList({ container }) {
  return (
    <div className='container'>
      {container.map((item, index) => (
        <div key={index}>
          <img src={item.food.image} alt='' />
          <p>{item.food.label}</p>
          <p>{item.food.category}</p>
          <p>{item.food.nutrients['ENERC_KCAL']} kcal</p>
          <p>{item.food.nutrients['FAT']} FAT</p>
        </div>
      ))}
    </div>
  );
}

export default FoodList;
