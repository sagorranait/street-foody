import { 
   Container, 
   Nav, 
   Navbar 
} from 'react-bootstrap';
import logo from '../assets/logo.png';

function Header() {
  return (
   <Navbar id='streetNavbar' expand="lg">
      <Container>
         <Navbar.Brand href="#home">
         <img
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#home">About</Nav.Link>
               <Nav.Link href="#home">Destination</Nav.Link>
               <Nav.Link href="#home">Blog</Nav.Link>
               <Nav.Link href="#home">Contact</Nav.Link>
               <Nav.Link href="#home" className='streetFood-btn'>Login</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Container>
   </Navbar>
  )
}

export default Header