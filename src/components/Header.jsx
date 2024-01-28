import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './header.css';

export default function Header() {
    return (
        <Navbar className="custom-navbar">
        <Container>
        <Navbar.Brand href="/">
        <h1 className="prata-regular" style={{ color: "black" }}>Good Hair Day</h1>
    </Navbar.Brand>
          <Nav.Link href='/register'>HOW IT WORKS</Nav.Link>
          <Link to='/login'>LOGIN</Link>
          <Nav.Link href='/users'>ONE TIME SERVICE</Nav.Link>
          <Nav.Link href='/posts'>CONTACT</Nav.Link>
        </Container>
      </Navbar>
    )}