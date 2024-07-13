import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../css/main.css'

const HeroComp = () => {
  return (
    <div className="hero" id="home">
      <Container>
        <Row>
          <Col className="text-grey text-center">
            <h1 color="black">Mari Chill Sejenak</h1>
            <p color="chocolate">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quo!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroComp;
