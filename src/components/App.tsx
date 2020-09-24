// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import quotes from '../data/quotes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FC = () => {
  const [displayAuthor, setdisplayAuthor] = useState('');
  const [displayQuote, setdisplayQuote] = useState('');
  const [twitterHref, setTwitterHref] = useState('');

  const setRandomQuote = (): void => {
    let index = 0;

    do {
      index = Math.floor(Math.random() * quotes.length);
    } while (displayAuthor === quotes[index].quote);

    const newAuthor = quotes[index].author;
    const newQuote = quotes[index].quote;

    setdisplayAuthor(newAuthor);
    setdisplayQuote(newQuote);
    setTwitterHref(
      encodeURI(
        `https://twitter.com/intent/tweet?text=${newAuthor} - ${newQuote}`
      )
    );
  };

  useEffect(() => {
    setRandomQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container id="quote-box" fluid className="text-center">
      <Row className="mb-4">
        <Col>
          <h1>Random Quote Machine</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={12} md={11} lg={10} xl={9}>
          <Card>
            <Card.Header id="author">{`- ${displayAuthor} -`}</Card.Header>
            <Card.Body>
              <Card.Text id="text" className="text">
                {displayQuote}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                id="new-quote"
                className="float-left"
                onClick={setRandomQuote}
              >
                New Quote
              </Button>
              <div className="float-right twitter-wrap">
                <a
                  id="tweet-quote"
                  href={twitterHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
