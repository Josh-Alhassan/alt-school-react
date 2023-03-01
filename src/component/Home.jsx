import React from 'react';
import {Link} from "react-router-dom";


function Home() {
  return (
    <section>
      <h1>Home Page </h1>
      <p>Click the Link below to go to the about page</p>
      <Link to="/About">About Page </Link>
    </section>
  )
}

export default Home;