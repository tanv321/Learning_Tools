import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Exercise1 from './components/hooks/exercise1';

import Exercise2 from './components/hooks/exercise2';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        /* navigate to localhost:3000/hooks/exercise1   */
          <Route path="/hooks/exercise1" element={<Exercise1 />} /> 
          <Route path="/hooks/exercise2" element={<Exercise2/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
