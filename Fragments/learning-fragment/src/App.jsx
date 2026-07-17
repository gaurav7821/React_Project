import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  let food = ['Dal', 'Green Vegetables', 'Roti', 'Salad', 'Milk'];

  return (
    <> {/* this is fragment tag */}
      Healthy Food
      <ul className="list-group">
        {food.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App
