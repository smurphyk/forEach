import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import '../styles/cards.scss';

const Cards = () => {
  return (
    <Container id="cards" fluid>
      <Row className="card__grid">
        <Col className="card__columns">
          <Card className="concept__card">
            <Card.Body className="card__content">
              <Card.Title className="card__title">
                <h1>Markup Language</h1>
              </Card.Title>
              <br></br>
              <ListGroup variant="flush">
                <ListGroup.Item className="card__definition"><span className="card__definition-label">Definition:</span>
                  <br></br>
                  <p className="card__definition-text">
                    A markup language is a computer language that uses tags to define elements within a document. It is human-readable,
                    meaning markup files contain standard words, rather than typical programming syntax. While several markup languages
                    exist, the two most popular markup languages are HTML and XML.
                  </p>
                </ListGroup.Item>

                {/* Eventually make a 'flipping' transition to 'back' of card for translation */}

                <ListGroup.Item className="card__translation"><span className="card__translation-label">Translation:</span>
                  <br></br>
                  <p className="card__translation-text">
                    Markup languages create a bridge between humans and computers by allowing humans to use language they understand to
                    tell computers/browsers what to display.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="card__related-concepts"><span className="card__related-label">Related Concepts:</span>
                  <ul className="related__concepts">

                    {/* Eventually make these links to other cards */}

                    <li className="related__concepts-item">HTML</li>
                    <li className="related__concepts-item">Tags</li>
                    <li className="related__concepts-item">Attributes</li>
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card className="concept__card">
            <Card.Body className="card__content">
              <Card.Title className="card__title">
                <h1>HTML</h1>
              </Card.Title>
              <br></br>
              <ListGroup variant="flush">
                <ListGroup.Item className="card__definition"><span className="card__definition-label">Definition:</span>
                  <br></br>
                  <p className="card__definition-text">
                    HTML stands for Hypertext Markup Language. HTML is a standardized system for tagging text files to acheive font,
                    color, graphic, and hyperlink effects on web applications.
                  </p>
                </ListGroup.Item>

                {/* Eventually make a 'flipping' transition to 'back' of card for translation */}

                <ListGroup.Item className="card__translation"><span className="card__translation-label">Translation:</span>
                  <br></br>
                  <p className="card__translation-text">
                    HTML is the most commonly used markup language that allows humans to use a set of predefined keywords (known as tags)
                    to tell the browser what information to disaply and how to display it. It is important to know that HTML has limited
                    capabilities to position content, however, it is not meant to make things pretty.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="card__related-concepts"><span className="card__related-label">Related Concepts:</span>
                  <ul className="related__concepts">

                    {/* Eventually make these links to other cards */}

                    <li className="related__concepts-item">Elements</li>
                    <li className="related__concepts-item">Tags</li>
                    <li className="related__concepts-item">Attributes</li>
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Cards