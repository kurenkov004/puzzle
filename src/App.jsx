import Board from './components/Board';
import { observe } from './components/Game';
import './App.css';

function App() {
  
  return (
    <div className="App">
        <Board knightPosition={[0, 0]} />
    </div>
  );
}

export default App;
