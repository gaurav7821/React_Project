import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FoodItem from './components/FoodItem';
import ErrorMessage from './components/ErrorMessage';

function App() {

  let food = ['Dal', 'Green Vegetables', 'Roti', 'Salad', 'Milk'];

  return (
    <> {/* this is fragment tag */}
      <h1 className='food-heading'>Healthy Food</h1>
      <ErrorMessage food={food}/>
      <FoodItem food={food}/>
    </>
  );
}

export default App;
