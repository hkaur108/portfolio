import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import Button from 'react-bootstrap/Button';




export default function Contact() {
  return (
   <>
   <div id="contact" className="contact-container w-100 mx-auto p-3 text-center" >
        <div className="display-6 py-1 my-1 text-center text-decoration-underline">Contact Me</div>
      <div className="contact-wrapper p-5 mx-auto d-flex justify-content-center">

         <div>
            <span><Button href="mailto: hkaur108@gmail.com"><i class="fa-solid fa-envelope"></i></Button></span>
          </div>
        
        
        <div>
            
              <span><Button href="https://github.com/hkaur108"><i class="fa-brands fa-github"></i></Button></span>
        </div>

         <div>
            
           
              <span><Button href="https://www.linkedin.com/in/harpreet-kaur-7544a0300/"><i class="fa-brands fa-linkedin"></i></Button></span>
            {/* <span><a href="#">    <a href="mailto: hkaur108@gmail.com">LinkedIn</a> */}
              {/* </a></span> */}
        </div>
        
         
      </div>
      <Button href="#home" className="m-5 p-2">Back to Top</Button>

      

   </div>

   </>
     

  
  )
}
