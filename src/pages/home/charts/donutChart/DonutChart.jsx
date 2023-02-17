import React, { Component } from "react";
import Chart from "react-apexcharts";

// class Donut extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         labels: ["A", "B", "C", "D", "E"],
//       },
//       series: [44, 55, 41, 17, 15],
//     };
//   }

function Donut() {
  return (
    <div >
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
        type="donut"
      />
    </div>
  );
}

export default Donut;
