import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FoodItem from './components/FoodItem';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

function App() {

  let food = ['Dal', 'Green Vegetables', 'Roti', 'Salad', 'Milk'];

  return (
    <Container>
      <h1 className='food-heading'>Healthy Food</h1>
      <ErrorMessage food={food}/>
      <FoodInput/>
      <FoodItem food={food}/>
    </Container>
  );
}

export default App;
