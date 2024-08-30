import React, { useEffect, useState } from 'react';
import { Navbar, Container, NavbarBrand, NavbarToggle, NavbarCollapse, Nav, NavLink } from 'react-bootstrap';
import Logo from '../assets/1.png';
import navIcon1 from '../assets/Linkedin.png';
import navIcon2 from '../assets/Facebook.png';
import navIcon3 from '../assets/Instagram.png';
import navIcon4 from '../assets/Github.png';
import './NavBar.css';

function NavBar() {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (window.scrollY > 5) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        window.addEventListener("scroll", onscroll);
        return () => window.addEventListener("scroll", onscroll)
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <div className={scrolled ? "scrolled navbar" : "navbar"}>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">
                        <img src={Logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} href="#home" onClick={() => onUpdateActiveLink('home')}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} href="#skill" onClick={() => onUpdateActiveLink('skill')}>Skill</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} href="#experience" onClick={() => onUpdateActiveLink('experience')}>Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} href="#project" onClick={() => onUpdateActiveLink('project')}>Project</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} href="#contact" onClick={() => onUpdateActiveLink('contact')}>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='social-icons'>
                        <a href="#https://linkedin.com"><img src={navIcon1} alt="" /></a>
                        <a href="#https://facebook.com"><img src={navIcon2} alt="" /></a>
                        <a href="#https://instagram.com"><img src={navIcon3} alt="" /></a>
                        <a href="#https://github.com"><img src={navIcon4} alt="" /></a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
