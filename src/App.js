import './App.css';
import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import V3 from './components/Dashboard/V3/V3';

function App() {


  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path='/v3' element={<V3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
