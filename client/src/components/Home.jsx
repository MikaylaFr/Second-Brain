import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

function Home() {
  return (
    <Container>
    <br></br>
    <Jumbotron>

    <h1>Hello, world!</h1>
    <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
    </p>
    <p>
        <Button variant="primary">Learn more</Button>
    </p>
    </Jumbotron>

    <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
    </Row>
    </Container>
  );
}

export default Home;
