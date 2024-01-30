import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'

export default function Sidebar() {
  return (
    <Navbar sticky='top' className='flex-column sidebar'>
        <Nav.Item>
            <Nav.Link as={ NavLink} to='/'>Package Options</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={ NavLink} to='/'>Subscription</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={ NavLink} to='/'></Nav.Link>
        </Nav.Item>
    </Navbar>
  )
}