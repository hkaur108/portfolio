import React, {useState,useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../App.css';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  const [show,setshow] =useState(false)

  const handleToggle =()=>{
    setshow(!show)
  }


  return (
      <nav id='navContainer' className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light" style={{color:"#B5A8D5",fontSize:"1rem"}}>
        <a className="navbar-brand"  href="#"><strong className='name fw-bold'>🐱 PortFolio</strong></a>
        <button className="navbar-toggler" onClick={handleToggle} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span></button>
      
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className= {({isActive})=>(isActive?"nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")} to="/about"><p style={{color:"#B5A8D5", fontSize:"1rem"}}>ℹ️ About</p></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className= {({isActive})=>(isActive?"nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")} to="/skills"><p style={{color:"#B5A8D5", fontSize:"1rem"}}>🛠️ Skills</p></NavLink>
      </li>
        <li className="nav-item">
        <NavLink  href="#proj-sect" className= {({isActive})=>(isActive?"nav-link fw-bold text-info no-underline":"nav-link fw-bold text-light no-underline")} to="/"><p style={{color:"#B5A8D5", fontSize:"1rem"}}>🗃️ Projects</p></NavLink>
      </li>
    </ul>
  </div>
</nav>
  )
}
