import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import { Button } from 'reactstrap';

import Footer from './models/Footer';
//import Home from './folio/Home';
//import About from './folio/About';
//import Contact from './folio/Contact';
import './App.css';
import './src/App.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Kristabell Johnson',
      headerLinks: [
        { title: 'Home', path: '/Home' },
        { title: 'About', path: '/About' },
        { title: 'Contact', path: '/Contact' }
      ],
      home: {
        title: "Keep Moving Forward",
        subTitle: "Oh, the things you can find, if you don’t stay behind. Dr. Seuss",
        text: "Checkout my projects below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Contact Information",
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Kristabell Johnson</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/Home" > Home</Link>
                <Link className="nav-link" to="/about" > About</Link>
                <Link className="nav-link" to="/contact" > Contact Me</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/Home" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/About" render={() => <About title={this.state.about.title} />} />
          <Route path="/Contact" render={() => <Contact title={this.state.contact.title} />} />
          <Footer></Footer>
        </Container>
      </Router>


    );
  }
}



export default App;

