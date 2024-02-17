import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect } from 'react';
import SecondHeader from './SecondHeader';
import ErrorBoundary from './ErrorBoundary';





import './SalonLocator.css'

const SalonLocator = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript'; // corrected type
    script.async = true;
    script.src = 'https://cdn.storerocket.io/js/widget-mb.js'; // added script source
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }, []);


    return (
      <div id='storerocket-widget' style={{width: '100%'}} data-storerocket-env='p' data-storerocket-id='5Z4wZlzpPd'>
        <p style={{textAlign: 'center', fontSize: '13px', padding: '10px'}}>

           {/* <a target='_blank' href='https://storerocket.io' style={{fontSize: '13px'}}>Store Locator App</a>.. */}
           </p>
      </div>
    );
  
}
  
  export default SalonLocator;
  
  