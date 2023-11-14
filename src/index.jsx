import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Apod from './Pages/Apod/Apod';
import Videos from './Pages/Videos/Videos';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/apod" element={<Apod />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
