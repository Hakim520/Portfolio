import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

export const NavBar = () => {

const [activeLink, setActiveLink] = useState('about');
const [scrolled, setScrolled]=useState(false);

useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 750){
            setScrolled(true);
        } else {

            setScrolled(false);
        }
    }

    window.addEventListener("scroll", onScroll);

    return () => {
        window.removeEventListener("scroll", onScroll);
    };

}, []);

const onUpdateActiveLink =(page) => {

    setActiveLink(page);

}

return (


    <Navbar  expand="lg" className={scrolled ? "scrolled" : ""} >
        <Container>
          <Navbar.Brand href="#home">Hakim KADEM.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
 
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'about' ? 'active navbar-link' : "navbar-link"} onClick={()=>onUpdateActiveLink('about')}>About</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'technologies' ? 'active navbar-link' : "navbar-link" }  onClick={()=>onUpdateActiveLink('technologies')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"}  onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#connect" className={activeLink === 'contact' ? 'active navbar-link' : "navbar-link"}  onClick={()=>onUpdateActiveLink('contact')}>Contact </Nav.Link>
            </Nav>


          </Navbar.Collapse>
          
          
        </Container>
      </Navbar>




)





// useeffect : useEffect (()=>{},[])

}