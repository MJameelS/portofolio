import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const FooterComp = () => {
  return (
    <div className="footer pb-3 pt-4">
      <Container className="Container">
        <Row className="Row">
          <Col className="Col">
            <h3 className="fw-bold text-white text-center">Ngoding</h3>
          </Col>
          <div className="text-center mt-2">
            <i class="fa-brands fa-facebook text-white fs-1 px-2"></i>
            <i class="fa-brands fa-whatsapp text-white fs-1 px-2"></i>
            <i class="fa-brands fa-instagram text-white fs-1 px-2"></i>
            <i class="fa-brands fa-linkedin text-white fs-1 px-2"></i>
          </div>
        </Row>
        <Row>
          <Col>
            <p className="text-white text-center mt-3">&copy; Copyright by Jashaf 2024, All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
