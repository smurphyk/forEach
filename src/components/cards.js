import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import '../styles/cards.scss';

const Cards = () => {
  return (
    <Container id="cards" fluid>
      <Row className="card__grid">
        <Col className="card__columns">
          <Card className="concept__card">
            <Card.Body className="card__content">
              <Card.Title className="card__title">
                <h1>Concept Title</h1>
              </Card.Title>
              <Card.Text className="card__definition">
                Definition:
                {/* Import definition from JSON file */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Cards