import React, { useState } from "react";
import Chart from "react-apexcharts";

function Linechart() {
  // chart data
  const [product, setProduct] = useState([
    {
      name: "T-shirt",
      data: [234, 45, 67, 987, 345, 456, 87, 321, 45, 569, 76, 890],
    },
    {
      name: "Shirt",
      data: [562, 145, 267, 97, 45, 156, 87, 321, 845, 969, 706, 20],
    },
    {
      name: "Jeans",
      data: [1012, 345, 117, 697, 845, 56, 287, 1321, 1845, 469, 306, 120],
    },
  ]);

  const [option, setOption] = useState({
    //   to display xaxis data
    xaxis: {
      title: { text: "Product Sell in Months" },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    //   to display yaxis data
    yaxis: {
      title: { text: "Product in K" },
    },
    // to display responsive chart
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
  });

  return (
    <div>
      {/* chart component  */}
      <Chart type="line" series={product} options={option}></Chart>
    </div>
  );
}

export default Linechart;
