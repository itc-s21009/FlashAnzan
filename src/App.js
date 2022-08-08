import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// 1 => 1 ~ 9
// 2 => 10 ~ 99
// 3 => 100 ~ 999
const generateNumber = (digit) => {
  const min = 10 ** (digit - 1)
  const max = (10 ** digit) - 1
  return digit < 1 ? -1 : Math.floor(Math.random() * (max + 1 - min)) + min
}

export default App;
