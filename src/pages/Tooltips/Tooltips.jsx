
import React from "react";

import {
  Button,
  Card,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { HelpOutline, InfoOutlined } from "@mui/icons-material";

const TooltipExample = () => {
  return (
    <div>
      <Card className="global_card">
        <Grid container spacing={8}>
          <Grid item xs={12} md={6} lg={6}>
            <Typography className=" fs_14 fw_600">Default Tooltip</Typography>
            <Tooltip title="Tooltip with default settings">
              <button
                className="btn_primary btn_primary_hover"
                size="small"
                style={{
                  color: "white",
                }}
                //   className={classes.button}
              >
                Default Tooltip
              </button>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography className=" fs_14 fw_600">Arrow Tooltip</Typography>
            <Tooltip title="Tooltip with arrow" arrow>
              <button
                className="btn_primary btn_primary_hover"
                size="small"
                style={{
                  color: "white",
                }}
                //   className={classes.button}
              >
                Arrow Tooltip
              </button>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography className=" fs_14 fw_600">
              Custom Delay Tooltip
            </Typography>
            <Tooltip
              title="Tooltip with custom delay"
              enterDelay={500}
              leaveDelay={200}
            >
              <button
                className="btn_primary btn_primary_hover"
                size="small"
                style={{
                  color: "white",
                }}
                //   className={classes.button}
              >
                Custom Delay Tooltip
              </button>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography className="fs_14 fw_600">Typography Tooltip</Typography>
            <Tooltip
              title={
                <Typography color="inherit">Tooltip with Typography</Typography>
              }
            >
              <button
                className="btn_primary btn_primary_hover"
                size="small"
                style={{
                  color: "white",
                }}
                //   className={classes.button}
              >
                Typography Tooltip
              </button>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography className=" fs_14 fw_600">Disabled Tooltip</Typography>
            <Tooltip title="Disabled Tooltip" disabled>
              <button
                className="btn_primary btn_primary_hover"
                size="small"
                style={{
                  color: "white",
                }}
                //   className={classes.button}
              >
                Disabled Tooltip
              </button>
            </Tooltip>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={6}>
            <Typography className=" fs_14 fw_600">
              Tooltip on icon button
            </Typography>
            <Tooltip title="Tooltip on icon button">
              <IconButton aria-label="info">
              </IconButton>
            </Tooltip>
          </Grid> */}
          <Grid item xs={12} md={6} lg={6}>
            <Typography className=" fs_14 fw_600">
              Tooltip on help icon
            </Typography>
            <Tooltip title="Tooltip on help icon" placement="top-end">
              <IconButton aria-label="help">
                <HelpOutline />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default TooltipExample;
