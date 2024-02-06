import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

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
    <Container>
       <img 
                         style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                         src="https://images.pexels.com/photos/7195811/pexels-photo-7195811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                         alt="Hair Care Image" 
                     />
      <h3></h3>
      <p>Good Hair Day is a subscription service that offers members hair services each month for a fixed, predictable, price and offers a host of other benefits.  Good Hair Day aims for its members to have a first class haircare experience each month, and we are honored to be trusted with scheduling you with vetted, talented, and experienced stylists.</p>
      <h3>Best in class hair care</h3>
    </Container>
  );
}
