import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} bg="light" expand="md" fixed='top'>
        <Container>
            <NavLink to="/">
            <Navbar.Brand>
                <img src={logo} alt='logo' height='45'/>
            </Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                    <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
                        <i className='fas fa-home'></i>Home
                    </NavLink>
                    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="posts">
                        <i class="fa-solid fa-folder-open"></i>Posts
                    </NavLink>
                    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="login">
                        <i className='fas fa-sign-in-alt'></i>Login
                    </NavLink>
                    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="logout">
                        <i class="fa-solid fa-right-from-bracket"></i>Logout
                    </NavLink>
                    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="signup">
                        <i className='fas fa-user-plus'></i>Signup
                    </NavLink>
                    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="profile">
                        <i class="fa-regular fa-id-card"></i>Profile
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

  )
}

export default NavBar