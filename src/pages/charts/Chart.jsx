import { Card, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import BarChart from "./barChart/BarChart";
import StackedBarChart from "./barChart/StackedBarChart";
import DonutChart from "./donutChart/DonutChart";
import LineChart from "./linechart/Linechart";
import PieChart from "./pieCharts/PieChart";
import TimeLineChart from "./timelineChart/TimeLineChart";
import TimeLineChartBasic from "./timelineChart/TimeLineChartBasic";

const Contact = () => {
  const { setLoading } = useGlobalContext();
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        {/* grid component from MUI  */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* card component from mui  */}
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              {/* Typography component from MUI */}
              <Typography className="global_display_flex fs_16 fw_600">
                Apex chart - Line Chart
              </Typography>
              {/* Line chart compponent  */}
              <LineChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Apex chart - Bar Chart
              </Typography>
              {/* Bar chart component */}
              <BarChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Apex chart - Stacked Bar chart
              </Typography>
              {/* stack bar chart component */}
              <StackedBarChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Apex chart - Time Line chart
              </Typography>
              {/* Time Line chart component */}
              <TimeLineChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Apex chart - Time Line chart Basic
              </Typography>
              {/* Time Line chart component */}
              <TimeLineChartBasic />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Apex chart - Donut chart
              </Typography>
              {/* Donut chart component */}
              <DonutChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Apex chart - Pie chart
              </Typography>
              {/* pie chart component */}
              <PieChart />
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Contact;
