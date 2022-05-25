import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';
import { Row, Divider } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchFoods, setSearchFoods] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foodList, newFood];
    setFoodList(updatedFoods);
    setSearchFoods(updatedFoods);
  };

  const deleteFood = (foodName) => {
    const filteredFoods = foodList.filter((food) => {
      return food.name !== foodName;
    });
    setSearchFoods(filteredFoods)
    setFoodList(filteredFoods);
  };


  const searchFilter = (search) => {
    let filteredFoods = foodList.filter((food) =>{
      food.name.toLowerCase().includes(search.toLowerCase())
  });
    setSearchFoods(filteredFoods);
  };

  return (
    <div className="App">
      <h2>Food List</h2>
      {/* <Divider>Food List</Divider> */}
      <AddFood addNewFood = {addNewFood}/>
      <SearchBar searchFilter={searchFilter} />
      {/* <Row style={{ width: '100%', justifyContent: 'center' }}> */}

      {searchFoods.map((element) => {
        return (
          <>
            <FoodBox food={element} clickToDelete={deleteFood}  />
          </>
        );
      })}
      
    </div>
    
  );
}

export default App;