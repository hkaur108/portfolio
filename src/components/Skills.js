import React from 'react';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../App.css';


export default function Skills() {
  return (
    <div>
      <div className="container"> 
        <div className="row">
          <div className="col">
            <Navbar/>
          </div>
        </div>
            <h2 className='text-center heading'>Skills</h2>
            <p className='text-center my-2'>I am proficient in the following languages:</p>
        <div className="row text-center mx-auto">
          <div className='about-card front-end col-lg-6 col-md-6 col-sm'>
            <h4 className='name fw-bold'>Frontend Technologies</h4>
            <ul className='list-group'>
            <li>HTML5, CSS3, Javascript,</li>
            <li>React, Typescript, JQuery,</li>
            <li>Git and GitHub, SASS </li>
            </ul>
          </div>
          <div className='about-card back-end col-lg-6 col-md-6 col-sm'>
            <h4 className='name fw-bold'>Backend Technologies</h4>
            <ul className='list-group'>
            <li class="">Nodejs, express, ejs</li>
            <li class="">Mongoose, MySql</li>
            <li class="">Restful API</li>
            
            </ul>
          </div>
       
        </div>
  
        {/* <div className="row mx-auto">
          <div className="col py-3">
            <h6 className='text-center heading' style={{color:"#19A7CE"}}>📜 Professional Development</h6>
            <p>I took the following courses from various resources such as Udemy and FreeCodeCamp to build my skills.</p>
          </div>
        </div>
        <div className="row border border-light ">
            <div className="col-lg-6 col-md-6 col-sm about-card border border-light">
              <p className='my-2'>The Complete 2024 Web Development Bootcamp -- Udemy</p>
              <p>React JS Frontend Web Development for Beginners -- Udemy</p>
            </div>
      
            <div className="col-lg-6 col-md-6 col-sm about-card border border-light">
              <p className='my-2'>Resposive Web Design -- FreeCodeCamp</p> 
              <p>Creating Responsive Web Design -- Linkedln</p>
              
            </div>
            
          </div> */}
 
      </div>
    </div>
  )
}
