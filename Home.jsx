import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2 className="text-center">Visit Pittsburgh</h2>
          <p>
          The experience of visiting Pittsburgh isn’t like other cities.  When you arrive, you are part of our community. You’ll feel it immediately. It’s the warm greeting you’ll receive from locals who can’t wait to welcome you, give you tips on what to do, see and eat, and share their stories with you. Pittsburgh isn’t like most cities - we’re just a little bit different, in all the right ways.
            </p>
            <Link to="/about">
              <Button bsStyle="primary">About</Button>
            </Link>
            </Jumbotron>
            
            <Row className="show-container text-center ml-5">
              <Col xs={12} sm={4} className="pwerson-wrapper">
                <Image src="assets/images/pitt.jpeg" width="980" height="700" gravity="faces" crop="fill"/>
                
              </Col>
            </Row>
      </Container>
    )
  }
}
