import logo from './logo.svg';
import './App.css';
import Routes from './Routes';

import Exercise1Runner from './Exercise1Runner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <Routes />
        </h1>

        <h1 style={{fontSize:"20px"}}> Check other Exercises </h1>
        <a style = {{color : "orange", fontSize:"15px"}}  href="http://localhost:3000/hooks/exercise1">Exercise 1</a>
        <a style = {{color : "orange", fontSize:"15px" }} href="http://localhost:3000/hooks/exercise2">Exercise 2</a>
        <a style = {{color : "orange", fontSize:"15px" }} href="http://localhost:3000/hooks/exercise3">Exercise 3</a>
        <a style = {{color : "orange", fontSize:"15px" }} href="http://localhost:3000/hooks/exercise4">Exercise 4</a>
      </header>
    </div>
  );
}

export default App;
