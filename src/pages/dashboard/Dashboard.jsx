import { Card, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import "./dashboard.css";
import LineChart from "../charts/linechart/Linechart";

const HomePage = () => {
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
                <div class="card-stats-number">$50,000</div>
                <div class="card-stats-change">
                  <i class="fa fa-arrow-up"></i> 12%
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Card>
              <div class="card-stats">
                <div class="card-stats-title">Orders</div>
                <div class="card-stats-number">500</div>
                <div class="card-stats-change">
                  <i class="fa fa-arrow-down"></i> 5%
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Card>
              <div class="card-stats">
                <div class="card-stats-title">Customers</div>
                <div class="card-stats-number">2,000</div>
                <div class="card-stats-change">
                  <i class="fa fa-arrow-up"></i> 8%
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Card>
              <div class="card-stats">
                <div class="card-stats-title">Average Order Value</div>
                <div class="card-stats-number">$100</div>
                <div class="card-stats-change">
                  <i class="fa fa-arrow-up"></i> 2%
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <Card className="global_card">
              <LineChart />
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
