import React, { useState, useEffect } from 'react';
import './style.css';

import Content from './Conditional/Content';
import Loader from './Conditional/Loader';

function Car({ data }) {
  // const { data.brand, data.color, data.year } = data;
  return (
    <div className="car">
      {data.year}, {data.color}, {data.brand}
    </div>
  );
}

export default function App() {
  // UseState()
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  // UseEffect
  useEffect(() => {
    // Do Something
    if (count > 0) {
      console.log('Count: ' + count);
    }
  }, [count]);

  // Set time out to simulate data loading...
  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  const cars = [
    {
      brand: 'Ford',
      color: 'Red',
      year: '2020',
    },
    {
      brand: 'Tesla',
      color: 'blue',
      year: '2019',
    },
    {
      brand: 'BMW',
      color: 'black',
      year: '2018',
    },
  ];

  const listOfCars = cars.map((car) => {
    return <Car key={Math.floor(Math.random())} data={car} />;
  });
  return (
    <div>
      <h1>Altschool React Practice!</h1>
      <div> {listOfCars} </div>
      {/* Conditional Rendering */}
      <div className="conditional-rendering">
        {isLoading ? <Loader /> : <Content />}
      </div>

      {/* ReactHooks - UseState */}
      <div>
        <h2> Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}
