import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../../context/globalContext";

const Contact = () => {
  const { setLoading } = useGlobalContext();
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 4000);
  return (
    <>
      <div>
        <Typography variant="h2">Chart Page</Typography>
      </div>
    </>
  );
};

export default Contact;

// import React, { useEffect, useRef } from "react";
// import ApexCharts from "apexcharts";
// import { Card } from "@material-ui/core";

// function LineChartContainer(props) {
//   const chartRefs = useRef([]);

//   useEffect(() => {
//     chartRefs.current.forEach((chartRef, index) => {
//       const options = {
//         chart: {
//           type: "line",
//           height: 350,
//           width: "100%",
//         },
//         series: [
//           {
//             name: props.data[index].name,
//             data: props.data[index].data,
//           },
//         ],
//         xaxis: {
//           categories: props.data[index].categories,
//         },
//       };
//       new ApexCharts(chartRef, options).render();
//     });
//   }, [props.data]);

//   return (
//     <div className="line-chart-container">
//       {props.data.map((chartData, index) => (
//         <Card key={index}>
//           <div ref={(ref) => (chartRefs.current[index] = ref)}></div>
//         </Card>
//       ))}
//     </div>
//   );
// }

// export default LineChartContainer;
