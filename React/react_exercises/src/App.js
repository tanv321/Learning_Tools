import logo from './logo.svg';
import './App.css';
import Exercise1Runner from './Exercise1Runner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Exercise1Runner />
      </header>
    </div>
  );
}

export default App;
