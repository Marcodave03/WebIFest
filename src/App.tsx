import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/home';
import Template from './Pages/template';
import Place from './Pages/place';
import Event from './Pages/event';
import Landing from './Pages/landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/place" element={<Place />} />
      </Routes>
    </Router>
  );
}

export default App;


