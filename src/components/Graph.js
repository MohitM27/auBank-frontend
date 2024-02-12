import React from "react";
import ReactEcharts from "echarts-for-react"; 
const Graph=({title, category, values})=> {  
const option = {
    title: {
      text:title
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
      data: category
    },
    series: [
      {
        type: 'bar',
        data: values
      }
    ]
  }; 
return <ReactEcharts option={option} />;
} 
export default Graph;