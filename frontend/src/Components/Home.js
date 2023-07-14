import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img src="https://static.vecteezy.com/system/resources/previews/004/887/057/original/v-letter-logo-with-wings-creative-wing-letter-v-logo-icon-design-vector.jpg" alt="Logo" style={{ marginRight: '10px', width: '50px' }} />
        <h1 style={{ zIndex: '1' }}>Vacation Travels</h1>
      </div>
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/gradient-texture-travel-agency-landing-page_23-2149342695.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>It's time have a crazy vacation</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/736x/9b/4f/53/9b4f530b0353ac0a4af4f1de3eddfa02.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>Grab all our offers and travel around the world</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://themeforest.img.customer.envatousercontent.com/files/236010586/preview.__large_preview.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=3d5f5131e9e05aad1cda8193c0a7e9f1"
            alt="Image 3"
          />
          <Carousel.Caption>
            <h3>Have a safe journey</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

       {/* Footer */}
       <footer className="mt-5">
        <div className="container text-center">
          <p>&copy; 2023 Travel Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
