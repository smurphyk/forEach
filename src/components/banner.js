import React from 'react';
import Container from 'react-bootstrap/Container';

import '../styles/banner.scss';

const Banner = () => {
  return (
    <Container id="banner" fluid>
      {/* Eventually want animation here, possibly typewriter */}
      <h1 className="banner__title">
        Web Dev forEach()
      </h1>
    </Container>
  )
}

export default Banner