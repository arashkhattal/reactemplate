import React, { Component } from "react";
import Chart from "react-apexcharts";

function PieChart() {
  return (
    <div>
      <Chart
        series={[44, 55, 13, 43, 22]}
        options={{
          labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
          responsive: [
            {
              breakpoint: 1000,
              options: {
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        }}
        type="pie"
      />
    </div>
  );
}

export default PieChart;
