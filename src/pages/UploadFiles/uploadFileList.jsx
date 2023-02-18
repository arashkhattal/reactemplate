import React, { useEffect } from "react";
import UploadSingleFile from "./uploadSingleFile/uploadSingleFile";
import UploadMultiFiles from "./uploadMultiFiles/uploadMultiFiles";
import "./uploadFileList.css";
import { Typography } from "@mui/material";
import { useGlobalContext } from "../../context/globalContext";
const uploadFileList = () => {
  const { setLoading } = useGlobalContext();
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    });
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 2000);
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
        <UploadMultiFiles />
      </div>
    </div>
  );
};

export default uploadFileList;
