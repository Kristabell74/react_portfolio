import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './App.css';

import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Kristabell Johnson',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Oh, The Places You\'ll Go',
        subTitle: '-Dr. Suess',
        text: 'Click on the pictures below to see different aspects of my life.'
      },
      about: {
        title: 'Why Fit In When You were Born To Stand Out.',
        subTitle: '-Dr. Suess'
      },
      contact: {
        title: 'Let\'s Communicate!'
      }
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: 'lightBlue' }}>
        <Router>
          <Container class="p-0" fluid={true}>

            <Navbar class="border-bottom" bg="clear" expand="lg">
              <Navbar.Brand>Kristabell Johnson</Navbar.Brand>

              <Navbar.Toggle class="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav class="ml-auto">
                  <Link class="nav-link" to="/">Home</Link>
                  <Link class="nav-link" to="/about">About</Link>
                  <Link class="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
            <Route path="/about" render={() => <About title={this.state.about.title} subTitle={this.state.home.subTitle} />} />
            <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />
            <a href="mailto:abc@example.com">Send Email</a>
            <Footer />

          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
