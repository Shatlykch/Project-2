import React from 'react';
import ItemDetails from './ItemDetailsModal';

function FoodList({ container, handleClick, selectedItem, setSelectedItem  }) {
  return (
    <div className='container'>
      {container.map((item, index) => (
        <div key={index} onClick={() => handleClick(item)}>
          <img src={item.food.image} alt='' />
          <p>{item.food.label}</p>
        </div>
      ))}
      {selectedItem && <ItemDetails item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
}

export default FoodList;



