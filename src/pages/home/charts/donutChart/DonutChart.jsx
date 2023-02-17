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
    <div className="donut">
      <Chart
        options={{
          labels: ["A", "B", "C", "D", "E"],
        }}
        series={{
          data: [44, 55, 41, 17, 15],
        }}
        type="donut"
        width="380"
      />
    </div>
  );
}

export default Donut;
