import React from "react";
import ReactEcharts from "echarts-for-react"; 
const Graph=({cities, citiesSales})=> {  
const option = {
    title: {
      text: 'Sales By City'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: cities
    },
    series: [
      {
        // name: '2011',
        type: 'bar',
        data: citiesSales
      }
    ]
  }; 
return <ReactEcharts option={option} />;
} 
export default Graph;