import React from 'react';
import Container from 'react-bootstrap/Container';

const About = () => {
  return (
    <Container id="about">
      <h1 className="about__title">Web Development for...well, Everybody</h1>
      <p className="about__description">
        {/* -Explain what makes this different 
            -Delivery
            -Cool
            -People just like you made it */}
      </p>
    </Container>
  )
}

export default About