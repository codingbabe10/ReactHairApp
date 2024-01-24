import Container from 'react-bootstrap/Container'

import {Reviews} from "./components/Reviews"
import Header from './components/Header'



export default function App() {

  

  return (
    <Container fluid data-bs-theme='dark'className= 'app'>
      <Header />

      <Reviews></Reviews>
      </Container>
  )
}