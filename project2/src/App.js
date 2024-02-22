// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import FoodForm from './FoodForm';
import FoodList from './FoodList';
import ItemDetailsModal from './ItemDetailsModal';

function App() {
  const [query, setQuery] = useState('');
  const [container, setContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser',
      params: {
        'nutrition-type': 'cooking',
        'health[0]': 'alcohol-free',
        'category[0]': 'generic-foods',
        'calories': query || '50-4000',
      },
      headers: {
        'X-RapidAPI-Key': 'f3eeda3f2dmsh5db5205b6bb11c1p1a3745jsn5ceb9d2b5ae9',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setContainer(response.data.hints);
      setQuery('');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  console.log("clicked")};


  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="App">
      <div className='appCSS'>
        
      <FoodForm query={query} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
      <FoodList container={container} handleClick={handleClick} />
        {modalOpen && <ItemDetailsModal item={selectedItem} onClose={closeModal} />}
        
      </div>
      </div>
  );
}

export default App;
