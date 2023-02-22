import './App.css';
import {greet, dogs, cats, turtles, sum} from './Components'

function App() {
  return (
    <div>
      {greet('Domagoj')}
      I have {dogs} dogs, {cats} cats and {turtles} turtles as my pets.
      <br />
      We are a team of {sum(5, 3, 2)}, and together we fight crime!
    </div>
  );
}

export default App;
