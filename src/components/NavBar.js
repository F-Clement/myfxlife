import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import axios from 'axios'
import Avatar from './Avatar'
import useClickOutsideToggle from '../hooks/useClickOutsideToggle'
import Swal from 'sweetalert2'
import { removeTokenTimestamp } from '../utils/utils'


// import ConfirmLogout from './ConfirmLogout'

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const { expanded, setExpanded, ref } = useClickOutsideToggle();


    const addPostIcon = (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/create/post"
        >
            <i className="far fa-plus-square"></i>Add Signal
        </NavLink>
    );
    

    const ConfirmLogout = () => {
        Swal.fire({
            title: "Are you sure you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {handleSignOut()}   
          });
    }

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            
        }
    };


    const loggedInIcons = (
        <>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/posts">
                <i className="fa-solid fa-folder-open"></i>Signals
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/feed">
                <i className="fa-solid fa-list"></i>Feed
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/liked">
                <i className="fa-brands fa-gratipay"></i>Liked Signals
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/drafts">
                <i class="fa-regular fa-note-sticky"></i>Draft
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/info">
                <i class="fa-solid fa-bell"></i>Info
            </NavLink>
            <NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`} >
                <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
            </NavLink>
            <NavLink className={styles.NavLink} to="/" onClick={ConfirmLogout} >
                <i className="fa-solid fa-right-from-bracket"></i>Logout
            </NavLink>

        </>
    );
    const loggedOutIcons = (
        <>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/login">
                <i className='fas fa-sign-in-alt'></i>Login
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup" onClick={handleSignOut}>
                <i className='fas fa-user-plus'></i>Signup
            </NavLink>
        </>
    );


    return (
        <Navbar expanded={expanded} className={styles.NavBar} bg="light" expand="md" fixed='top'>
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt='logo' className={styles.log}/>
                    </Navbar.Brand></NavLink>
                {currentUser && addPostIcon}
                <Navbar.Toggle
                    ref={ref}
                    onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
                            <i className='fas fa-home'></i>Home
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar