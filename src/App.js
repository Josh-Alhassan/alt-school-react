import React from 'react';
import './style.css';

function Car({ data }) {
  // const { data.brand, data.color, data.year } = data;
  return (
    <div className="car">
      {data.year}, {data.color}, {data.brand}
    </div>
  );
}

export default function App() {
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
    </div>
  );
}
