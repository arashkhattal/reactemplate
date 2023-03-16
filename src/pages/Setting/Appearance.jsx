import {
  Button,
  Card,
  Divider,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Setting = () => {
  const sidenavColors = [
    "info",
    "success",
    "warning",
    "error",
  ];
  return (
    <div>
      <Card className="global_card">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
          pb={0.5}
          px={3}
        >
          <Box>
            <Typography variant="h5">Theme UI Configurator</Typography>
            <Typography variant="body2" color="text">
              See our dashboard options.
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mx: 2.5, position: "relative", zIndex: "3" }} />
        <Box>


          <Box mb={0.5} mt={3} ml={1}>
            {sidenavColors.map((color) => (
              // <Button
              //   key={color}
              //
              // />
              <Button variant="contained" color={color}
               style={{
                  width: "24px",
                  height: "24px",
                  marginLeft: 11,
                  border: "1px solid #000",
                }}
                // onClick={() => setSidenavColor(dispatch, color)}
              ></Button>
            ))}
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default Setting;
