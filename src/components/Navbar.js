import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../App.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isActive,setisActive] =useState(false)

  return (
    <div className='container' >
        <nav class="navbar navbar-expand-lg text-light" >
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto justify-content-around" style={{width:"100%", fontSize:"1rem"}}>
      <li class="nav-item">
        <NavLink to="/" className= {({isActive})=>
                    (isActive ? "nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")
     
        }>Home</NavLink>
      </li>
      <li class="nav-item">
        <NavLink 
        className= {({isActive})=>(isActive?"nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")} to="/about">About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink  className= {({isActive})=>(isActive?"nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")} to="/skills">Skills</NavLink>
      </li>
        <li class="nav-item">
        <NavLink  className= {({isActive})=>(isActive?"nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")}  to="/Projects">Projects</NavLink>
      </li>
        <li class="nav-item" >
        <NavLink  className= {({isActive})=>(isActive?"nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")}  to="/Contact">Contact</NavLink>
      </li>
    </ul>
    
  </div>
</nav>
    </div>
  )
}
