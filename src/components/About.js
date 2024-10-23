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
    <div class="aboutContainer">
      <div className="container mt-5 py-2">
           <div className="row">
          <div className="col">
            <Navbar/>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <h4 className='text-center'>About</h4>
          </div>
        </div>
       
        <div className="row text-center">
                  <div class="col-sm-12 col-md-6 col-lg-4 text-center"><p><span className='me-2'><SchoolIcon/></span> <strong>Education:</strong> Bachelors in Computer Application from Delhi, India. P.G. diploma in Cyber Security from Lambton College in Mississauga.</p></div>
                  <div class="col-sm-12 col-md-6 col-lg-4"><p><span className='me-2'><BallotIcon/></span> <strong>Experience:</strong> Technical support associate with Bell Canada as my Former Employer.</p></div>
                  <div class="col-sm-12 col-md-6 col-lg-4"><p> <span className='me-2'><CasinoIcon/></span> <strong>Hobbies:</strong> Reading books and playing chess.</p></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h4>Certifications/Licences</h4>
          </div>
        </div>



  

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <p>Creating a Responsive Web Design --Linkedin</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <p>Creating a Responsive Web Design: Advanced Techniques --Linkedin</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <p>React creating and hosting full stack site --Linkedin</p>
          </div>
           <div className="col-lg-4 col-md-6 col-sm-12">
            <p>Responsive Web Design --FreeCodeCamp</p>
          </div>
        </div>
      </div>

     
    </div>
  )
}
