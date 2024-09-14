import React from 'react';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../App.css';


export default function Skills() {
  return (
    <div>
      <div className="container mt-4 "
      style={{width:"75vw", 
            maxWidth:"950px",
        transform: "skew(-6deg)",
        boxShadow:"0px 0px 15px 10px #19A7CE" ,

        zIndex:"10",
        borderRadius:"25px",
        backgroundColor:"#2D2727",
        color:"#fff",
        }}>
        
        <div className="row">
          <div className="col">
            <Navbar/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 className='text-center' style={{color:"#19A7CE"}}>Skills</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-4 ">
            <h6 className=' text-center'>HTML5</h6>
          </div>
          <div className="col-4 ">
            <h6 className=' text-center'>CSS3</h6> 
          </div>
          <div className="col-4 ">
            <h6 className=' text-center'>Javascript</h6>   
          </div>
        </div>
        
        <div className="row">
          <div className="col-4">
            <h6 className=' text-center'>Bootstrap</h6>
          </div>
          <div className="col-4 ">
            <h6 className=' text-center'>React</h6> 
          </div>
          <div className="col-4 ">
            <h6 className=' text-center'>TypeScript</h6>   
          </div>
        </div>
        <div className="row">
          <div className="col-4">
              <h6 className=' text-center'>JQuery</h6>   
          </div>
          <div className="col-4">
              <h6 className=' text-center'>Git</h6>   
          </div>
           <div className="col-4">
              <h6 className=' text-center'>Linux</h6>   
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <p className='text-center py-1' style={{fontSize:"0.2rem"}}>Currently Learning Nodejs, Express and Mongoose, to get backend development knowledge.</p> 
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 className='text-center' style={{color:"#19A7CE"}}>Professional Development</h6>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <p className="mx-3 fw-bold">I have used the following resources to gain technical skills.</p>
            <ul className='justify-self-center' style={{fontSize:"0.1rem"}}>
              <li>The Complete 2024 Web Development Bootcamp from Udemy</li>
              <li>100 Days of Code: The Complete Python Pro Bootcamp from Udemy</li>
              <li>React JS Frontend Web Development for Beginners from Udemy</li>
              <li>Python Masterclass: Learn By Building 15 Projects & ChatGPT from Udemy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
