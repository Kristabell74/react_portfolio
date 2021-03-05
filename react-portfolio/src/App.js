import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';

class App extends React.Component() {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Kristabell Johnson',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Keep Moving Forward',
        subtitle: 'Oh, the things you can find, if you don’t stay behind. – Dr. Seuss',
        text: 'Checkout my projects below',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Contact Me',
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">

            <NavbarBrand>Kristabell</NavbarBrand>

            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/" > Home</Link>
                <Link className="nav-link" to="/about" > About</Link>
                <Link className="nav-link" to="/contact" > Contact Me</Link>

              </Nav>
            </Navbar.Collapse>

          </Navbar>


        </Container>
      </Router>


    );
  }
}

export default App;
