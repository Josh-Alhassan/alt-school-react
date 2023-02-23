import React from 'react';
import './style.css';

function Car({ brand, color }) {
  return (
    <div className="car">
      {brand} {color}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Altschool React Practice!</h1>
      <Car brand="Toyota" color="Silver" />
    </div>
  );
}
