import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom'; 
import AttandanceSubmit from './Components/AttandanceSubmit';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<AttandanceSubmit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
