import React from 'react';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePic from '../profileImage/1211.jpg';


export default function Home() {
  return (
   
        <div className="container mt-4 py-3" 
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

        <div className="row align-items-center">
            <div className="col-6 px-2 mt-1 ">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class=" anton-regular text-center">
                            Hey, I am <span style={{color:"#19A7CE"}}>Harpreet</span>,<br></br> <span className='fs-5'>a <span style={{color:"#19A7CE"}}>Front-end Developer</span></span> </h3>
                        <p class="text-secondary mx-3">I am a self-motivated front-end developer, who is keen about learning web technologies. I am passionate about learning and always try to better my self at learning with every day passing by. </p>
                    </div>
                    </div>
            </div>
            <div className="col-6 px-2 py-5 mt-2 align-items-center border border-light mx-auto " 
            style={{
                width:"200px",height:"200px",
                backgroundImage:`url(${profilePic})`,
                backgroundPosition:"center",
                backgroundSize:"contain",
                backgroundRepeat:"no-repeat",
                backgroundAttachment:"fixed",
                borderRadius:"50%",
                boxShadow:"0px 0px 15px 5px #19A7CE"}}>
                
            </div>
           </div>
           <div className="row w-50 justify-content-center">
            <div className="col-6 fw-bold">
                <a href="https://github.com/hkaur108?tab=repositories"><GitHubIcon className=' mx-3' style={{color:"#19A7CE"}} /></a>
                <a href='https://www.linkedin.com/in/harpreet-kaur-7544a0300/'><LinkedInIcon className=' mx-3' style={{color:"#19A7CE"}}/></a>
            </div>
           </div>
           <div className="row w-50 justify-content-center">
            <div className="col-6 my-1">
                <a download href='/Resume/Harpreet.docx.pdf'>
                <button type='button'  className='btn btn-sm fw-bold'  style={{backgroundColor:"#19A7CE", color:"#000"}}>Download CV</button>
                </a>
            </div>
           </div>          
        </div>

  )
}
