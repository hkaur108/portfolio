import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../App.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';




export default function Navbar() {
  const [isActive,setisActive] =useState(false);

  return (
    <div className='container mx-auto' id="navContainer">
        <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light" >
            <a className="navbar-brand text-light" href="#"><strong>🐱 PortFolio</strong></a>

  <button className="navbar-toggler btn-light clicked" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon text-light"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto ">
      <li class="nav-item">
        <NavLink to="/" className= {({isActive})=>
                    (isActive ? "nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")} >🏠 Home</NavLink>
      </li>
      <li class="nav-item">
        <NavLink 
        className= {({isActive})=>(isActive?"nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")} to="/about">ℹ️ About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink  className= {({isActive})=>(isActive?"nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")} to="/skills">🛠️ Skills</NavLink>
      </li>
        <li class="nav-item">
        <NavLink  className= {({isActive})=>(isActive?"nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")}  to="/Projects">🗃️ Projects</NavLink>
      </li>
        <li class="nav-item" >
        <NavLink  className= {({isActive})=>(isActive?"nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")}  to="/Contact">📧 Contact</NavLink>
      </li>
    </ul>
    
  </div>
</nav>
    </div>
  )
}
