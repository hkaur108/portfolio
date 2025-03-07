import React from 'react';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../App.css";
import Projects from './Projects';
import EmailIcon from '@mui/icons-material/Email';


export default function Home() {
  return (
                <section className="container hero-section">
                        <Navbar/>    
                    <div className="row home-section align-items-center justify-content-between">
                        <header className="col-lg-8 col-md-6 col-sm-12">
                            <h1 className="anton-regular header">
                                <div className='name-header text-sm-center text-lg-start text-md-start'>Hey, I am <span className="name">Harpreet</span>, </div>
                            <div className='fs-2 name my-2 text-sm-center text-lg-start text-md-start'>a <em>Front-end </em>  Developer</div> </h1>
                            <div className='w-100 mx-3 icons d-flex align-items-center justify-content-start'>
                                <GitHubIcon  href="https://github.com/hkaur108?tab=repositories" className='name me-2'/>
                                <LinkedInIcon href="https://www.linkedin.com/in/harpreet-kaur-7544a0300/" className='name me-2' />
                                <EmailIcon className='name me-2' href="mailto:hkaur108@hotmail.com"/>
                            </div> 
                            <p className='desc my-4' style={{color:"#B5A8D5"}}>I am a self-motivated front-end developer, who is keen about learning web technologies. I am passionate about learning and always try to better my self at learning with every day passing by, A keen learner and a Coffee Lover ☕.</p>   
                        </header>  
                                <figure className='align-self-center mt-3' style={{width:"330px",height:"360px"}}  id='imageContainer'>
                                    <img width={"100%"} style={{borderRadius:"10px",height:"100%"}} src={process.env.PUBLIC_URL +'/Images/profileImage/pro.jpg'}/>
                                </figure>
                        </div>
                        <div className='project-section' id="proj-sect">
                              <Projects/>
                        </div>
                        <div className='w-100 mb-5' style={{height:"100px"}}></div>
                    </section>
                    )}

                   