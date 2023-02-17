import React from "react";
import Chart from "react-apexcharts";

function Stackedbarchart() {
  return (
    <div>
        {/* chart component  */}
      <Chart
        type="bar"
        // chrt data
        series={[
          {
            name: "Hydro-Electric",
            data: [345, 578, 898, 532, 465],
            //color: '#f90000'
          },
          {
            name: "Oil",
            data: [125, 178, 338, 587, 276],
            // color: '#000000'
          },
          {
            name: "Gas",
            data: [355, 458, 218, 587, 229],
            // color: '#000000'
          },
          {
            name: "Coal",
            data: [190, 321, 112, 537, 333],
            // color: '#000000'
          },
          {
            name: "Nuclear",
            data: [560, 121, 675, 907, 233],
            // color: '#000000'
          },
        ]}
        options={{
          chart: {
            stacked: true,
          },
          plotOptions: {
            bar: {
              horizontal: true,
              columnWidth: "100%",
            },
          },
          stroke: {
            width: 1,
          },
        //   to display xaxis data
          xaxis: {
            title: {
              text: "Energy Consumption in Year's",
            },
            categories: ["2017", "2018", "2019", "2020", "2021"],
          },
        //   to display yaxis data
          yaxis: {
            title: {
              text: "Data in (K)",
            },
          },

        //   to make graph responsive
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
          dataLabels: {
            enabled: true,
          },
          grid: {
            show: true,
            xaxis: {
              lines: {
                show: false,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
        }}
      />
    </div>
  );
}
export default Stackedbarchart;
