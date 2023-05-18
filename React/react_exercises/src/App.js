import logo from './logo.svg';
import './App.css';
import Routes from './Routes';

import Exercise1Runner from './Exercise1Runner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          this will be rendered on all exercises so comment it out if you want <code>src/App.js</code> and save to reload.
          <Routes />
        </p>
      </header>
    </div>
  );
}

export default App;
