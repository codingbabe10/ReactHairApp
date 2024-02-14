import Container from 'react-bootstrap/Container'

import { Reviews } from "./components/Reviews"
import Review from './components/forms/Review'
import Header from './components/Header'
import SecondHeader from './components/Header'
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
import Payments from './components/forms/Payments'
import HowItWorksPage from './pages/HowItWorksPage'
import PaymentPage from './pages/PaymentPage'
import SecondHome from './components/SecondHome'; 
import SecondHomePage from './pages/SecondHomePage'
import SalonLocator from './components/SalonLocator'
import SalonLocatorPage from './pages/SalonLocatorPage'
import Contact from './components/forms/Contact'
import ContactPage from './pages/ContactPage'
import React, { useState } from 'react';
import MakeAppointment from './components/MakeAppointment'
import MakeAppointmentPage from './pages/MakeAppointmentPage'
import SearchAppointment from './components/SearchAppointment'
import SearchAppointmentPage from './pages/SearchAppointmentPage'











export default function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [user, setUser] = useState({ username: '', password: '' });
  const [cart, setCart] = useState ([])

  const handlePackageSelect = (selectedpackage) => {
    setSelectedPackage(selectedpackage);
  };



//   const packages = [
// {name: 'Style Package', price: 360},
// {name: 'Haircut Package', price: 480},
// {name: 'Haircolor Package', price: 780}

//   ];

function updateUser (user){

  setUser(user)
  
}

//{title: '', price: 0, desc: ''}




  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header user = {user} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<FormPage><Login user={user} updateUser= {updateUser} /></FormPage>} />
        <Route path='/register' element={<formPage><Register/></formPage>} />
        <Route path='/users' element={<socialPage><Users/></socialPage>} />
        <Route path='/reviews' element={<socialPage><Reviews/></socialPage>} />
        <Route path='/packages' element={<HowItWorksPage></HowItWorksPage>} />
        <Route path='/payments' element={<PaymentPage />} />
        <Route path='/secondHome' element={<SecondHomePage><secondHome /></SecondHomePage>} />
        <Route path='/salonlocator' element={<SalonLocatorPage></SalonLocatorPage>} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/makeappointment' element={<MakeAppointmentPage></MakeAppointmentPage>} />
        <Route path='/searchappointment' element={<SearchAppointmentPage></SearchAppointmentPage>} />
      </Routes>

    </Container>
  );

  }