import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import { useParams } from 'react-router-dom';

import './SearchAppointment.module.css'

function SearchAppointment () {
// const SearchPage = () => {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = async () => {
    try {
     
     
      const response = await fetch(`/api/search?q=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  // Function to handle click on stylist/salon
  const handleStylistClick = (stylistId) => {
    // Navigate to the booking page with stylistId
    // You can use React Router to navigate
  };

  return (
    <div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: 1 }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'black' }}>SCHEDULE YOUR APPOINTMENT</h1>
        <h5 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Our scheduling team is here to help you schedule your appointment</h5>
        <Card style={{ width: '300px', margin: '5px auto', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px' }}>
          <Card.Body>
            <Card.Title style={{ color: 'white', textAlign: 'center' }}>Email us at: Support@GoodHairDay.App or Call us at (805)757-7506</Card.Title>
            {/* <Link to="/packages" className="btn btn-custom" style={{ backgroundColor: 'gray', bordercolor: 'red' }}>Explore Packages</Link> */}
          </Card.Body>
        </Card>
      </div>
  
      <div className="container">
        <div className="search">
          <div className="row">
            <div className="col-md-6">
              <div className="search-1">
                <i className='bx bx-search-alt'></i>
                <input
                  type="text"
                  placeholder="Search by name, phone number, email, or salon"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <div className="search-2">
                  <i className='bx bxs-map'></i>
                  <input type="text" placeholder="Enter location" />
                  <button onClick={handleSearch}>Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Display search results */}
        <div className="search-results">
          {searchResults.map((result) => (
            <div key={result.id} className="result-item">
              <Link to={`/stylist/${result.id}`} onClick={() => handleStylistClick(result.id)}>
                {result.name}
              </Link>
              <p>{result.address}</p>
              <p>{result.phone}</p>
              <p>{result.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  );}
          

  export default SearchAppointment;