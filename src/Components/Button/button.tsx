import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'


import Logo from "../../Images/Logo.svg";
import User from "../../Images/user.jpeg";
import { Input } from "../Input/Input";

export default function NavBarExemple() {
  return (
    <Navbar expand="xl">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="Alura Dev" /></Navbar.Brand>
        <Input type="text" placeholder="Busque por aqui" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Image src={User} roundedCircle  className='input-bar'/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}