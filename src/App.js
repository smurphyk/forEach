import React from 'react';
import { hot } from 'react-hot-loader';
import Container from 'react-bootstrap/Container';

//import './App.css';
import Header from './components/header';
import About from './components/about';
import Footer from './components/footer';

const App = () => (
  <Container className="App">
    <Header />
    <React.StrictMode>
      <About />
    </React.StrictMode>
    <Footer />
  </Container>
);

export default hot(module)(App);