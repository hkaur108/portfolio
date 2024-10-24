import React from 'react';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import profilePic from '/Images/profileImage/pro.jpg';
import "../App.css";


export default function Home() {
  return (
        <div className="container" id="homeContainer">
            <div className="row">
                <div className="col">
                    <Navbar/>    
                </div>
            </div>
                    <div class="container" id="homeContainer">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <h1 className="anton-regular text-center header">Hey, I am <span>Harpreet</span>,<br></br> <span className='fs-5'>a <span> <em>Front-end  Developer </em></span></span> </h1>
                            </div>
                        </div>

                        <div className="row py-3">
                            <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                            <p class="text-secondary mx-3 fs-sm-1 fs-md-2 desc">I am a self-motivated front-end developer, who is keen about learning web technologies. I am passionate about learning and always try to better my self at learning with every day passing by. </p>
                        </div>
                        
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                 <div id="imageContainer" className='picture'></div>
                                 <div className="col-lg-5 col-sm-2 col-md-2 my-4  mx-auto fw-bold text-lg-right text-md-center text-sm-center d-flex justify-content-center">
                                <a href="https://github.com/hkaur108?tab=repositories"><GitHubIcon className=' mx-4 justify-self-center'  /></a>
                                <a href='https://www.linkedin.com/in/harpreet-kaur-7544a0300/'><LinkedInIcon className=' mx-4' /></a>
                                </div>
                                 
                        </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 d-flex align-items-center justify-content-center">   
                <a download href='/Resume/Harpreet Kaur (4).pdf'>
                <button type='button'className='btn btn-sm fw-bold'  style={{backgroundColor:"#19A7CE", color:"#000"}}>Download CV</button>
                </a>
            </div>
        </div>

        </div>

        </div>

        

  )
}
