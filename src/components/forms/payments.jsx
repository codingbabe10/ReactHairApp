// import React from 'react';

// function Payment({ selectedPackagePrice }) {
//   return (
//     <div>
//       <h2>Payment Details</h2>
//       <form>
//         <label>
//           Package Price:
//           <input type="text" value={selectedPackagePrice} readOnly />
//         </label>
//         {/* Other payment form fields */}
//       </form>
//     </div>
//   );
// }






import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {useEffect} from 'react'


import './payment.css'







function PymntForm() {
  const [selectedAmount, setSelectedAmount] = useState(0);

  const handlePackageChange = (event) => {
    const amount = parseInt(event.target.value);
    setSelectedPackage(amount);
  };






  return (
    <>
    <section>
    <div class="container">
      <div class="row justify-content-center align-items-start">
        <div class="col-md-8 offset-md- mb-4">
        <div class="col-md-8 mb-4">
          <div class="card mb-4 h-100">
            <div class="card-header py-3">
              <h5 class="mb-0">Package Selection</h5>
            </div>
            <div class="card-body">
              {/* Add your drop-down menu for package selection here */}
              <select id="packageSelect" className="form-select" onChange={handlePackageChange}>
                <option selected>Select a package</option>
                <option value="30">Style $30 per month</option>
                <option value="40">Haircut $40 per month</option>
                <option value="65">Haircolor $65 per month</option>
                <option value="80">Highlights $80 per month</option>
                <option value="5">Bayalage $100 per month</option>
                <option value="6">Haircut and Color $100 per month</option>
                <option value="7">Haircut and Highlights $115 per month</option>
                <option value="8">Haircut and Bayalage $120 per month</option>
                <option value="9">Hair Extensions $200 per month</option>
                <option value="10">Haircut, Highlights, Bayalage, Color, and Extensions $300 per month</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
         
          <div class="card mb-4 h-100">
            <div class="card-header py">
              <h5 class="mb-0">Billing details</h5>
            </div>
            <div class="card-body">
              <form>
                
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <input type="text" id="form6Example1" class="form-control" />
                      <label class="form-label" for="form6Example1">First name</label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <input type="text" id="form6Example2" class="form-control" />
                      <label class="form-label" for="form6Example2">Last name</label>
                    </div>
                  </div>
                </div>
                
    
                
                <div class="form-outline mb-4">
                  <input type="text" id="form6Example3" class="form-control" />
                  <label class="form-label" for="form6Example3">Address</label>
                </div>
    
                
                <div class="form-outline mb-4">
                  <input type="text" id="form6Example4" class="form-control" />
                  <label class="form-label" for="form6Example4">Phone Number</label>
                </div>
    
                
                <div class="form-outline mb-4">
                  <input type="email" id="form6Example5" class="form-control" />
                  <label class="form-label" for="form6Example5">Email</label>
                </div>
    
                
                <div class="form-outline mb-4">
                  <input type="number" id="form6Example6" class="form-control" />
                  <label class="form-label" for="form6Example6">Message (Optional)</label>
                </div>
    
                <hr class="my-4" />
    
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="checkoutForm1" />
                  <label class="form-check-label" for="checkoutForm1">
                    Shipping address is the same as my billing address
                  </label>
                </div>
    
                <div class="form-check mb-4">
                  <input class="form-check-input" type="checkbox" value="" id="checkoutForm2" checked />
                  <label class="form-check-label" for="checkoutForm2">
                    Save this information for next time
                  </label>
                </div>
    
                <hr class="my-4" />
    
                <h5 class="mb-4">Payment</h5>
    
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm3"
                    checked />
                  <label class="form-check-label" for="checkoutForm3">
                    Credit card
                  </label>
                </div>
    
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm4" />
                  <label class="form-check-label" for="checkoutForm4">
                    Debit card
                  </label>
                </div>
    
                <div class="form-check mb-4">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm5" />
                  <label class="form-check-label" for="checkoutForm5">
                    Paypal
                  </label>
                </div>
    
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <input type="text" id="formNameOnCard" class="form-control" />
                      <label class="form-label" for="formNameOnCard">Name on card</label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <input type="text" id="formCardNumber" class="form-control" />
                      <label class="form-label" for="formCardNumber">Credit card number</label>
                    </div>
                  </div>
                </div>
    
                <div class="row mb-4">
                  <div class="col-3">
                    <div class="form-outline">
                      <input type="text" id="formExpiration" class="form-control" />
                      <label class="form-label" for="formExpiration">Expiration</label>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="form-outline">
                      <input type="text" id="formCVV" class="form-control" />
                      <label class="form-label" for="formCVV">CVV</label>
                    </div>
                  </div>
                </div>
    
                <button class="btn btn-primary btn-lg btn-block" type="submit">
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </div>
    
        <div class="col-md-6 mb-4">
          <div class="card mb-0 h-100">
            <div class="card-header py">
              <h5 class="mb-0">Summary</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>$0.00</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  
                  <span></span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p class="mb-0"></p>
                    </strong>
                  </div>
                  <span><strong>${selectedAmount.toFixed(2)}</strong></span>

                </li>
              </ul>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    <div class="container">
    <div class="row align-items-start">
      <div class="col-md-10 mb-8" h-100>
       
      <div class="row">
       
        <div class="col">
          
        </div>
       
        <div class="col"></div>
      <div class="col-md-10 mb-8">
        
        <div class="container">
        
        </div>
      </div>
    </div>
  </div>
  </div>
      </div>
  
  
    </>
  
    );
}

export default PymntForm;