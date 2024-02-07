// import { Link } from "react-router-dom";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './SecondHome.css';


document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.getElementById("videoPlayer");
    const videos = ["video1.mp4", "video2.mp4", "video3.mp4"]; // List of video sources
    let currentVideo = 0;
  
    function playNextVideo() {
      currentVideo = (currentVideo + 1) % videos.length;
      videoPlayer.src = videos[currentVideo];
      videoPlayer.play();
    }
  
    // Play the next video every 10 seconds (adjust as needed)
    setInterval(playNextVideo, 10000);
  });
  











function secondHome() {
  return (
    <>
      

      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand href="/">
        <h1 className='gotham-bold' style={{ color: "black", marginRight: '100px'}}>Good Hair Day</h1>

     </Navbar.Brand>

     <Nav className="me-auto" >
          <Nav.Link href='/' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>STORE LOCATOR</Nav.Link>
          
          <Nav.Link href='/' style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px'}}>BOOK APPOINTMENT</Nav.Link>

            <Nav.Link href='/'style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px'  }}>REVIEWS</Nav.Link>

            <Nav.Link href='/'style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>CONTACT</Nav.Link>

            <Nav.Link href='/payments'style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>UPDATE SUBSCRIPBTION</Nav.Link>

            <Nav.Link href='/packages'style={{ fontFamily: 'Cormorant Garamond, serif', color: 'black', marginRight: '50px' }}>PACKAGES</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
    <div class="video-container">
    <video id="videoPlayer" autoplay muted loop>
    style={{ position: 'relative', width: '100%', height: 'auto', padding: 0 }}>
    src= "https://vod-progressive.akamaized.net/exp=1707390009~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4710%2F17%2F448550889%2F1969786400.mp4~hmac=d6731e5ae4f7e22e150ef3ed4cfa03542fad42964948ea8cf048bf832d926fe6/vimeo-prod-skyfire-std-us/01/4710/17/448550889/1969786400.mp4?download=1&filename=production_id%3A5120463+%281080p%29.mp4" type="video/mp4" 

    src= "https://vod-progressive.akamaized.net/exp=1707384849~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1883%2F21%2F534417768%2F2525001806.mp4~hmac=0f2f76fa31efae234e1bc93d70d6ca5142b71a0f19e7790f8c244bf19f60d049/vimeo-prod-skyfire-std-us/01/1883/21/534417768/2525001806.mp4?download=1&filename=pexels-cottonbro-7440184+%28360p%29.mp4" type="video/mp4"
    
    src= "https://vod-progressive.akamaized.net/exp=1707390108~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4714%2F17%2F448570341%2F1969891058.mp4~hmac=ab371ff5bcd986da376d232faf150e51fb236da4e448a881f10f82e9bc079e35/vimeo-prod-skyfire-std-us/01/4714/17/448570341/1969891058.mp4?download=1&filename=production_id%3A5120828+%281080p%29.mp4" type="video/mp4"
   
    src= "https://vod-progressive.akamaized.net/exp=1707378284~acl=%2Fvimeo-prod-src-reg-us-east1%2Fvideos%2F2524970851~hmac=6d09d591b1ebcae6daf9bd8664f16002bcd938c7c7adaa571f039e3d7c71a4dc/vimeo-prod-src-reg-us-east1/videos/2524970851?download=1&filename=pexels-cottonbro-7440086+%28Original%29.mp4&source=1" type="video/mp4"

    src=  "https://vod-progressive.akamaized.net/exp=1707383697~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F39%2F16%2F400197170%2F1707609444.mp4~hmac=53d329d557462717e5e818757dc46908f566567e684af2f8c30265d01040de58/vimeo-prod-skyfire-std-us/01/39/16/400197170/1707609444.mp4?download=1&filename=production_id%3A3996898+%28240p%29.mp4" type="video/mp4"
   
    {/* src= "https://www.pexels.com/video/person-blow-drying-a-woman-s-hair-7440184/" type="video/mp4"

    src= "https://www.pexels.com/video/woman-fixing-the-hair-of-her-daughter-6958364/" type="video/mp4"

    src= "https://www.pexels.com/video/video-of-ballerina-doing-pirouette-5051343/" type="video/mp4"

    src= "https://www.pexels.com/video/woman-is-talking-to-hairdresser-7754411/" type="video/Mp4"
    */}

          
    </video>
    <div class="overlay">
      
    </div>
  </div>
  <script src="script.js"></script>

  <div>
<h1>
    Excellent Salons. Superior Service.  Easy, Convenient Booking.  
</h1>

  </div>



</>



  );
}

export default secondHome;