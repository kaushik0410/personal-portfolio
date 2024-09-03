import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../assets/1.png';
import LinkedIn from '../assets/Linkedin.png';
import FaceBook from '../assets/Facebook.png';
import InstAgram from '../assets/Instagram.png';
import GitHub from '../assets/Github.png';

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav>
      <div className='user-container'>
        <a href='#home' className='user-logo'>
          <img src={Logo} alt='' /> 
        </a>
        <div className='menu' onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`user-content-container ${menuOpen ? 'show' : ''} `}>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#skill'>Skill</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#project'>Project</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
      <ul className={`user-social-container ${menuOpen ? 'show' : ''} `}>
        <li>
          <a href="https://www.linkedin.com/in/kaushik-bharshing/" target='_blank' rel='noopener noreferrer'><img src={LinkedIn} alt="" /></a>
        </li>
        <li>
          <a href="https://www.facebook.com/kmb7113/" target='_blank' rel='noopener noreferrer'><img src={FaceBook} alt="" /></a>
        </li>
        <li>
          <a href="https://instagram.com" target='_blank' rel='noopener noreferrer'><img src={InstAgram} alt="" /></a>
        </li>
        <li>
          <a href="https://github.com/kaushik0410/" target='_blank' rel='noopener noreferrer'><img src={GitHub} alt="" /></a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;