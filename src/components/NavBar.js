import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="navBar">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </link>

    <div className="topnav" id="myTopnav">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTACT</Link>
      <Link to="/pictures">PICTURES</Link>
      <Link to="/map">MAP</Link>
    </div>


    </nav>
  )
}