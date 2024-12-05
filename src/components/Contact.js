import React from 'react';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
  return (
    
        <div className="container mt-5" style={{maxWidth:"700px", marginBottom:"80px"}}>

            <div className="row">
                <div className="col">
                    <Navbar/>    
                </div>
            </div>
            <div className="row">
              <div className="col">
                <h2 className='text-center'>Contact Details</h2>
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <p className='text-center py-2 mt-4'>You can contact me using the email address or you can simply click on the following links.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm">
                <h6 className='text-center' style={{color:"#19A7CE"}}>
                 <a href="mailto:hkaur108@hotmail.com" className='text-decoration-none'><EmailIcon/> Email</a>
                </h6>
              </div>
              <div className="col-lg-3 col-md-3 col-sm">
                 <h6 className='text-center' style={{color:"#19A7CE"}}>
                 <span className='text-light'></span> <a href="https://www.linkedin.com/in/harpreet-kaur-7544a0300/" className='text-decoration-none'><LinkedInIcon/> LinkedIn</a>
                </h6>
              </div>
              <div className="col-lg-3 col-md-3 col-sm">
                 <h6 className='text-center' style={{color:"#19A7CE"}}>
                 <span className='text-light'></span> <a href="https://github.com/hkaur108?tab=repositories" className='text-decoration-none'><GitHubIcon/>  Github</a>
                </h6>
              </div>
              <div className="col-lg-3 col-md-3 col-sm">
                 <h6 className='text-center' style={{color:"#19A7CE"}}>
                 <span className='text-light'></span> <a href="https://www.frontendmentor.io/home" className='text-decoration-none'>FrontEnd Mentor</a>
                </h6>
              </div>
            </div>
          
        </div>
  )
}
