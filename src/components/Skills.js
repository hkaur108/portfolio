import React from 'react';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../App.css';


export default function Skills() {
  return (
    <div>
      <div className="container mt-5 mx-auto" id='skillsContainer'>
        
        <div className="row">
          <div className="col">
            <Navbar/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2 className='text-center'>Skills</h2>
          </div>
        </div>
        <div className="row text-center mx-auto">
          <div className="col-lg-4 col-md-3 col-sm-12 ">
          <strong>HTML5</strong>
          </div> 
          <div className="col-lg-4 col-md-3 col-sm-12">
            <strong>CSS3</strong>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-12">
            <strong>Javascript</strong>
          </div>
        </div>
        
        <div className="row text-center mx-auto">
          <div className="col-lg-4 col-md-3 col-sm-12">
            <strong>Bootstrap</strong>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-12">
            <strong>React</strong>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-12">
            <strong>RWD</strong>
          </div>
        </div>
        <div className="row text-center mx-auto">
          <div className="col-lg-4 col-md-3 col-sm-12">
            <strong>JQuery</strong>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-12">
            <strong>Git</strong>
          </div>
           <div className="col-lg-4 col-md-3 col-sm-12">
            <strong>SVG</strong>
          </div>
        </div>
  
        <div className="row">
          <div className="col">
            <h6 className='text-center' style={{color:"#19A7CE"}}>📜 Professional Development</h6>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <div className="col">
              <p>The Complete 2024 Web Development Bootcamp -- Udemy</p>
            </div>
            <div className="col">
              <p>React JS Frontend Web Development for Beginners -- Udemy</p>
            </div>
            <div className="col">
              <p>Resposive Web Design -- FreeCodeCamp</p>
            </div>
            <div className="col2">
              <p>Creating Responsive Web Design -- Linkedln</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
