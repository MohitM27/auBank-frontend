import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const LineGraph = ({ graphTilte, data, title, text }) => {
  return (
    <Row>
      <Col md={12} className="fs-5 fw-bold">
        {graphTilte}
      </Col>
      <Container>
        <Row className="mt-3 productDesc">
          <Col md={9}>{title}</Col>
          <Col md={3}>{text} </Col>
        </Row>
        </Container>
        <Container style={{ maxHeight: '230px', overflowY: 'auto' }}>
        {data.map((el, i) => (
          <Row className="mt-2" key={i}>
            <Col md={9} className="productTitle">
              {el.name}
            </Col>
            <Col md={3} className="productText">
              ${el.value}
            </Col>
          </Row>
        ))}
      </Container>
    </Row>
  );
};

export default LineGraph;
