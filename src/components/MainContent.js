import React, { useState } from "react";
import ContentHeader from "./ContentHeader";
import Cards from "./Cards";

function MainContent({ setuserName, theme }) {
  const [filteredSales, setFilteredSales] = useState({
    totalSales: 0,
    totalQuantity: 0,
    totalDiscount: 0,
    totalProfit: 0,
  });
  const [cities, setCities] = useState([]);
  const [citiesSales, setCitiesSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [segments, setSegments] = useState([]);
  return (
    <div className="content-wrapper">
      <ContentHeader
        setFilteredSales={setFilteredSales}
        setuserName={setuserName}
        setCitiesSales={setCitiesSales}
        setCities={setCities}
        setProducts={setProducts}
        setSubCategory={setSubCategory}
        setCategorys={setCategorys}
        setSegments={setSegments}
        theme={theme}
      />
      <Cards
        filteredSales={filteredSales}
        cities={cities}
        citiesSales={citiesSales}
        products={products}
        subCategory={subCategory}
        categorys={categorys}
        segments={segments}
        theme={theme}
      />
    </div>
  );
}

export default MainContent;
