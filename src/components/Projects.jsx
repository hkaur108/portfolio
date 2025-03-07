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


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 2000 , min:1200},
    items: 5
  },
  breakpoint:{
    breakpoint: { max: 1200, min: 1100 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1100, min: 992 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 992, min: 768 },
    items: 2
  },
    smallerDevice: {
    breakpoint: { max: 768, min: 600 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1
  }
};

export default function Projects() {
  const EachProject= Project.map((item)=>{
        return(      
            <Card key={item.id} className='mx-auto'>
              <figure className='image-section'>
                    <Card.Img style={{height:"100%"}} src={item.img} alt={item.name}/>
              </figure>
            <Card.Body className='d-flex align-items-center justify-content-between flex-column'>
            <Card.Title className=' text-center fw-bold'>{item.name}</Card.Title>
            <p className="project-description">{item.desc}</p>
            <Button className='text-capitalize text-center text-wrap fs-6 projectViewButton'  href={item.gitLink}>view project</Button>
            <Button className='text-capitalize text-center text-wrap fs-6 projectViewButton'  href={item.sourceCode}>view Code</Button>
        </Card.Body>
        </Card>
        
        )
    })
  return (
      <section className="container w-100" id='projects'>
         <h4 className='text-center fs-1 heading fw-bold name my-4 my-work'>My Work</h4>
          <div className=''>
            <Carousel responsive={responsive} className='mx-auto'>
              {EachProject}
          </Carousel>
          </div>
      </section>
  )
}
