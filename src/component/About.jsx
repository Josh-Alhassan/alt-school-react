import React from 'react';
import {Link} from "react-router-dom";

function About() {
  return(
    <section>
      <h1>About Page</h1>
      <p>This is the about page</p>
      <Link to="/"> Home Page </Link>
    </section>
  )
}

export default About;