import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="navBar">
      <ul>
        <li><Link to="/home">Home</Link></li>
      </ul>
    </nav>
  )
}