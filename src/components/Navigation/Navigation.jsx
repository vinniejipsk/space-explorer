import React from 'react';
import { Link } from 'react-router-dom';

import "./Navigation.css";

function Navigation() {

  return (
    <div className="navigation">
        <Link to="/home">Home</Link>
        <Link to="/apod">Astronomy of the Day</Link>
        <Link to="/videos">Videos</Link>
    </div>
  );
}

export default Navigation;
