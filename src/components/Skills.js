import React from 'react';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../App.css';


export default function Skills() {
  return (
    <div>
      <div className="container mt-5 py-3"
      style={{width:"1200px", 
            maxWidth:"1170px",
        height:"700px", 
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
            <h3 className='text-center fs-1' style={{color:"#19A7CE"}}>Skills</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-4 ">
            <h4 className=' text-center'>HTML5</h4>
          </div>
          <div className="col-4 ">
            <h4 className=' text-center'>CSS3</h4> 
          </div>
          <div className="col-4 ">
            <h4 className=' text-center'>Javascript</h4>   
          </div>
        </div>
        
        <div className="row">
          <div className="col-4">
            <h4 className=' text-center'>Bootstrap</h4>
          </div>
          <div className="col-4 ">
            <h4 className=' text-center'>React</h4> 
          </div>
          <div className="col-4 ">
            <h4 className=' text-center'>TypeScript</h4>   
          </div>
        </div>
        <div className="row">
          <div className="col-4">
              <h4 className=' text-center'>JQuery</h4>   
          </div>
          <div className="col-4">
              <h4 className=' text-center'>Git</h4>   
          </div>
           <div className="col-4">
              <h4 className=' text-center'>Linux</h4>   
          </div>
        </div>
        <div className="row py-1">
          <div className="col">
            <p className='text-center py-1'>Currently Learning Nodejs, Express and Mongoose, to get backend development knowledge.</p> 
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 className='text-center' style={{color:"#19A7CE"}}>Professional Development</h4>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <h5 className="mx-3">I have used the following resources to gain technical skills.</h5>
            <ul className='justify-self-center'>
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
