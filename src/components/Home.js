import React from 'react';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../App.css";


export default function Home() {
  return (
        <div className="container" id="homeContainer" >
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <Navbar/>    
                </div>
            </div>
                <div className="container w-100" id="homeContainer" >
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <h1 className="anton-regular text-center header">
                            Hey, I am <span className="name">Harpreet</span>,<br></br> <span className='fs-5 name'>a <em>Front-end </em> Developer</span> </h1>
                            <p class=" mx-5 my-3 fs-sm-1 fs-md-2 desc">I am a self-motivated front-end developer, who is keen about learning web technologies. I am passionate about learning and always try to better my self at learning with every day passing by. </p>
                        </div>
                            <div className=" mt-5 col-lg-6 col-md-6 col-sm-12 justify-content-center">
                                <div id="imageContainer" className='justify-content-md-center'></div>
                                <div className="col-lg-6 col-sm-2 col-md-2 mt-4 mx-auto fw-bold text-lg-right text-md-center text-sm-center d-flex justify-content-center">
                                <a href="https://github.com/hkaur108?tab=repositories"><GitHubIcon className=' mx-4 justify-self-center heading'  /></a>
                                <a href='https://www.linkedin.com/in/harpreet-kaur-7544a0300/'><LinkedInIcon className=' mx-4 heading' /></a>
                                <a className='text-decoration-none mx-4 heading fs-5' download href='/Resume/fd_.pdf'>CV</a>
                                </div>
                        </div>
                    </div>
                    </div>
                    </div>)}
                     