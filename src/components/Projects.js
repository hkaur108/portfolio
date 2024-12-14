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
    breakpoint: { max: 2000 , min:1200},
    items: 6
  },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 5
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
            <Card key={item.id} style={{ maxWidth: '13em', height:"100%"}} className='p-3 mx-auto mx-1 '>
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
      <div className="container">
          <div className="row mx-auto text-center justify-content-center">
            <div className="vw-100 col-sm-12 mx-auto text-center justify-content-center ">
              <Navbar/>
            </div>
          </div>
        <div className="row p-2">
        <div className="col">
          <h4 className='text-center fs-2 heading'>My Projects</h4>
          <p className='text-center my-4'>Following projects display my work using HTML5,CSS3,Javascript,React and Bootstrap.</p>
        </div>
        </div>
      
        <div className="row card-carousel">
          <div className="col text-center">
          <Carousel responsive={responsive}>
            {EachProject}     
        </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
