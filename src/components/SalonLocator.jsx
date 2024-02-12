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









import{
APIProvider,
Map,
AdvancedMarker,
Pin,
InfoWindow,

} from "@vis.gl/react-google-maps";

export default function SalonLocator() {
  // const navigate = useNavigate();

  const [map, setMap] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);
  // const [geoJSONData, setGeoJSONData] = useState(null);





  useEffect(() => {
    

    // return () => {
    //   document.body.removeChild(script);
    // };
    // }, []);


    const onLoadMap = () => {
      const googleMap = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: 52.632469, lng: -1.689423 },
      });
      setMap(googleMap);
    };
  }
  )
  



const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDNtBuIJu4Z64laDumPw_OY9cUDq0K3fLw&libraries=places&callback=onLoadMap`;

script.async = true;
document.body.appendChild(script);




const handleMarkerClick = (event, feature) => {
  const category = feature.getProperty('category');
  const name = feature.getProperty('name');
  const description = feature.getProperty('description');
  const hours = feature.getProperty('hours');
  const phone = feature.getProperty('phone');
  const position = feature.getGeometry().get();
  const content = `
    <h2>${'name'}</h2><><p>${description}</p>
    <p><b>Open:</b> ${hours}<br /><b>Phone:</b> ${phone}</p></>
  `;



infoWindow.setContent(content);
infoWindow.setPosition(position);
infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
infoWindow.open(map);
};
 
const geoJSONData = {
  type: "FeatureCollection",
  features: [
    {
      geometry: {
        type: "Point",
        coordinates: [-0.1428115, 51.5125168],
      },
      type: "Feature",
      properties: {
        category: "patisserie",
        hours: "10am - 6pm",
        description:
          "Modern twists on classic pastries. We're part of a larger chain of patisseries and cafes.",
        name: "Josie's Patisserie Mayfair",
        phone: "+44 20 1234 5678",
        storeid: "01",
      },
    },
    {
      geometry: {
        type: "Point",
        coordinates: [-2.579623, 51.452251],
      },
      type: "Feature",
      properties: {
        category: "patisserie",
        hours: "10am - 6pm",
        description:
          "Come and try our award-winning cakes and pastries. We're part of a larger chain of patisseries and cafes.",
        name: "Josie's Patisserie Bristol",
        phone: "+44 117 121 2121",
        storeid: "02",
      },
    },
    // More feature objects...
  ],
};


  return (
    <div>
      
        <title>Store Locator</title>
        
      

      
{geoJSONData?.features && geoJSONData.features.map((feature, index) => (
  <AdvancedMarker
    key={index}
    latitude={feature.geometry.coordinates[1]}
    longitude={feature.geometry.coordinates[0]}
    onClick={(event) => handleMarkerClick(event, feature)}
  >
    <Pin size={20} />
  </AdvancedMarker>
))}


  
      <body>

        <div>

        <iframe width="600" 
        height="450" 
        style={{border:'0'}}
        loading="lazy" 
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/search?q=YOUR_QUERY_HERE&key=AIzaSyDNtBuIJu4Z64laDumPw_OY9cUDq0K3fLw
        "></iframe>

        </div>



        <div id="map"></div>
  
        <script src="app.js"></script>
        <script async defer src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDNtBuIJu4Z64laDumPw_OY9cUDq0K3fLw&libraries=places&callback=initMap&solution_channel=GMP_codelabs_simplestorelocator_v1_a
`}></script>
      </body>
  
      <div>
      <div id="map"></div>
          
            {/* Render markers from GeoJSON data */}
        {geoJSONData.features.map((feature, index) => (
          <AdvancedMarker
            key={index}
            latitude={feature.geometry.coordinates[1]}
            longitude={feature.geometry.coordinates[0]}
            onClick={(event) => handleMarkerClick(event, feature)}
          >
            <Pin size={20} />
          </AdvancedMarker>
        ))}
      </div>

      {/* Initialize InfoWindow component */}
      {map && (
        <InfoWindow map={map} ref={(infoWindow) => setInfoWindow(infoWindow)} />
      )}
    </div>
  );
}


          




