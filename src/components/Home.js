import React from 'react';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Home() {
  return (
   
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

        <div className="row justify-content-center">
            <div className="col-6 px-2 py-2 mt-2 align-items-center">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class=" anton-regular text-center display-6"
                        >Hey, I am <span style={{color:"#19A7CE"}}>Harpreet</span>,<br></br> <span className='fs-2'>a <span style={{color:"#19A7CE"}}>Web Developer</span></span> </h1>
                        <p class="lead text-light px-3">I am a self-motivated web developer, who is keen about learning web technologies. I am passionate about learning and always try to better my self at learning with every day passing by. </p>
                    </div>
                    </div>
            </div>
            <div className="col-6 px-2 py-5 mt-2 align-items-center " 
            style={{
                backgroundImage:`url("/Images/cute-cat-working-laptop-working-home-freelance-concept-cute-cat-working-laptop-working-home-freelance-concept-281958634.webp")`,
                backgroundPosition:"center",
                backgroundSize:"contain",
                backgroundRepeat:"no-repeat",
                borderRadius:"50%"}}>
                
            {/* <img src="/Images/cute-cat-working-laptop-working-home-freelance-concept-cute-cat-working-laptop-working-home-freelance-concept-281958634.webp" alt="cat image" style={{width:"200px"}} /> */}
            </div>
           </div>
           <div className="row w-50 justify-content-center mb-2">
            <div className="col-6 fw-bold">
                <a href="https://github.com/hkaur108?tab=repositories"><GitHubIcon className='fs-2 mx-3' style={{color:"#19A7CE"}} /></a>
                <a href='https://www.linkedin.com/in/harpreet-kaur-7544a0300/'><LinkedInIcon className='fs-2 mx-3' style={{color:"#19A7CE"}}/></a>
            </div>
           </div>
           <div className="row w-50 justify-content-center">
            <div className="col-6 my-1">
                <a download href='/Resume/Harpreet.docx.pdf'>
                <button type='button'  className='btn btn-lg fw-bold'  style={{backgroundColor:"#19A7CE", color:"#000"}}>Download CV</button>
                </a>
            </div>
           </div>          
        </div>

  )
}
