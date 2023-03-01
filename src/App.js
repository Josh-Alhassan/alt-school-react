import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import './style.css';

export default function App() {
  
  return (
    <section>
      <h1>My App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </section>
  );
}

export default App;