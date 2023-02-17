import React from "react";
import Chart from "react-apexcharts";

function Barchart() {
  return (
    <div className="chart-container">
      <Chart
        type="bar"
        width={950}
        height={550}
        series={[
          {
            name: "Social Media Subscriber",
            data: [6578, 6787, 3245, 9876, 2324, 5123, 2435],
          },
        ]}
        options={{
          colors: ["#0d80d8"],
          theme: { mode: "light" },

          xaxis: {
            tickPlacement: "on",
            categories: [
              "Facebook",
              "Twitter",
              "Linkedin",
              "Instagram",
              "GitHub",
              "Stackoverflow",
              "Youtube",
            ],
            title: {
              text: "chart title",
              style: { color: "#000", fontSize: 14 },
            },
          },

          yaxis: {
            labels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: { fontSize: "15", colors: ["#000"] },
            },
            title: {
              text: "User In (K)",
              style: { color: "#000", fontSize: 15 },
            },
          },

          legend: {
            show: true,
            position: "right",
          },

          dataLabels: {
            formatter: (val) => {
              return `${val}`;
            },
            style: {
              colors: ["#f4f4f4"],
              fontSize: 15,
            },
          },
        }}
      ></Chart>
    </div>
  );
}

export default Barchart;
