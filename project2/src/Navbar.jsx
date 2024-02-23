import React from 'react';

function Navbar({ categories, selectedCategory, onSelectCategory, nutrients, selectedNutrient, onSelectNutrient }) {
  return (
    <div className="navbar">
      <div className="category-nav">
        {categories.map((category, index) => (
          <button
            key={index}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => onSelectCategory(category)}
          >
                {categories}
          </button>
        ))}
      </div>
      <div className="nutrient-nav">
        {nutrients.map((nutrient, index) => (
          <button
            key={index}
            className={selectedNutrient === nutrient ? 'active' : ''}
            onClick={() => onSelectNutrient(nutrient)}
          >
            {nutrients}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
