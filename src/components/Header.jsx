// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import { Nav } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

// import './header.css';

// export default function Header() {
//     return (
//         <Navbar className="custom-navbar">
//         <Container>
//         <Navbar.Brand href="/">
//         <h1 className='gotham-bold' style={{ color: "black" }}>Good Hair Day</h1>

//     </Navbar.Brand>
//     <Nav className="mr-auto">
//                     <Nav.Link href='/Packages' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black' }}>HOW IT WORKS</Nav.Link>
//                     <Link to='/login' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black' }}>LOGIN</Link>
//                     <Nav.Link href='/register' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black' }}>SIGN UP</Nav.Link>
//                     <Nav.Link href='/posts' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black' }}>CONTACT</Nav.Link>
//                 </Nav>
//             </Container>
//         </Navbar>
//     );
// }
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './header.css';

function ColorSchemesExample() {
  return (
    <>
      

      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand href="/">
        <h1 className='gotham-bold' style={{ color: "black" }}>Good Hair Day</h1>

     </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href='/Packages' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black' }}>HOW IT WORKS</Nav.Link>
          <Nav.Link href='/register' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black' }}>SIGN UP</Nav.Link>
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;