import React, { useState } from "react";
import ContentHeader from "./ContentHeader";
import Cards from "./Cards";

function MainContent({ setuserName }) {
  const [filteredSales, setFilteredSales] = useState({
    totalSales: 0,
    totalQuantity: 0,
    totalDiscount: 0,
    totalProfit: 0,
  });
  const [cities, setCities] = useState([]);
  const [citiesSales, setCitiesSales] = useState([]);
  return (
    <div className="content-wrapper">
      <ContentHeader
        setFilteredSales={setFilteredSales}
        setuserName={setuserName}
        setCitiesSales={setCitiesSales}
        setCities={setCities}
      />
      <Cards
        filteredSales={filteredSales}
        cities={cities}
        citiesSales={citiesSales}
      />
    </div>
  );
}

export default MainContent;
