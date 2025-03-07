import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './Navbar';
import SchoolIcon from '@mui/icons-material/School';
import BallotIcon from '@mui/icons-material/Ballot';
import CasinoIcon from '@mui/icons-material/Casino';
import '../App.css';

export default function About() {
  return (
    <div class="aboutContainer" >
      <div className="container mt-5 py-2">
           <div className="row">
          <div className="col">
            <Navbar/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 className='text-center fs-2 heading name fw-bold'>About</h4>
          </div>
        </div>
        <div className="row">
          <div class="col-sm-12 col-md-6 col-lg-4"><p className="about-card"><span className='me-2'><SchoolIcon/></span> <strong className='name'>Education:</strong><br/> Bachelors in Computer Application.<br/> P.G. diploma in Cyber Security. </p></div>
          <div class="col-sm-12 col-md-6 col-lg-4"><p className="about-card"><span className='me-2'><BallotIcon/></span> <strong className='name'>Experience:</strong><br/>  Technical support associate with Bell Canada as my Former Employer.</p></div>
          <div class="col-sm-12 col-md-6 col-lg-4"><p className="about-card"> <span className='me-2'><CasinoIcon/></span> <strong className='name'>Hobbies:</strong><br/>  Reading books and playing chess.</p></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h4 className='name fw-bold'>Certifications/Licences</h4>
            <p className='text-left px-0'>I gained the following Certifications from various resources such as Udemy and FreeCodeCamp to build my skills.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <p className="about-card">Creating a Responsive Web Design --<span className='name fst-italic fw-bold'>LinkedIn</span>, <br/> Responsive Web Design -- <span className='name fst-italic fw-bold'>FreeCodeCamp</span> </p>

          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <p className="about-card">Creating a Responsive Web Design: Advanced Techniques -- <span className='name fst-italic fw-bold'>LinkedIn</span></p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <p className="about-card">React creating and hosting full stack site -- <span className='name fst-italic fw-bold'>LinkedIn</span></p>
          </div>
          
        </div>
      </div>

     <div className='w-100 mb-5' style={{height:"100px"}}></div>
    </div>
  )
}
