import React from 'react';
import "./App.css";  
import Carousel from 'react-bootstrap/Carousel' 

const App = () => {

  return(  
    <Carousel>
    <Carousel.Item interval={800}>
      <img
       src="https://mdbootstrap.com/img/new/slides/043.jpg"
       class="d-block w-100"
       alt="..."
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={800}>
      <img
       src="https://mdbootstrap.com/img/new/slides/042.jpg"
       class="d-block w-100"
       alt="..."
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={800}>
      <img
       src="https://mdbootstrap.com/img/new/slides/041.jpg"
       class="d-block w-100"
       alt="..."
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
export default App