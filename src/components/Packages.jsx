import React from 'react';
import { Link } from 'react-router-dom';
import PaymentPage from '../components/forms/Payments';
import { useState } from 'react';

import './Packages.css'


  
          export default function Packages({ selectedPackage }) {
    const [packages, setPakages] = useState(['300'])
    
    
  

       

  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error(error, errorInfo);
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
  
      // Return the children of the ErrorBoundary
      return this.props.children;
    }
  }
  







  
  return (

  <div className="Packages">
  <h1>Step 1: Pick Your package or packages.</h1>
  
  <h5></h5>
  <div className="row">
    <div className="col-md-4">
      <div className="card package-item">
        <div className="card-body">
          <h5 className="card-title">Style</h5>
          <p className="card-text">$30 a month</p>
          <div className="button-container"></div>
          <button className="btn btn-pink description-btn">Description</button>
          <button className="btn btn-pink select-btn">Select</button>
          <p className="description" style={{ display: 'none' }}>Description: Go to the salon and get your hair styled in any way that you want on a monthly basis. You can get an up-do done, a Brazilian blow-out, or luscious curls, any style that you fancy. If you would like your hair styled every time you go to the salon along with any other package you select, you can get this package too so that you always leave the salon with your hair styled along with your hair service of choice.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card package-item">
        <div className="card-body">
          <h5 className="card-title">Haircut</h5>
          <p className="card-text">$40 a month</p>
          <div className="button-container"></div>
          <button className="btn btn-pink description-btn">Description</button>
          <button className="btn btn-pink select-btn">Select</button>
          <p className="description" style={{ display: 'none' }}>Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
          </div>
        </div>
        </div>
      <div className="col-md-4">
        <div className="card package-item">
          <div className="card-body">
             <h5 className="card-title">Haircolor</h5>
            <p className="card-text">$65 a month</p>
            <button className="btn btn-pink description-btn">Description</button>
            <button className="btn btn-pink select-btn">Select</button>
            <p className="description" style={{ display: 'none' }}>Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
            </div>
        </div>
    </div>
       <div className="col-md-4">
            <div className="card package-item">
                <div className="card-body">
                    <h5 className="card-title">Highlights</h5>
                    <p className="card-text">$80 a month</p>
                    <button className="btn btn-pink description-btn">Description</button>
                   <button className="btn btn-pink select-btn">Select</button>
                   <p className="description" style={{ display: 'none' }}>Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                   </div>
                  </div>
               </div>
                   <div className="col-md-4">
                       <div className="card package-item">
                           <div className="card-body">
                               <h5 className="card-title">Bayalage</h5>
                               <p className="card-text">$100 a month</p>
                               <button className="btn btn-pink description-btn">Description</button>
                              <button className="btn btn-pink select-btn">Select</button>
                                <p className="description" style={{ display: 'none' }}>Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                                </div>
                       </div>
                   </div>
                       <div className="col-md-4">
                           <div className="card package-item">
                               <div className="card-body">
                                   <h5 className="card-title">Haircut and Haircolor</h5>
                                   <p className="card-text">$100 a month</p>
                                   <button className="btn btn-pink description-btn">Description</button>
                   <button className="btn btn-pink select-btn">Select</button>
                   <p className="description" style={{ display: 'none' }}>Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                   </div>
                           </div>
                       </div>
                           <div className="col-md-4">
                               <div className="card package-item">
                                   <div className="card-body">
                                      <h5 className="card-title">Haircut and Highlights</h5>
                                       <p className="card-text">$115 a month</p>
                                       <button className="btn btn-pink description-btn">Description</button>
                   <button class="btn btn-pink select-btn">Select</button>
                   <p className="description" style={{ display: 'none' }}>Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                   </div>
                               </div>
                           </div>
                               <div className="col-md-4">
                                   <div className="card package-item">
                                       <div className="card-body">
                                           <h5 className="card-title">Haircut and Bayalage</h5>
                                           <p className="card-text">$120 a month</p>
                                           <button className="btn btn-pink description-btn">Description</button>
                   <button className="btn btn-pink select-btn">Select</button>
                   <p className="description" style={{ display: 'none' }}>Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                   </div>
                          </div>
                               </div>
                                   <div className="col-md-4">
                                       <div className="card package-item">
                                           <div className="card-body">
                                               <h5 className="card-title">Hair Extenstions</h5>
                                               <p className="card-text">$200 a month</p>
                                               <button className="btn btn-pink description-btn">Description</button>
                   <button className="btn btn-pink select-btn">Select</button>
                   <p className="description" style={{ display: 'none' }}>Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                   </div>
                        </div>
                              </div>
                                  <div className="col-md-4">
                                          <div className="card package-item">
                                               <div className="card-body">
                                                   <h5 className="card-title">Haircut, Color, Extensions</h5>
                                                   <p className="card-text">$500 a month</p>
                                                   <button className="btn btn-pink description-btn">Description</button>
                   <button className="btn btn-pink select-btn">Select</button>
                   <p className="description" style={{ display: 'none' }}>Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                   <div></div>
                   </div>
                 </div>
            </div>
            <div>
            <h1>Step 2: Click here to <Link to="/payments"><button className="subscribe-button">Subscribe</button></Link></h1>

            <h1>Step 3: Click here to <Link to="/Register"><button className="create-account">Create Account</button></Link></h1>
            <h1>Step 4: Click here to <Link to="/Login"><button className="Login">Login</button> and schedule your hair appointment</Link></h1>
<h5></h5>
<h5></h5>
            </div>
        </div>
      </div>


  );
            }

      