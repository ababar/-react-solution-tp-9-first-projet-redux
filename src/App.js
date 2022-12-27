import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Incrementer, Decrementer, Reset } from './Config/action';
function App() {
  const num = useSelector(data => data.num);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>{num}</div>
      <div>
        <button onClick={() => dispatch(Incrementer())}>Incrementer</button>
        <button onClick={() => dispatch(Decrementer())}>Decrementer</button>
        <button onClick={() => dispatch(Reset())}>Reset</button>
      </div>
    </div>
  );
}
export default App;
