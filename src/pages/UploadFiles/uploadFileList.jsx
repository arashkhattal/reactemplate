import React from "react";
import UploadSingleFile from "./uploadSingleFile/uploadSingleFile";
import "./uploadFileList.css";
import { Typography } from "@mui/material";
const uploadFileList = () => {
  return (
    <div className="display_Grid ">
      <div className="border-dashed">
        <Typography
          className="fs_24"
          style={{ textAlign: "center" }}
        >
          Upload Single file
        </Typography>
        <UploadSingleFile />
      </div>
      <div className="border-dashed">
        <Typography
          className="fs_24"
          style={{ textAlign: "center" }}
        >
          Upload Multiple file
        </Typography>
      </div>
    </div>
  );
};

export default uploadFileList;
