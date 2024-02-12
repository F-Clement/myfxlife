import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <Navbar className='styles.NavBar' bg="light" expand="md" fixed='top'>
        <Container>
            <Navbar.Brand>
                <img src={logo} alt='logo' height='45'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                    <Nav.Link><i className='fas fa-home'></i>Home</Nav.Link>
                    <Nav.Link><i class="fa-solid fa-folder-open"></i>Posts</Nav.Link>
                    <Nav.Link><i className='fas fa-sign-in-alt'></i>Login</Nav.Link>
                    <Nav.Link><i class="fa-solid fa-right-from-bracket"></i>Logout</Nav.Link>
                    <Nav.Link><i className='fas fa-user-plus'></i>Signup</Nav.Link>
                    <Nav.Link><i class="fa-regular fa-id-card"></i>Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

  )
}

export default NavBar