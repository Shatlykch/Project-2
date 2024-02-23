import React, { useState } from 'react';

function Navbar({ categories, nutrients }) {
  const [sortBy, setSortBy] = useState('');

  let sortedCategories = [...categories];
  let sortedNutrients = [...nutrients];

  if (sortBy === 'name') {
    sortedCategories.sort();
    sortedNutrients.sort();
  }

  return (
    
      <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Select Option</option>
              {/* <option value="input"></option> */}
            <option value="input">Sort by nutrients</option>
            <option value="name">Sort by category</option>
        </select>
      </div>
  )
  
}

export default Navbar;
