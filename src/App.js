import React from 'react';
import './style.css';

function Car({ data }) {
  return (
    <div className="car">
      {data.brand}, {data.color}, {data.year}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Altschool React Practice!</h1>
      <Car data= {{
        brand: "Ford",
        color: "Red",
        year: "2020"
      }} />
    </div>
  );
}
