import React from 'react'
import { Navbar,Container,Nav,NavDropdown,Form,Button } from 'react-bootstrap'
const Header = () => {
  return (
    <div>
        <Navbar expand="lg fixed-top" className='navbar'>
      <Container className='navbar'>
        <Navbar.Brand href="#" className='brand'><img src='https://cdn-icons-png.flaticon.com/512/4712/4712293.png' width="30" height="30"/>Wonders</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav
            className="ms-auto"
            style={{ maxHeight: '100px' }}
          >
            <Nav.Link href="#action1" className='home mx-3'>Home</Nav.Link>
            <Nav.Link href="#action2" className='mx-3'>About</Nav.Link>
            <NavDropdown title="Places"className='mx-3'id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                Holiday Trips
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                India Trips
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Foreign Trips
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  className='mx-3' href="#">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header