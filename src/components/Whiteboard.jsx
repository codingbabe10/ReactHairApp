import { useState } from 'react'

import Container from 'react-bootstrap/Container'

export default function landingpagetext() {
    
    const [ performingStudent, setPerformingStudent ] = useState('brandt')

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
        <p>Student: {performingStudent}</p>
        <h3 onClick={randomStudent}>Spin The Wheel</h3>
    </Container>
  )

}