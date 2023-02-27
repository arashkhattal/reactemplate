import { Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import "./dashboard.css";
import Chart from "react-apexcharts";

const HomePage = () => {
  // line chart data

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

  const { setLoading } = useGlobalContext();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(true);
  //   }, 500);
  // }, []);

  // setTimeout(() => {
  //   setLoading(false);
  // }, 2000);

  return (
    <>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={3}>
            <Card>
              <div class="card-stats">
                <div class="card-stats-title">Revenue</div>
                <div class="card-stats-number color_primary">$50,000</div>
                <div class="card-stats-change color_primary">
                  <i class="fa fa-arrow-up "></i> 12%
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Card>
              <div class="card-stats">
                <div class="card-stats-title">Orders</div>
                <div class="card-stats-number color_primary">500</div>
                <div class="card-stats-change color_primary">
                  <i class="fa fa-arrow-down"></i> 5%
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Card>
              <div class="card-stats">
                <div class="card-stats-title">Customers</div>
                <div class="card-stats-number color_primary">2,000</div>
                <div class="card-stats-change color_primary">
                  <i class="fa fa-arrow-up"></i> 8%
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Card>
              <div class="card-stats">
                <div class="card-stats-title">Average Order Value</div>
                <div class="card-stats-number color_primary">$100</div>
                <div class="card-stats-change color_primary">
                  <i class="fa fa-arrow-up"></i> 2%
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <Card className="global_card">
              <Chart type="line" series={product} options={option}></Chart>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
