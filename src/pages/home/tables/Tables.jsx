import { Card, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../../context/globalContext";
import BasicTable from "./basicTable/BasicTable";
import DataTable from "./dataTable/DataTable";
import SortSelectTable from "./sort&selectTable/SortSelectTable";

const About = () => {
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
        <Typography variant="h5">Tables</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md={12}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Basic Table
              </Typography>
              <BasicTable />
            </Card>
          </Grid>
          <Grid item xs={6} md={12}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Data Table
              </Typography>
              <DataTable />
            </Card>
          </Grid>
          <Grid item xs={6} md={12}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Sort & Select Table
              </Typography>
              <SortSelectTable />
            </Card>
          </Grid>
          <Grid item xs={6} md={12}></Grid>
        </Grid>
      </div>
    </>
  );
};

export default About;
