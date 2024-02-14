import { Link } from "react-router-dom";
import { useState } from "react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import SecondHeader from './SecondHeader';

import "./SecondHome.css";











function SecondHome() {

const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <>
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: 1 }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'black' }}>Excellent Salons. Exceptional Service. Easy Scheduling.</h1>
        </div>

<div class="main"> 
<div class="clock"> 
 <div id="center"></div> 
  <div id="time12"></div> 
  <div id="time3"></div> 
  <div id="time6"></div> 
  <div id="time9"></div> 
  
  <div class="switch"> 
  <button id="button"><i class="fa fa-moon-o"></i></button> 
  </div>
  
   <div class="seconds"> 
   <div id="sec"></div> 
   </div> 
   <div class="minutes"> 
   <div id="min"></div> 
   </div> 
   <div class="hour"> 
   <div id="hour"></div> 
   </div> 
   </div> 
   </div> 
   </>
  );
}

      



export default SecondHome;
