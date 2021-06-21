import React from 'react';
import { NavLink } from 'react-router-dom';

//NavBar: Wraps content in a dive with .navbar class 
//Navlinks:
// renders a Home <NavLink>
// renders a Movies <NavLink>
// renders an Actors <NavLink>
// renders a Director <NavLink>

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </div>
  );
};

export default NavBar;
