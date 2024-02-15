import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import "./Home.css"

export default function () {
  // const [performingStudent, setPerformingStudent] = useState('');
  
  // const students = [
  //   'parker',
  //   'zakaria',
  //   'justin',
  //   'mike',
  //   'catrina',
  //   'cameron',
  //   'emiliano', 
  //   'johnny'
  // ];
  
  // function randomStudent() {
  //   setPerformingStudent(students[Math.floor(Math.random() * students.length)]);
  // }
  
  return (
    <Container style={{ position: 'relative', width: '100%', height: 'auto', padding: 0 }}>
       <img 
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          src="https://images.pexels.com/photos/7195811/pexels-photo-7195811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Hair Care Image" 
          />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: 1 }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'black' }}>AMAZING HAIR AMAZING PRICE</h1>
        <Card style={{ width: '300px', margin: '5px auto', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px' }}>
          <Card.Body>
            <Card.Title style={{ color: 'white', textAlign: 'center' }}>Monthly hair subscriptions starting at $30 per month</Card.Title>
            <Link to="/packages" className="btn btn-custom" style={{ backgroundColor: 'gray', bordercolor: 'red' }}>Explore Packages</Link>
          </Card.Body>
        </Card>
      </div>
    </Container>
    









  );
}



                     
      