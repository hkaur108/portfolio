import React from 'react';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../App.css';


export default function Contact() {
  return (
    
        <div className="container mt-5 py-3" 
        style={{
          width:"75vw", 
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
              <div className="col ">
                <p className='text-center py-2 mt-4'>You can contact me using using the email address or you can simply use the following buttons.</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h6 className='text-center' style={{color:"#19A7CE"}}>
                 <span className='text-light'>Email:</span> <a href="mailto:hkaur108@hotmail.com">hkaur108@hotmail.com</a>
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col">
                 <h6 className='text-center' style={{color:"#19A7CE"}}>
                 <span className='text-light'>LinkedIn:</span> <a href="www.linkedin.com/in/harpreet-kaur-7544a0300">www.linkedin.com/in/harpreet-kaur-7544a0300</a>
                </h6>
              </div>
            </div>

          <div className="row py-4 my-2">
            <div className="col-4 d-flex align-items-center justify-content-center">
                <a href="mailto:hkaur108@hotmail.com"><button type="button"  href="mailto:hkaur108@hotmail.com" className='btn btn-sm btn-outline-secondary fw-bold' style={{color:"#19A7CE"}}>Email</button></a>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <a href="https://www.linkedin.com/in/harpreet-kaur-7544a0300/"><button type="button" href="www.linkedin.com/in/harpreet-kaur-7544a0300"  className='btn btn-sm btn-outline-secondary fw-bold' style={{color:"#19A7CE"}}>LinkedIn</button></a>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <a href="https://github.com/hkaur108?tab=repositories">
                <button type="button" href="https://github.com/hkaur108?tab=repositories"  className='btn btn-sm btn-outline-secondary fw-bold' style={{color:"#19A7CE"}}>Github</button></a>
            </div>
          </div>
          
        </div>
  )
}
