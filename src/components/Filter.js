import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { dateFormat, getDates } from "../lib/common";

const Filter = ({
  setFilteredSales,
  setuserName,
  setCitiesSales,
  setCities,
  setProducts,
  setSubCategory,
  setCategorys,
  setSegments,
  theme
}) => {
  const [selectedState, setSelectedState] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [data, setData] = useState([]);
  const [fromDate, setFromDate] = useState([]);
  const [toDate, setToDate] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      fetchState();
    }
  }, [data.length]);
  const fetchState = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/states`);
      const jsonData = await response.json();
      setData(jsonData.data);
      setSelectedState(jsonData.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (selectedState !== "") {
      fetchData();
    }
  }, [selectedState]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/dates/${selectedState}`
      );
      const jsonData = await response.json();
      const { minDate, maxDate } = jsonData.data;
      const dates = getDates(new Date(minDate), new Date(maxDate));
      setFromDate(dates);
      setToDate(dates);
      setFromTime(dates[0]);
      setToTime(dates[dates.length - 1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (
      selectedState !== "" &&
      fromTime !== "" &&
      toTime !== "" &&
      fromTime !== "Invalid date" &&
      toTime !== "Invalid date"
    ) {
      fetchCardData();
    }
  }, [selectedState, fromTime, toTime]);
  const fetchCardData = async () => {
    try {
      const params = {
        customerId: "CG-12520",
        state: selectedState,
        startDate: dateFormat(fromTime, "YYYY-MM-DD"),
        endDate: dateFormat(toTime, "YYYY-MM-DD"),
      };
      const response = await fetch(
        `http://localhost:5000/api/dashboard?${new URLSearchParams(params)}`
      );
      const jsonData = await response.json();
      if (jsonData?.status === 200) {
        setuserName(jsonData.data.customerName);
        setFilteredSales(jsonData.data.filteredSales);
        setCities(jsonData?.data?.totalSalesByCity.map((el) => el.name));
        setCitiesSales(jsonData?.data?.totalSalesByCity.map((el) => el.value));
        setProducts(jsonData?.data?.totalSalesByProductName);
        setSubCategory(jsonData?.data?.totalSalesBySubCategory);
        setCategorys(jsonData?.data?.totalSalesByCategory);
        setSegments(jsonData?.data?.totalSalesBySegment);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getOptions = (json) =>
    json.map((el) => (
      <option value={el} key={el}>
        {el}
      </option>
    ));
  return (
    <div className="float-sm-right d-flex gap-4">
      <div>
        <Form.Group className={theme ? "bg-light text-dark" : "bg-dark text-light"}>
          <Form.Label>Select a state</Form.Label>
          <Form.Select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            {getOptions(data)}
          </Form.Select>
        </Form.Group>
      </div>
      <div>
        <Form.Group className={theme ? "bg-light text-dark" : "bg-dark text-light"}>
          <Form.Label>Select from Date</Form.Label>
          <Form.Select
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
          >
            {getOptions(fromDate)}
          </Form.Select>
        </Form.Group>
      </div>
      <div>
        <Form.Group className={theme ? "bg-light text-dark" : "bg-dark text-light"}>
          <Form.Label>Select to Date</Form.Label>
          <Form.Select
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
          >
            {getOptions(toDate)}
          </Form.Select>
        </Form.Group>
      </div>
    </div>
  );
};

export default Filter;
