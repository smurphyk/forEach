import React from 'react';
import Container from 'react-bootstrap/Container';

import '../styles/about.scss';

const About = () => {
  return (
    <Container id="about" fluid>
      <h1 className="about__title">Web Development for...well, Everybody</h1>
      <p className="about__description">
        Have you ever been creating an algorithm to concatenate the props from a functional component
        in order to extrapolate the contents of a JSON object, but the static query of the hypotenuse
        had a syntax error?  Yeah, nobody has, so why do all of the "beginner's" guides to web development
        present information in that way?! Not only is web development made up of a stupid number of concepts
        and terms, those concepts and terms are constantly evolving.
        <br></br>
        <br></br>
        Web Dev forEach() is here to help you
        understand the Kool-Aid as you drink it. With step-by-step tutorials and explanations that are presented
        for EVERYONE, we hope to help anybody as crazy as we are to reach their web development goals without
        making them feel like...well, Dummies (please don't sue us). Bottom line, if you want to learn how to
        create a sexy website out of nothing but a computer, an imagination, and a god-like amount of patience,
        let us be your training wheels! We will only demand 10% if your site goes viral!
      </p>
    </Container>
  )
}

export default About