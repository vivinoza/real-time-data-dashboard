import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const RealTimeChart = ({ data }) => {
  const chartOptions = {
    chart: {
      type: "column",
    },
    title: {
      text: "Real-Time Data Chart",
    },
    xAxis: {
      categories: data.map((item) => `ID: ${item.id}`),
      title: {
        text: "Post IDs",
      },
    },
    yAxis: {
      title: {
        text: "Body Length",
      },
    },
    series: [
      {
        name: "Body Length",
        data: data.map((item) => item.body.length),
        color: "#7cb5ec",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default RealTimeChart;
