import logo from './logo.svg';
import './App.css';
import ClickCounter from './Component/ClickCounter';
import HoverCounter from './Component/HoverCounter';

function App() {
  return (
    <div className="App">
	<ClickCounter/>
	<HoverCounter/>
    </div>
  );
}

export default App;
