import image1 from "./Cb1.png";
import { Navbar, Container, Nav } from "react-bootstrap";

import NavDropdown from "react-bootstrap/NavDropdown";
export const NavBar = () => {
  return (
    <Navbar bg="bright" colour ="white">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={image1}
            alt="Logo"
            width="50"
            height="50"
            />
        </Navbar.Brand>
        <Nav.Link href="https://mobile.twitter.com/cbigdtuw">
          <h5 align = "right"> Celestial Biscuit </h5>
        </Nav.Link>

        <Nav className="me-auto" >
          <NavDropdown
            title="User_Name"
            id="basic-nav-dropdown"
            
          >
            <NavDropdown.Item href="#action/3.1"> Logout </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};