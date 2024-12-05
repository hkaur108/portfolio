import React from 'react';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../App.css';
import { Project } from '../Data/data';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';




const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 1400, min: 1200 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 900, min: 500 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1
  }
};



export default function Projects() {
  const EachProject= Project.map((item)=>{
        return(      
            <Card key={item.id} style={{ maxWidth: '10em', height:"100%"}} className='p-3 mx-auto mx-1 '>
                  <Card.Img  src={item.img} className='project-image mt-3 mx-auto' alt={item.name}/>
            <Card.Body className='d-flex align-items-center justify-content-between flex-column'>
            <Card.Title className='fs-6 fw-bold card-title'>{item.name}</Card.Title>
            <Button className='text-capitalize text-center text-wrap fs-6 projectViewButton'  href={item.gitLink}>view project</Button>
        </Card.Body>
        </Card>
        
        )
    })
  return (
    <div>
      <div className="container mt-5 mx-auto mb-5" style={{maxWidth:"700px"}}>
          <div className="row mx-auto text-center justify-content-center">
            <div className="vw-100 col-sm-12 mx-auto text-center justify-content-center ">
              <Navbar/>
            </div>
          </div>
        <div className="row p-2">
        <div className="col">
          <h4 className='text-center fs-2'>Projects</h4>
        </div>
        </div>
      
        <div className="row">
          <div className="col text-center mb-5">
          <Carousel responsive={responsive}>
            {EachProject}     
        </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
