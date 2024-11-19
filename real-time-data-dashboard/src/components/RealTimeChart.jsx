import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const RealTimeChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => `ID: ${item.id}`),
    datasets: [
      {
        label: "Body Length",
        data: data.map((item) => item.body.length),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 20 },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default RealTimeChart;
