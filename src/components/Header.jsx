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
// Header.jsx

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react'; // Import useState hook

import './header.css';

// First header component
function FirstHeader({isLoggedIn}) {
    // if (isLoggedIn) {

    //     return null;
    // }
    
  return (
    <>
      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            <h1 className='gotham-bold' style={{ color: "black", marginRight: '100px'}}>Good Hair Day</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/Packages' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>HOW IT WORKS</Nav.Link>
            <Nav.Link href='/register' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px'}}>SIGN UP</Nav.Link>
            <Nav.Link href='/login' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>LOGIN</Nav.Link>
            <Nav.Link href='/Contact' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>CONTACT</Nav.Link>
            <Nav.Link href='/payments' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>SUBSCRIBE</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

// Second header component
function SecondHeader() {
  return (
    <>
      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            <h1 className='gotham-bold' style={{ color: "black", marginRight: '100px'}}>Good Hair Day</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/SalonLocator' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>STORE LOCATOR</Nav.Link>
            <Nav.Link href='/' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px'}}>MAKE APPOINTMENT</Nav.Link>
            <Nav.Link href='/' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>REVIEWS</Nav.Link>
            <Nav.Link href='/Contact' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>CONTACT</Nav.Link>
            <Nav.Link href='/Payments' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>UPDATE SUBSCRIPTION</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

// Main header component that determines which header to display based on login status
function Header({user}) {
  // Use useState hook to manage login status
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
// return <FirstHeader></FirstHeader>
  // Conditionally render the appropriate header based on login status
  return user.loggedIn ? <SecondHeader /> : <FirstHeader />;
}

export default Header;
