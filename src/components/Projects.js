import React from 'react';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../App.css';
import { Project } from '../Data/data';



export default function Projects() {
  return (
    <div>
      <div className="container mt-5 py-3"style={{width:"1600px", 
        maxWidth:"1600px",
        transform: "skew(-3deg)",
        boxShadow:"0px 0px 15px 10px #19A7CE" ,
        zIndex:"10",
        borderRadius:"25px",
        backgroundColor:"#2D2727",
        color:"#fff",}}>
          <div className="row">
            <div className="col">
              <Navbar/>
            </div>
          </div>
        <div className="row p-2">
         <div className="col">
          <h3 className='text-center fs-1' style={{color:"#19A7CE"}}>Projects</h3>
         </div>
        </div>
        <div className="row">
            {Project.map((item)=>{
              
              return (
            <div className="col d-flex flex-row align-items-center justify-content-center px-2">
              <div class="card text-center p-2" 
              style={{width:"250px", height:"300px", marginBottom:"30px",
              }} key={item.id}>
                <img class="card-img-top" style={{width:"150px", height:"100px",margin:"auto",borderRadius:"50%"}} src={item.img} alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <a href={item.gitLink} class="btn btn-secondary text-capitalize fw-bold">view project</a>
                </div>
            </div>
                      </div>

            )})}
        </div>
      </div>
    </div>
  )
}
