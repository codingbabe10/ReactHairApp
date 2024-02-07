// import { Link } from "react-router-dom";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './header.css';

function secondHome() {
  return (
    <>
      

      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand href="/">
        <h1 className='gotham-bold' style={{ color: "black", marginRight: '100px'}}>Good Hair Day</h1>

     </Navbar.Brand>

     <Nav className="me-auto" >
          <Nav.Link href='/' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>STORE LOCATOR</Nav.Link>
          
          <Nav.Link href='/' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px'}}>BOOK APPOINTMENT</Nav.Link>

            <Nav.Link href='/'style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px'  }}>REVIEWS</Nav.Link>

            <Nav.Link href='/'style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>CONTACT</Nav.Link>

            <Nav.Link href='/payments'style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>UPDATE SUBSCRIPBTION</Nav.Link>

            <Nav.Link href='/packages'style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>PACKAGES</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default secondHome;