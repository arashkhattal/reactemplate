import { Card, Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../../context/globalContext";
import BarChart from "./barChart/BarChart";
import StackedBarChart from "./barChart/StackedBarChart";
import DonutChart from "./donutChart/DonutChart";
import LineChart from "./linechart/Linechart";

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
      <div style={{ overflow: "hidden" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Apex chart - Line Chart
              </Typography>
              <LineChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Apex chart - Bar Chart
              </Typography>
              <BarChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Apex chart - Stacked Bar chart
              </Typography>
              <StackedBarChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Apex chart - Donut chart
              </Typography>
              <DonutChart />
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Contact;
