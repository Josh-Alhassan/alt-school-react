import React from 'react';
import './style.css';

function Car(props) {
  return (
    <div className="car">
      {props.brand} {props.color}
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
