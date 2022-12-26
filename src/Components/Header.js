import { 
   Container, 
   Nav, 
   Navbar 
} from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import logoBlack from '../assets/logo-black.png';

function Header() {
   const location = useLocation();

  return (
   <Navbar id='streetNavbar' expand="lg">
      <Container>
         <Navbar.Brand href="#home">
         <img
              src={location.pathname === '/' ? logo : logoBlack}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
               <NavLink 
                  to='/' 
                  className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
                  style={{color: `${location.pathname === '/' ? '#fff' : '#000'}`}}
                  end
               >
                  Home
               </NavLink>
               <NavLink 
                  to='/destination' 
                  className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
                  style={{color: `${location.pathname === '/' ? '#fff' : '#000'}`}}
               >
                  Destination
               </NavLink>
               <NavLink 
                  to='/blogs' 
                  className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
                  style={{color: `${location.pathname === '/' ? '#fff' : '#000'}`}}
               >
                  Blogs
               </NavLink>
               <NavLink 
                  to='/contact' 
                  className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
                  style={{color: `${location.pathname === '/' ? '#fff' : '#000'}`}}
               >
                  Contact
               </NavLink>
               <NavLink 
                  to='/login' 
                  className='nav-link streetFood-btn'
               >
                  Login
               </NavLink>
            </Nav>
         </Navbar.Collapse>
      </Container>
   </Navbar>
  )
}

export default Header