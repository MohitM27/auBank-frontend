import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "./Filter";

function ContentHeader({
  setFilteredSales,
  setuserName,
  setCitiesSales,
  setCities,
  setProducts,
  setSubCategory,
  setCategorys,
  setSegments,
  theme
}) {
  return (
    <div className={`content-header ${theme ? "bg-light text-dark": "bg-dark text-light"}`}>
      <Container fluid>
        <Row className="mb-2">
          <Col sm={6}>
            <h1 className="m-0">Sales Overview</h1>
          </Col>
          <Col sm={6}>
            <Filter
              setSubCategory={setSubCategory}
              setProducts={setProducts}
              setFilteredSales={setFilteredSales}
              setuserName={setuserName}
              setCitiesSales={setCitiesSales}
              setCities={setCities}
              setCategorys={setCategorys}
              setSegments={setSegments}
              theme={theme}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContentHeader;
