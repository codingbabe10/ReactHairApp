import Container from 'react-bootstrap/Container'

import { Reviews } from "./components/Reviews"
import Review from './components/forms/Review'
import Header from './components/Header'
import Body from './components/Body'
import Home from './components/Home'
import Register from './components/forms/Register'
import Users from './components/Users'
import FormPage from './pages/FormPage'
import SocialPage from './pages/SocialPage'
import LandingPage from './pages/LandingPage'
import Login from './components/forms/Login'
import { Route, Routes } from 'react-router-dom'
import Packages from './components/Packages'
import Payment from './components/forms/payment'
import HowItWorksPage from './pages/HowItWorksPage'
import React, { useState } from 'react';

export default function App() {
  const [selectedPackagePrice, setSelectedPackagePrice] = useState(null);


  const handlePackageSelect = (price) => {
    setSelectedPackagePrice(price);
  };



  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<FormPage><Login /></FormPage>} />
        <Route path='/register' element={<formPage><Register/></formPage>} />
        <Route path='/users' element={<socialPage><Users/></socialPage>} />
        <Route path='/reviews' element={<socialPage><Reviews/></socialPage>} />
        <Route path='/packages' element={<HowItWorksPage></HowItWorksPage>} />
        <Route path='/payment' element={<FormPage>Payment</FormPage>} />
        <Route path='/secondHome' element={<FormPage>secondHome</FormPage>} />
      </Routes>

    </Container>
  )
}