import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import UnivDetails from './components/UnivDetails';

import './assets/item.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />}>
        <Route path=":univName" element={<UnivDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
