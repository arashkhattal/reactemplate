import { Card, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../../context/globalContext";
import BasicTable from "./basicTable/BasicTable";
import DataTable from "./dataTable/DataTable";
import TableComponent from "./htmlTable/TableComponent";
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
  }, 2000);
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        {/* Typography component from MUI  */}
        <Typography variant="h5">Tables</Typography>
        {/* Grid component from MUI  */}
        <Grid container spacing={2}>
          <Grid item xs={6} md={12}>
            {/* Card component from MUI */}
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Basic Table
              </Typography>
              {/* Basic table component  */}
              <BasicTable />
            </Card>
          </Grid>
          <Grid item xs={6} md={12}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Data Table
              </Typography>
              {/* Data table component  */}
              <DataTable />
            </Card>
          </Grid>
          <Grid item xs={6} md={12}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Sort & Select Table
              </Typography>
              {/* sort & select table component */}
              <SortSelectTable />
            </Card>
          </Grid>
          <Grid item xs={6} md={12}>
            <Card style={{ padding: "20px", border: "1px solid lightgrey" }}>
              <Typography className="global_display_flex fs_16 fw_600">
                Html Table with Search & sort
              </Typography>
              {/* custom table component  */}
              <TableComponent />
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default About;
