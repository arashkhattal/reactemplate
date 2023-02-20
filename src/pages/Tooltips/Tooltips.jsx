// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Tooltip from "@material-ui/core/Tooltip";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { InfoOutlined, HelpOutline } from "@material-ui/icons";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     justifyContent: "space-around",
//     alignItems: "center",
//     height: "100vh",
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

// const TooltipExample = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Tooltip title="Tooltip with default settings">
//         <Button variant="contained" color="primary" className={classes.button}>
//           Default Tooltip
//         </Button>
//       </Tooltip>
//       <Tooltip title="Tooltip with arrow" arrow>
//         <Button
//           variant="contained"
//           color="secondary"
//           className={classes.button}
//         >
//           Arrow Tooltip
//         </Button>
//       </Tooltip>
//       <Tooltip
//         title="Tooltip with custom delay"
//         enterDelay={500}
//         leaveDelay={200}
//       >
//         <Button variant="outlined" color="primary" className={classes.button}>
//           Custom Delay Tooltip
//         </Button>
//       </Tooltip>
//       <Tooltip
//         title={<Typography color="inherit">Tooltip with Typography</Typography>}
//       >
//         <Button variant="outlined" color="secondary" className={classes.button}>
//           Typography Tooltip
//         </Button>
//       </Tooltip>
//       <Tooltip title="Disabled Tooltip" disabled>
//         <Button variant="contained" color="primary" className={classes.button}>
//           Disabled Tooltip
//         </Button>
//       </Tooltip>
//       <Tooltip title="Tooltip on icon button">
//         <IconButton aria-label="info">
//           <InfoOutlined />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Tooltip on help icon" placement="top-end">
//         <IconButton aria-label="help">
//           <HelpOutline />
//         </IconButton>
//       </Tooltip>
//     </div>
//   );
// };

// export default TooltipExample;

import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { InfoOutlined, HelpOutline } from "@material-ui/icons";
import { Card, Grid } from "@mui/material";



const TooltipExample = () => {


  return (
    <div>
      <Card style={{ padding: "20px", margin: "20px" }}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6} lg={6}>
            <Typography className=" fs_14 fw_600">
              Default Tooltip
            </Typography>
            <Tooltip title="Tooltip with default settings">
              <Button
                variant="contained"
                color="primary"
                //   className={classes.button}
              >
                Default Tooltip
              </Button>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography className=" fs_14 fw_600">
              Arrow Tooltip
            </Typography>
            <Tooltip title="Tooltip with arrow" arrow>
              <Button
                variant="contained"
                color="secondary"
                //   className={classes.button}
              >
                Arrow Tooltip
              </Button>
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
              <Button
                variant="outlined"
                color="primary"
                //   className={classes.button}
              >
                Custom Delay Tooltip
              </Button>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography className="fs_14 fw_600">
              Typography Tooltip
            </Typography>
            <Tooltip
              title={
                <Typography color="inherit">Tooltip with Typography</Typography>
              }
            >
              <Button
                variant="outlined"
                color="secondary"
                //   className={classes.button}
              >
                Typography Tooltip
              </Button>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography className=" fs_14 fw_600">
              Disabled Tooltip
            </Typography>
            <Tooltip title="Disabled Tooltip" disabled>
              <Button
                variant="contained"
                color="primary"
                //   className={classes.button}
              >
                Disabled Tooltip
              </Button>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography className=" fs_14 fw_600">
              Tooltip on icon button
            </Typography>
            <Tooltip title="Tooltip on icon button">
              <IconButton aria-label="info">
                <InfoOutlined />
              </IconButton>
            </Tooltip>
          </Grid>
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
