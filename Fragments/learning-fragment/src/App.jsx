import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FoodItem from './components/FoodItem';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {

  let [food, setFood] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFood = event.target.value;
      event.target.value = "";
      let newItems = [...food, newFood];
      setFood(newItems);
    }
  }

  return (
    <Container>
      <h1 className='food-heading'>Healthy Food</h1>
      <FoodInput handleKeyDown={handleKeyDown} />
      <ErrorMessage food={food} />
      <FoodItem food={food} />
    </Container>
  );
}

export default App;
