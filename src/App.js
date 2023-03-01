import foodsJSON from "./foods.json";
import './App.css';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { useState } from "react";
import Search from "./components/Search";

function App() {

  const [foods, setFoods] = useState(foodsJSON)

  const addFood = (food) => {
    setFoods([food, ...foods])
  }

  const searchFood = (search) => {
    setFoods(foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase())))
  }

  const deleteHandler = (name) => {
    setFoods(foods.filter(food => food.name !== name))
  }

  return (
    <div className="App">
      <h1 id="h1">Food List</h1>
      <AddFoodForm addFood={addFood} />
      <Search search={searchFood} />
      <div className="flex">
        {foods.map(food => <FoodBox key={food.name} deleteHandler={() => deleteHandler(food.name)} food={food} />)}
      </div>
    </div>
  );
}

export default App;
