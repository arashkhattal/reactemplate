import { Card, CircularProgress, Grid, Typography } from "@mui/material";
// import { useGlobalContext } from "../../context/globalcontext";
import { useGlobalContext } from "../../context/globalContext";
import React, { useState } from "react";

function Loading() {
  const { setLoading } = useGlobalContext();
    const [divLoading, setDivLoading] = useState(false);

  const buttonClick = () => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

    const divButtonClick = () => {
      setTimeout(() => {
        setDivLoading(true);
      }, 500);
      setTimeout(() => {
        setDivLoading(false);
      }, 2000);
    };

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        {/* Typography component from MUI  */}
        {/* Grid component from MUI  */}
        <h1 className="global_display_flex">Welcome to our site!</h1>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={6} md={12}>
            {/* Card component from MUI */}
            <Card className="global_card">
              <Typography className="fs_16 fw_600">Loading Example</Typography>
              {/* Loading Example  */}
              <button
                className="btn_primary btn_primary_hover"
                size="small"
                style={{
                  marginTop: "10px",
                  color: "white",
                  width: "15%",
                }}
                onClick={buttonClick}
              >
                Trigger Loader..
              </button>
            </Card>
          </Grid>
          <Grid item xs={6} md={12}>
            {/* Card component from MUI */}
            <Card className="global_card">
              {divLoading ? (
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress />
                </div>
              ) : (
                <>
                  <Typography className="fs_16 fw_600">
                    Division Loading Example
                  </Typography>

                  <button
                    className="btn_primary btn_primary_hover"
                    size="small"
                    style={{
                      marginTop: "10px",
                      color: "white",
                      width: "15%",
                    }}
                    onClick={divButtonClick}
                  >
                    Trigger Loader..
                  </button>
                </>
              )}
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Loading;
