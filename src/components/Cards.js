import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Graph from "./Graph";
import LineGraph from "./LineGraph";
import PieChart from "./PieChart";
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

const Cards = ({
  filteredSales,
  cities,
  citiesSales,
  products,
  subCategory,
  categorys,
  segments,
  theme,
}) => {
  const { totalSales, totalQuantity, totalDiscount, totalProfit } =
    filteredSales;
  return (
    <section
      className={`content ${
        theme ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <Container fluid>
        <Row>
          <StatBox
            value={`$${totalSales.toFixed(2)}`}
            label="Total Sales"
            bgColor = {theme ? "bg-white text-dark" : "bg-dark text-light"}
      
          />
          <StatBox
            value={totalQuantity.toFixed(2)}
            label="Quantity Sold"
            bgColor = {theme ? "bg-white text-dark" : "bg-dark text-light"}
      
          />
          <StatBox
            value={`${totalDiscount.toFixed(2)}%`}
            label="Discount%"
            bgColor = {theme ? "bg-white text-dark" : "bg-dark text-light"}
      
          />
          <StatBox
            value={`$${totalProfit.toFixed(2)}`}
            label="Profit"
            bgColor = {theme ? "bg-white text-dark" : "bg-dark text-light"}
      
          />
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className={`${
                theme ? "bg-white text-dark" : "bg-dark text-light"
              }`}
            >
              <Card.Body>
                <Graph
                  category={cities}
                  values={citiesSales}
                  title="Sales By City"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className={`${
                theme ? "bg-white text-dark" : "bg-dark text-light"
              }`}
            >
              <Card.Body>
                <LineGraph
                  graphTilte="Sales By Products"
                  text="Sales in $"
                  title="Product Name"
                  data={products}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card
              className={`${
                theme ? "bg-white text-dark" : "bg-dark text-light"
              }`}
            >
              <Card.Body>
                <PieChart data={categorys} title="Sales By Category" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className={`${
                theme ? "bg-white text-dark" : "bg-dark text-light"
              }`}
            >
              <Card.Body>
                <LineGraph
                  graphTilte="Sales By Sub Category"
                  text="Sales in $"
                  title="Sub Category"
                  data={subCategory}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className={`${
                theme ? "bg-white text-dark" : "bg-dark text-light"
              }`}
            >
              <Card.Body>
                <PieChart data={segments} title="Sales By Segment" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cards;
