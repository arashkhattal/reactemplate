// import React from 'react'
// import React from "react";
// import ReactApexChart from "react-apexcharts";

// const TimeLineChartBasic = () => {
//   return (
//     <div>TimeLineChartBasic</div>
//   )
// }

// export default TimeLineChartBasic

import React from "react";
import Chart from "react-apexcharts";
import moment from "moment";

function TimelineChart() {
  const options = {
    chart: {
      type: "rangeBar",
      toolbar: {
        show: true,
      },
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
        distributed: true,
      },
    },
    xaxis: {
      type: "datetime",

    },
    yaxis: {
      labels: {
        show: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        var label = opts.w.globals.labels[opts.dataPointIndex];
        var a = moment.utc(val[0]);
        var b = moment.utc(val[1]);
        var diff = b.diff(a, "days");
        return label + ": " + diff + (diff > 1 ? " days" : " day");
      },
      style: {
        colors: ["#f3f4f5", "#fff"],
      },
    },
    grid: {
      show: false,
    },
  };

  const data = [
    {
      data: [
        {
          x: "Project A",
          y: [
            new Date("2021-01-01").getTime(),
            new Date("2021-01-31").getTime(),
          ],
        },
        {
          x: "Project B",
          y: [
            new Date("2021-02-01").getTime(),
            new Date("2021-03-15").getTime(),
          ],
        },
        {
          x: "Project C",
          y: [
            new Date("2021-03-16").getTime(),
            new Date("2021-04-30").getTime(),
          ],
        },
      ],
    },
  ];

  return <Chart options={options} series={data} type="rangeBar" height={300}/>;
}

export default TimelineChart;
