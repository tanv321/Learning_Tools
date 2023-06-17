import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Exercise1 from './components/hooks/exercise1';

import Exercise2 from './components/hooks/exercise2';

import Exercise3 from './components/hooks/exercise3';

import Exercise4 from './components/hooks/exercise4';

import Exercise6 from './components/hooks/exercise6';

import Exercise8 from './components/hooks/exercise8';

import Exercise28 from './components/hooks/exercise28';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          /* navigate to localhost:3000/hooks/exercise1   */
          <Route path="/hooks/exercise1" element={<Exercise1 />} /> 
          <Route path="/hooks/exercise2" element={<Exercise2 />} />
          <Route path="/hooks/exercise3" element={<Exercise3 />} />
          <Route path="/hooks/exercise4" element={<Exercise4 />} />
          <Route path="/hooks/exercise6" element={<Exercise6 />} />
          <Route path="/hooks/exercise8" element={<Exercise8 />} />
          <Route path="/hooks/exercise28" element={<Exercise28 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
