import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Graph from "./Graph";
const IndianRupeeImage = "./indian-rupee-symbol.png";

const StatBox = ({ value, label, bgColor }) => {
  return (
    <Col lg={3} sm={6}>
      <Card className={`small-box ${bgColor}`}>
        <Card.Body>
          <Row>
            <Col md={4} className="mt-2">
              <img src={IndianRupeeImage} alt="Rupee symbol" width={50} />
            </Col>
            <Col md={8}>
              <Card.Title>{label}</Card.Title>
              <Card.Text className="h3 fw-bold fs-2">{value}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Cards = ({ filteredSales, cities, citiesSales }) => {
  const { totalSales, totalQuantity, totalDiscount, totalProfit } =
    filteredSales;

  return (
    <section className="content">
      <Container fluid>
        <Row>
          <StatBox
            value={`$${totalSales.toFixed(2)}`}
            label="Total Sales"
            bgColor="bg-white"
          />
          <StatBox
            value={totalQuantity.toFixed(2)}
            label="Quantity Sold"
            bgColor="bg-white"
          />
          <StatBox
            value={`${totalDiscount.toFixed(2)}%`}
            label="Discount%"
            bgColor="bg-white"
          />
          <StatBox
            value={`$${totalProfit.toFixed(2)}`}
            label="Profit"
            bgColor="bg-white"
          />
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Graph cities={cities} citiesSales={citiesSales} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cards;
