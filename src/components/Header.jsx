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
    <Nav className="mr-auto">
                    <Nav.Link href='/register' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black' }}>HOW IT WORKS</Nav.Link>
                    <Link to='/login' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black' }}>LOGIN</Link>
                    <Nav.Link href='/users' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black' }}>ONE TIME SERVICE</Nav.Link>
                    <Nav.Link href='/posts' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black' }}>CONTACT</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
