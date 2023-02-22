import React from "react";
import Chart from "react-apexcharts";

function Donut() {
  return (
    <div >
      {/* chart component  */}
      <Chart
      // chart data
        series={[44, 55, 13, 43, 22]}
        options={{
          labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
          // to display responsive chart
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
        // type of cahrt 
        type="donut"
      />
    </div>
  );
}

export default Donut;
