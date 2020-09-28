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
        <Card className="concept__card">
          <Card.Body className="card__content">
            <Card.Title className="card__title">
              <h1>Markup Language</h1>
            </Card.Title>
            <br></br>
            <ListGroup variant="flush">
              <ListGroup.Item className="card__definition"><span className="card__label">Definition:</span>
                <br></br>
                <p className="card__content">
                  A markup language is a computer language that uses tags to define elements within a document. It is human-readable,
                  meaning markup files contain standard words, rather than typical programming syntax. While several markup languages
                  exist, the two most popular markup languages are HTML and XML.
                  </p>
              </ListGroup.Item>

              {/* Eventually make a 'flipping' transition to 'back' of card for translation */}

              <ListGroup.Item className="card__translation"><span className="card__label">Translation:</span>
                <br></br>
                <p className="card__content">
                  Markup languages create a bridge between humans and computers by allowing humans to use language they understand to
                  tell computers/browsers what to display.
                  </p>
              </ListGroup.Item>
              <ListGroup.Item className="card__related-concepts"><span className="card__label">Related Concepts:</span>
                <ul className="related__concepts">

                  {/* Eventually make these links to other cards */}

                  <li className="related__concepts-item card__content">HTML</li>
                  <li className="related__concepts-item card__content">Tags</li>
                  <li className="related__concepts-item card__content">Attributes</li>
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
              <ListGroup.Item className="card__definition"><span className="card__label">Definition:</span>
                <br></br>
                <p className="card__definition-text">
                  HTML stands for Hypertext Markup Language. HTML is a standardized system for tagging text files to acheive font,
                  color, graphic, and hyperlink effects on web applications.
                  </p>
              </ListGroup.Item>

              {/* Eventually make a 'flipping' transition to 'back' of card for translation */}

              <ListGroup.Item className="card__translation"><span className="card__label">Translation:</span>
                <br></br>
                <p className="card__content">
                  HTML is the most commonly used markup language that allows humans to use a set of predefined keywords (known as tags)
                  to tell the browser what information to disaply and how to display it. It is important to know that HTML has limited
                  capabilities to position content, however, it is not meant to make things pretty.
                  </p>
              </ListGroup.Item>
              <ListGroup.Item className="card__related-concepts"><span className="card__label">Related Concepts:</span>
                <ul className="related__concepts">

                  {/* Eventually make these links to other cards */}

                  <li className="related__concepts-item card__content">Elements</li>
                  <li className="related__concepts-item card__content">Tags</li>
                  <li className="related__concepts-item card__content">Attributes</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="concept__card">
          <Card.Body className="card__content">
            <Card.Title className="card__title">
              <h1>Elements</h1>
            </Card.Title>
            <br></br>
            <ListGroup variant="flush">
              <ListGroup.Item className="card__definition"><span className="card__label">Definition:</span>
                <br></br>
                <p className="card__definition-text">
                  An HTML element is a type of HTML document component, one of several types of HTML nodes.
                  </p>
              </ListGroup.Item>

              {/* Eventually make a 'flipping' transition to 'back' of card for translation */}

              <ListGroup.Item className="card__translation"><span className="card__label">Translation:</span>
                <br></br>
                <p className="card__content">
                  An HTML element is any individual item that makes up what you see in the browser when you load an HTML page.
                  Every element includes a tag and some sort of content.
                  </p>
              </ListGroup.Item>
              <ListGroup.Item className="card__related-concepts"><span className="card__label">Related Concepts:</span>
                <ul className="related__concepts">

                  {/* Eventually make these links to other cards */}

                  <li className="related__concepts-item card__content">DOM</li>
                  <li className="related__concepts-item card__content">Tags</li>
                  <li className="related__concepts-item card__content">Attributes</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="concept__card">
          <Card.Body className="card__content">
            <Card.Title className="card__title">
              <h1>Tags</h1>
            </Card.Title>
            <br></br>
            <ListGroup variant="flush">
              <ListGroup.Item className="card__definition"><span className="card__label">Definition:</span>
                <br></br>
                <p className="card__definition-text">
                  Tags are sets of characters that provide formatted commands for a web page. At the core of the tag are the
                  directions required to visually display website sections.
                  </p>
              </ListGroup.Item>

              {/* Eventually make a 'flipping' transition to 'back' of card for translation */}

              <ListGroup.Item className="card__translation"><span className="card__label">Translation:</span>
                <br></br>
                <p className="card__content">
                  HTML tags are like indicators that break up various sections of a website. Each tag has a predefined meaning
                  and purpose that tells the browser what to display and how to display it. All tags are written as a word or phrase
                  wrapped in angle braces (&lt; &gt;).
                  </p>
              </ListGroup.Item>
              <ListGroup.Item className="card__related-concepts"><span className="card__label">Related Concepts:</span>
                <ul className="related__concepts">

                  {/* Eventually make these links to other cards */}

                  <li className="related__concepts-item card__content">DOM</li>
                  <li className="related__concepts-item card__content">Elements</li>
                  <li className="related__concepts-item card__content">Attributes</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="concept__card">
          <Card.Body className="card__content">
            <Card.Title className="card__title">
              <h1>Document Object Model (DOM)</h1>
            </Card.Title>
            <br></br>
            <ListGroup variant="flush">
              <ListGroup.Item className="card__definition"><span className="card__label">Definition:</span>
                <br></br>
                <p className="card__definition-text">
                  The DOM, or Document Object Model, is an application programming interface (API) for HTML and well-formed XML documents.
                  It defines the local structure of documents and the way a document is accessed and manipulated.
                  </p>
              </ListGroup.Item>

              {/* Eventually make a 'flipping' transition to 'back' of card for translation */}

              <ListGroup.Item className="card__translation"><span className="card__label">Translation:</span>
                <br></br>
                <p className="card__content">
                  The Document Object Model (DOM) is a set of predefined rules that control how HTML elements are displayed and how
                  different elements interact with each other.  The DOM is visually represented in a tree-like structure, much like
                  a family tree, in order to reinforce the structural nature of an HTML/XML web page.
                  </p>
              </ListGroup.Item>
              <ListGroup.Item className="card__related-concepts"><span className="card__label">Related Concepts:</span>
                <ul className="related__concepts">

                  {/* Eventually make these links to other cards */}

                  <li className="related__concepts-item card__content">Tags</li>
                  <li className="related__concepts-item card__content">Elements</li>
                  <li className="related__concepts-item card__content">Semantic Tags</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="concept__card">
          <Card.Body className="card__content">
            <Card.Title className="card__title">
              <h1>Divs</h1>
            </Card.Title>
            <br></br>
            <ListGroup variant="flush">
              <ListGroup.Item className="card__definition"><span className="card__label">Definition:</span>
                <br></br>
                <p className="card__definition-text">
                  The &lt;div&gt; tag defines a division or section in an HTML document. This tag is used as a container for HTML elements - which
                  is then styled with CSS or manipulated with JavaScript.
                  </p>
              </ListGroup.Item>

              {/* Eventually make a 'flipping' transition to 'back' of card for translation */}

              <ListGroup.Item className="card__translation"><span className="card__label">Translation:</span>
                <br></br>
                <p className="card__content">
                  The &lt;div&gt; tag is a universal tag associated with a division, or separation in the content of a web page. This is a common tag
                  used to represent specific sections of HTML that can take their own styling or spacing. Imagine a &lt;div&gt; as a box that contains
                  all the content inside of it.
                  </p>
              </ListGroup.Item>
              <ListGroup.Item className="card__related-concepts"><span className="card__label">Related Concepts:</span>
                <ul className="related__concepts">

                  {/* Eventually make these links to other cards */}

                  <li className="related__concepts-item card__content">Tags</li>
                  <li className="related__concepts-item card__content">Elements</li>
                  <li className="related__concepts-item card__content">Semantic Tags</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="concept__card">
          <Card.Body className="card__content">
            <Card.Title className="card__title">
              <h1>Semantic Tags</h1>
            </Card.Title>
            <br></br>
            <ListGroup variant="flush">
              <ListGroup.Item className="card__definition"><span className="card__label">Definition:</span>
                <br></br>
                <p className="card__content">
                  Semantic tags are tags which clearly describe their meaning in a human- and machine-readable way. &lt;header&gt;,
                  &lt;footer&gt;, and &lt;article&gt; are all considered semantic because they acurately describe the purpose of the
                  element and type of content that is contained within them.
                  </p>
              </ListGroup.Item>

              {/* Eventually make a 'flipping' transition to 'back' of card for translation */}

              <ListGroup.Item className="card__translation"><span className="card__label">Translation:</span>
                <br></br>
                <p className="card__content">
                  Semantic tags are tags that provide more information to the browser in terms of how to display an element. While
                  &lt;div&gt; tags are useful and can be used to create an entire HTML web page, they can add more work when it comes
                  to positioning and styling your elements. Semantic tags hold intrinsic attributes by default that allow you to write
                  cleaner code.
                  </p>
              </ListGroup.Item>
              <ListGroup.Item className="card__related-concepts"><span className="card__label">Related Concepts:</span>
                <ul className="related__concepts">

                  {/* Eventually make these links to other cards */}

                  <li className="related__concepts-item">Tags</li>
                  <li className="related__concepts-item">Elements</li>
                  <li className="related__concepts-item">Attributes</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

export default Cards