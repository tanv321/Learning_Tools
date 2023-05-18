import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Exercise1 from './components/hooks/exercise1';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        /* navigate to localhost:3000/hooks/exercise1   */
          <Route path="/hooks/exercise1" element={<Exercise1 />} /> 
          {/* Add more routes for other exercises */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
