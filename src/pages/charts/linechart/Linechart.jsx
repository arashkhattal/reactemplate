import React, { useState } from "react";
import Chart from "react-apexcharts";

function Linechart() {
  // chart data
  const [product, setProduct] = useState([
    {
      name: "T-shirt",
      data: [
        234, 45, 67, 987, 345, 456, 87, 321, 45, 569, 76, 890, 1234, 145, 267,
        897, 345, 156, 87, 321, 845, 269, 706, 120, 1123, 345, 117, 697, 845,
        256, 387, 1321, 1845, 969, 306, 990, 412, 845, 767, 587, 145, 156, 287,
        821, 845, 469, 306, 720, 562, 145, 267, 97, 45, 156, 87, 321, 845, 969,
        706, 20, 123, 562, 145, 267, 97, 45, 156, 87, 321, 845, 969, 706, 20,
       ,
      ],
    },
    {
      name: "Shirt",
      data: [
        562, 145, 267, 97, 45, 156, 87, 321, 845, 969, 706, 20, 123, 245, 467,
        197, 645, 356, 287, 421, 45, 769, 506, 420, 612, 945, 667, 897, 445,
        556, 387, 421, 145, 669, 506, 920, 412, 345, 367, 397, 545, 456, 187,
        821, 345, 669, 206, 220, 562, 145, 267, 97, 45, 156, 87, 321, 845, 969,
        706, 20, 123, 562, 145, 267, 97, 45, 156, 87, 321, 845, 969, 706, 20,

      ],
    },
    {
      name: "Jeans",
      data: [
        1012, 345, 117, 697, 845, 56, 287, 1321, 1845, 469, 306, 120, 123, 845,
        267, 797, 345, 656, 287, 921, 845, 469, 706, 590, 912, 445, 567, 397,
        745, 556, 387, 221, 545, 869, 406, 820, 812, 945, 967, 597, 445, 556,
        787, 221, 845, 469, 606, 320, 562, 145, 267, 97, 45, 156, 87, 321, 845,
        969, 706, 20, 123, 562, 145, 267, 97, 45, 156, 87, 321, 845, 969, 706,
        20, 123,
      ],
    },
  ]);

  const [option, setOption] = useState({
    //   to display xaxis data
    xaxis: {
      title: { text: "Product Sell in Months" },
      categories: [
        "Jan 2020",
        "Feb 2020",
        "Mar 2020",
        "Apr 2020",
        "May 2020",
        "Jun 2020",
        "Jul 2020",
        "Aug 2020",
        "Sep 2020",
        "Oct 2020",
        "Nov 2020",
        "Dec 2020",
        "Jan 2021",
        "Feb 2021",
        "Mar 2021",
        "Apr 2021",
        "May 2021",
        "Jun 2021",
        "Jul 2021",
        "Aug 2021",
        "Sep 2021",
        "Oct 2021",
        "Nov 2021",
        "Dec 2021",
        "Jan 2022",
        "Feb 2022",
        "Mar 2022",
        "Apr 2022",
        "May 2022",
        "Jun 2022",
        "Jul 2022",
        "Aug 2022",
        "Sep 2022",
        "Oct 2022",
        "Nov 2022",
        "Dec 2022",
        "Jan 2023",
        "Feb 2023",
        "Mar 2023",
        "Apr 2023",
        "May 2023",
        "Jun 2023",
        "Jul 2023",
        "Aug 2023",
        "Sep 2023",
        "Oct 2023",
        "Nov 2023",
        "Dec 2023",
        "Jan 2023",
        "Feb 2023",
        "Mar 2023",
        "Apr 2023",
        "May 2023",
        "Jun 2023",
        "Jul 2023",
        "Aug 2023",
        "Sep 2023",
        "Oct 2023",
        "Nov 2023",
        "Dec 2023",
        "Jan 2023",
        "Feb 2023",
        "Mar 2023",
        "Apr 2023",
        "May 2023",
        "Jun 2023",
        "Jul 2023",
        "Aug 2023",
        "Sep 2023",
        "Oct 2023",
        "Nov 2023",
        "Dec 2023",
        "Jan 2023",
        "Feb 2023",
        "Mar 2023",
        "Apr 2023",
        "May 2023",
        "Jun 2023",
        "Jul 2023",
        "Aug 2023",
        "Sep 2023",
        "Oct 2023",
        "Nov 2023",
        "Dec 2023",
      ],

    },
    //   to display yaxis data
    yaxis: {
      title: { text: "Product in K" },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 2,
      dashArray: 0,
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
