
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import logo from '../assets/img/hedgehog-white.png';
import linkedinIcon from '../assets/img/nav-icon1.svg';
import githubIcon from '../assets/img/github-mark-white.svg';
import instagramIcon from '../assets/img/nav-icon3.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} width={"30px"} height={"30px"} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#extra" className={activeLink === 'extra' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('extra')}>Doodles</Nav.Link>
            
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/denisa-terchescu-6039641a5/"><img src={linkedinIcon} alt="" /></a>
                <a href="https://github.com/DenisaTerchescu/"><img src={githubIcon} alt="" /></a>
                <a href="https://www.instagram.com/denisa.terchescu/"><img src={instagramIcon} alt="" /></a>
              </div>
            </span>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </Router>
  )
}