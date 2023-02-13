import { Typography } from '@mui/material';
import React from 'react'

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h2">Home Page</Typography>
    </div>
  );
}

export default HomePage