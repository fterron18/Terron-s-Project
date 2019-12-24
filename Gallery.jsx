import React, { Component } from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center mb-5">Gallery</h1>
                <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="assets/images/city.jpeg" width="300" height="200" />
    </Col>
    <Col xs={6} md={4}>
      <Image src="assets/images/bridge.jpeg" width="300" height="200" />
    </Col>
    <Col xs={6} md={4}>
      <Image src="assets/images/plane.jpeg" width="300" height="200" />
  
    </Col>
  </Row>
<br/>
  <Row>
  <Col xs={6} md={4}>
      <Image src="assets/images/field.jpeg" width="300" height="200" />
    </Col>
    <Col xs={6} md={4}>
      <Image src="assets/images/day.jpeg" width="300" height="200" />
    </Col>
    <Col xs={6} md={4}>
      <Image src="assets/images/night.jpeg" width="300" height="200" />
    </Col>

  </Row>
</Container>
            </div>
        )
    }
}
