import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "./Filter";

function ContentHeader({setFilteredSales, setuserName, setCitiesSales, 
  setCities}) {
  return (
    <div className="content-header">
      <Container fluid>
        <Row className="mb-2">
          <Col sm={6}>
            <h1 className="m-0">Sales Overview</h1>
          </Col>
          <Col sm={6}>
            <Filter setFilteredSales={setFilteredSales} setuserName={setuserName} setCitiesSales={setCitiesSales}
        setCities={setCities}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContentHeader;
