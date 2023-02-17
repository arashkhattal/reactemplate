import { Card, Typography } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";

const ProjectProgress = () => {
  // var options = {
  //   series: [
  //     {
  //       data: [
  //         {
  //           x: "Code",
  //           y: [
  //             new Date("2019-03-02").getTime(),
  //             new Date("2019-03-04").getTime(),
  //           ],
  //         },
  //         {
  //           x: "Test",
  //           y: [
  //             new Date("2019-03-04").getTime(),
  //             new Date("2019-03-08").getTime(),
  //           ],
  //         },
  //         {
  //           x: "Validation",
  //           y: [
  //             new Date("2019-03-08").getTime(),
  //             new Date("2019-03-12").getTime(),
  //           ],
  //         },
  //         {
  //           x: "Deployment",
  //           y: [
  //             new Date("2019-03-12").getTime(),
  //             new Date("2019-03-18").getTime(),
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   chart: {
  //     height: 350,
  //     type: "rangeBar",
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: true,
  //     },
  //   },
  //   xaxis: {
  //     type: "datetime",
  //   },
  // };

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
        // height: 450,
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
    <div >
      <Chart options={data.options} series={data.series} type="rangeBar" />
    </div>
  );
};

export default ProjectProgress;
