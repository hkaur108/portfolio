import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../App.css';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  const [isActive,setisActive] =useState(false);

  useEffect(()=>{
      const handleClick=()=>{
        console.log('I got clicked!')
      }
  },[])

 

  return (
    <div className='container' id="navContainer">
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light" >
        <a className="navbar-brand text-light" href="#"><strong>🐱 PortFolio</strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item">
        <NavLink to="/" className= {({isActive})=>
          (isActive ? "nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")} >🏠 Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
        className= {({isActive})=>(isActive?"nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")} to="/about">ℹ️ About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  className= {({isActive})=>(isActive?"nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")} to="/skills">🛠️ Skills</NavLink>
      </li>
        <li className="nav-item">
        <NavLink  className= {({isActive})=>(isActive?"nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")}  to="/Projects">🗃️ Projects</NavLink>
      </li>
        <li className="nav-item" >
        <NavLink  className= {({isActive})=>(isActive?"nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")}  to="/Contact">📧 Contact</NavLink>
      </li>
    </ul>
    
  </div>
</nav>
    </div>
  )
}
