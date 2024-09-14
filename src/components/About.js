import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './Navbar';
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import BallotIcon from '@mui/icons-material/Ballot';
import '../App.css';

export default function About() {
  return (
    <div>
      <div className="container mt-4 py-2"
      style={{width:"75vw", 
            maxWidth:"950px",
        transform: "skew(-5.5deg)",
        boxShadow:"0px 0px 15px 10px #19A7CE" ,
        backgroundColor:"#2D2727",
        color:"#fff",
        zIndex:"10",
        borderRadius:"25px"}}>
           <div className="row">
          <div className="col">
            <Navbar/>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <h3 className='text-center' style={{color:"#19A7CE"}}>About</h3>
          </div>
        </div>
       
        <div className="row ">
            <div className="col  px-5 " > 
              <ul className='list-group aboutlistContainer' style={{backgroundColor:"#2D2727", color:"#fff"}}>
                <li class="list-group-item" style={{backgroundColor:"#2D2727", color:"#fff",  border:"none"}}>
                  <p>  <span className='me-2'><SchoolIcon/></span>I have a degree in Bachelors in Computer Application from Delhi, India. and also have a Post graduation diploma in Cyber Security and computer Forensics from Lambton College in Mississauga.</p></li>
                  <li class="list-group-item" style={{backgroundColor:"#2D2727", color:"#fff",  border:"none"}}>
                
                  <p>   <span className='me-2'><BallotIcon/></span>I have an extensive experience as a Technical support associate with Bell Canada as my Former Employer. The key skills I has learnt through this job is team-work, leadership, due diligence.</p>
                  </li>
                  <li class="list-group-item" style={{backgroundColor:"#2D2727", color:"#fff",  border:"none"}}>
                
                  <p> <span className='me-2'><LibraryBooksIcon/></span>My hobbies are reading books and playing chess.</p></li>
              </ul>
              </div>
        </div>
      </div>
    </div>
  )
}
