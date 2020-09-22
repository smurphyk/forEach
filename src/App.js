import React from 'react';
import { hot } from 'react-hot-loader';
import Container from 'react-bootstrap/Container';

// Component imports
import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import Cards from './components/cards';
import Footer from './components/footer';

import './styles/App.scss';

const App = () => (
  <Container id="App">
    <Header />
    <React.StrictMode>
      <Banner />
      <About />
      <Cards />
    </React.StrictMode>
    <Footer />
  </Container>
);

export default hot(module)(App);