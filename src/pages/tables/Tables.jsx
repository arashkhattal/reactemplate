import { Card, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import BasicTable from "./basicTable/BasicTable";
import DataTable from "./dataTable/DataTable";
import TableComponent from "./htmlTable/TableComponent";
import SelectSortTable from "./sort&selectTable/SortSelectTable";

const About = () => {
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
      <div style={{ overflow: "hidden" }}>
        {/* Typography component from MUI  */}
        {/* Grid component from MUI  */}
        <Grid container spacing={2}>
          <Grid item xs={6} md={12}>
            {/* Card component from MUI */}
            <Card className="global_card">
              <Typography className="global_display_flex fs_16 fw_600">
                Basic Table
              </Typography>
              {/* Basic table component  */}
              <BasicTable id="basic-table" />
            </Card>
          </Grid>
          {/* <Grid item xs={6} md={12}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Data Table
              </Typography>
              <DataTable />
            </Card>
          </Grid> */}
          <Grid item xs={6} md={12}>
            <Card className="global_card">
              <Typography className="global_display_flex fs_16 fw_600">
                Sort & Select Table
              </Typography>
              {/* sort & select table component */}
              <SelectSortTable id="sort-table" />
            </Card>
          </Grid>
          {/* <Grid item xs={6} md={12}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Html Table with Search & sort
              </Typography>
              <TableComponent />
            </Card>
          </Grid> */}
        </Grid>
      </div>
    </>
  );
};

export default About;
