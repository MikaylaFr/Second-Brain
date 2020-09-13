import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Meals() {
  return (
    <Container className='padding'>
  <Row>
    <Col>Record your meals</Col>
  </Row>
  <Row>
    <Col>
    <Form>
  <Form.Group controlId="Breakfast.ControlInput1">
    <Form.Label>Breakfast</Form.Label>
    <Form.Control type="form" placeholder="e.g. eggs" />
  </Form.Group>

  <Form.Group controlId="Lunch.ControlInput1">
    <Form.Label>Lunch</Form.Label>
    <Form.Control type="form" placeholder="e.g. soup" />
  </Form.Group>

  <Form.Group controlId="Dinner.ControlInput1">
    <Form.Label>Dinner</Form.Label>
    <Form.Control type="form" placeholder="e.g. salmon" />
  </Form.Group>

  <Form.Group controlId="Snacks.ControlInput1">
    <Form.Label>Snacks</Form.Label>
    <Form.Control type="form" placeholder="e.g. cookie" />
  </Form.Group>

  <Form.Group controlId="Restriction.ControlSelect1">
    <Form.Label>Restriction</Form.Label>
    <Form.Control as="select">
      <option>Grains</option>
      <option>Legumes</option>
      <option>Dairy</option>
      <option>Eggs</option>
      <option>Meat</option>
      <option>Fish</option>
      <option>Corn</option>
      <option>Yeast</option>
      <option>Soy</option>
      <option>Nightshade vegetables</option>
      <option>Citrus</option>
      <option>Nuts & seeds</option>
      <option>Caffeine</option>
      <option>Alcohol</option>
      <option>Sugar</option>
      <option>Refined vegetable oils</option>
      <option>Gluten</option>
      <option>Artificial sweeteners</option>
      <option>Processed foods</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="Mood.ControlTextarea1">
    <Form.Label>Mood</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>

    </Col>
    
  </Row>
  <Row>
    <Col>
    <Button variant="primary" type="submit">
    Submit
  </Button>
    </Col>
  
  </Row>
</Container>

    
  );
}

export default Meals;
