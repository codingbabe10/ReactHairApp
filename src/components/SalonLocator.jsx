import { Link } from 'react-router-dom';
import { useState } from "react";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import SecondHeader from './SecondHeader';


import './SalonLocator.css'




import React, { useEffect } from 'react';

const SalonLocator = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'javascript';
    script.async = true;
    script.src = ''
    firstScript.parentNode.insertBefore(script, firstScript);
  }, []);

  return (
    <div id='storerocket-widget' style={{ width: '100%' }} data-storerocket-env='p' data-storerocket-id='dQ8dwNPJr1'>
      <p style={{ textAlign: 'center', fontSize: '13px', padding: '10px' }}>
        Store locator is loading from StoreRocket <a target='_blank' href='https://storerocket.io' style={{ fontSize: '13px' }}>Store Locator App</a>..
      </p>
    </div>
  );
};

export default SalonLocator;
