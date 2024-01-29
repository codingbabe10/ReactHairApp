import { useState } from 'react'

import Container from 'react-bootstrap/Container'

export default function landingpagetext() {
    
    const [ performingStudent, setPerformingStudent ] = useState('')

    const students = [
        'parker',
        'zakaria',
        'justin',
        'mike',
        'catrina',
        'cameron',
        'emiliano', 
        'johnny'
    ]
    
    function randomStudent(){
        setPerformingStudent( students[Math.floor(Math.random() * students.length)] )
    }

  return (
    <Container>
        <h3></h3>
        <p>Good Hair Day is a subscription service that offers members hair services by talented, highly rated stylists each month for a fixed predictable price and offers a host of other benefits.  Good Hair Day aims for its members to have a first class haircare experience each month, and we are honored to be trusted with scheduling you with vetted, talented, and experienced stylists. {performingStudent}</p>
        <h3 onClick={randomStudent}>Best in class hair care</h3>
    </Container>
  )

}