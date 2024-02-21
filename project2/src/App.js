import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import FoodForm from './FoodForm';
import FoodList from './FoodList';

function App() {
  const [query, setQuery] = useState('');
  const [container, setContainer] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser',
        params: {
          'nutrition-type': 'cooking',
          'category[0]': 'generic-foods',
          'health[0]': 'alcohol-free',
          q: query
        },
        headers: {
          'X-RapidAPI-Key': 'f3eeda3f2dmsh5db5205b6bb11c1p1a3745jsn5ceb9d2b5ae9',
          'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
      };

      try {
    const response = await axios.request(options);
    setContainer(response.data.hints);
   
        setQuery(); 

    console.log('Query after setting:', query);
  } catch (error) {
    console.error(error);
  }
};

    fetchData();
  }, [query]);

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const onSubmitHandler = e => {
  e.preventDefault();
  console.log('Query before setting:', query);
  setQuery(query);
  console.log('Query after setting:', query);
};



  return (
    <div className="App">
      <FoodForm query={query} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
      <FoodList container={container} />
    </div>
  );
}

export default App;
