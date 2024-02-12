import React from "react";
import ReactEcharts from "echarts-for-react";
const PieChart = ({title, data}) => {
  const option = {
    title: {
        text:title
      },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '90%',
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'start'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data
      }
    ]
  };;

  return <ReactEcharts option={option} />;
};

export default PieChart;
