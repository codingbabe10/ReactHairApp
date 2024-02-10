import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';



import './Contact.css';



function Contact() {
    // State to manage form data
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    // Handle form field changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
      console.log(formData);
    };
  





return (
    <>
    
    <section className="custom-contact-container"> 
    <div className="custom-mb-4">
    
        
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Us</h2>
        
        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us. Support@GoodHairDay.App
            </p>
    
        <div class="row">
    
           
            <div class="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
    
                   
                    <div class="row">
    
                       
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="name" name="name" class="form-control"/>
                                <label htmlFor="name" className="">Your name</label>
                            </div>
                        </div>
                        
    
                        
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="email" name="email" class="form-control"/>
                                <label for="email" class="">Your email</label>
                            </div>
                        </div>
                    </div>
                       <div class="row">
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                                <input type="text" id="subject" name="subject" class="form-control"/>
                                <label htmlFor="subject" className="">Subject</label>
                            </div>
                        </div>
                    </div>
                   
                    <div class="row">
    
                       
                    <div class="col-md-12">
    <div class="md-form mb-0">
        <textarea id="message" name="message" rows="4" class="form-control"></textarea>
        <label For="message" className="">Message</label>
    </div>
</div>

                </div>
                    
    
                </form>
    
                <div class="text-center text-md-left">
                    <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                </div>
                <div class="status"></div>
            </div>
            
    
          
            <div class="col-md-3 text-center">
                <ul class="list-unstyled mb-0">
                    <li><i class="fas fa-map-marker-alt fa-2x"></i>
                        <p></p>
                    </li>
    
                    <li><i class="fas fa-phone mt-4 fa-2x"></i>
                        <p> </p>
                    </li>
    
                    <li>
                        <i class="fas fa-envelope mt-4 fa-2x"></i>
                        <p></p>
                        </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
            
           
    
        
    
    
   
    

    

    

      

