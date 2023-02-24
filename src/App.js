import React, { useState, useEffect, useContext, createContext } from 'react';
import './style.css';

import Content from './Conditional/Content';
import Loader from './Conditional/Loader';

// UseContext
// Create a context for our App
const AuthContext = createContext({
  user: {
    username: "joshua",
    name: "Joshua Abel",
    email: "joshua@gmail.com"
  },
  verified: false,
});

// Define Context
function AuthProvider(props) {
  return (
    <AuthContext.Provider
      value = {
        user= {
          username: "joshua",
          name: "Joshu Abek",
          email: "Joshua@gmail.com",
        }
      }
    >
      {props.children}
    </AuthContext.Provider>
  )
}

function Userbio() {
  return (
    <div>
      <h1>User Bio</h1>
      <div>
        Barrack Obama is the 44th and current President of the United State of America.
      </div>
    </div>
  )
}

function UserProfile () {
  const {user, verified} = useContext(AuthContext);

  return (
    <div>
      <h1> User Profile </h1>
      <div>username: {user.username}</div>
      <div>Name: {user.name}</div>
      <div>Email: {user} </div>
      <div>{verified ? "Yes" : "No"}</div>
      <Userbio />
    </div>
  )
}

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
  const [car, setCar] = useState('Volvo');

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

  const handleCarClick = () => {
    setCar('Honda')
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1)
  }
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
        <button onClick={handleDecrement} >Decrement</button>
        <p>I am a {car}</p>
        <button onClick={handleCarClick} >Change Car</button>
      </div>

      < Userbio />
    </div>
  );
}
