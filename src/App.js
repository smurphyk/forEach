import React from 'react';
import { hot } from 'react-hot-loader';
import Container from 'react-bootstrap/Container';

// Component imports
import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import Footer from './components/footer';

import './styles/App.css';

const App = () => (
  <Container className="App">
    <Header />
    <React.StrictMode>
      <Banner />
      <About />
    </React.StrictMode>
    <Footer />
  </Container>
);

export default hot(module)(App);