
import React from "react";
import Chart from "react-apexcharts";

const TimeLineChart = () => {
  // chart data 
  const data = {
    series: [
      {
        name: "In-Progress",
        data: [
          {
            x: "Code",
            y: [100, 200],
          },
          {
            x: "Test",
            y: [300, 400],
          },

          {
            x: "Validation",
            y: [500, 600],
          },
        ],
      },
      {
        name: "Completed",
        data: [
          {
            x: "Test",
            y: [350, 600],
          },
          {
            x: "Code",
            y: [300, 200],
          },
        ],
      },
      {
        name: "Running-Late",
        data: [
          {
            x: "Code",
            y: [250, 350],
          },
        ],
      },
    ],
    options: {
      chart: {
        type: "rangeBar",
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "50%",
        },
      },
      xaxis: {
        type: "datetime",
      },
      stroke: {
        width: 1,
      },
      fill: {
        type: "solid",
        opacity: 0.6,
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
      },
    },
  };

  return (
    <div>
      {/* chart option  */}
      <Chart options={data.options} series={data.series} type="rangeBar" />
    </div>
  );
};

export default TimeLineChart;
