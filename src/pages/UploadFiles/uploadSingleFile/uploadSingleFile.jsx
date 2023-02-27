import {
  Box,
  Card,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { fileSize } from "../../../helpers/globalFunction";
import FolderImg from "../../../assets/image/dragndrop.png";

const uploadSingleFile = () => {
  // modal open and close function and store
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // get file and details
  const [projectSheet, setProjectSheet] =
    useState([]);
  // store the file name and edit
  const [uploadFileName, setUploadFileName] =
    useState("");
  // store file type name
  const [fileType, setFileType] = useState("");
  // reference a value that’s not needed for rendering.
  const projectSheetRef = useRef();
  // drag file
  const dragOver = (e) => {
    e.preventDefault();
  };
  const dragEnter = (e) => {
    e.preventDefault();
  };
  const dragLeave = (e) => {
    e.preventDefault();
  };

  // NOTE: fileUpload and check the file
  const FileInputClicked = (type) => {
    projectSheetRef.current.click();
  };
  const FileDrop = (e, type) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      let file = files[0];
      setProjectSheet([file]);
    }
  };
  // select the file
  const FileSelected = (val, type) => {
    if (val) {
      // upload check
      let file = val[0];
      setProjectSheet([file]);
    }
  };
  // upload file reset
  useEffect(() => {
    if (!open) {
      setProjectSheet([]);
    }
  }, [open]);
  // upload file function
  const handleSubmit = async (e) => {
    console.log(
      "File_name:",
      `${uploadFileName}.${fileType}`
    );
    console.log(
      "File_size:",
      fileSize(projectSheet[0]?.size)
    );
    console.log("File_Type:", fileType);
    setOpen(false);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          className="btn_primary btn_primary_hover"
          style={{
            color: "white",
            marginTop: "30px",
            width: "30%",
          }}
          onClick={handleOpen}
        >
          Upload File
        </button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Card className="upload_ui_design global_modal">
          <Typography
            className="fs_24"
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
            fontWeight="medium"
          >
            Upload File
          </Typography>
          {/* file select and drag and drop area */}
          {projectSheet?.length === 0 ? (
            <section className="combine_section_input_group">
              <>
                <section
                  className="file_upload_section"
                  onDragOver={dragOver}
                  onDragEnter={dragEnter}
                  onDragLeave={dragLeave}
                  onDrop={(e) => FileDrop(e, "file")}
                  onClick={() => FileInputClicked("file")}
                >
                  <img alt="" src={FolderImg} className="drag_img" />
                  <Typography variant="h6" className="drag_test">
                    {" "}
                    Drag and Drop your file here <br /> <u>or</u>
                  </Typography>

                  <input
                    ref={projectSheetRef}
                    style={{
                      display: "none",
                    }}
                    type="file"
                    // accept=".xlsx, .xls .csv"
                    multiple
                    onChange={() =>
                      FileSelected(projectSheetRef.current.files, "file")
                    }
                  />
                </section>

                <Typography
                  onClick={(e) => FileInputClicked("file")}
                  variant="p"
                  className="browser_text"
                >
                  Browse file from device
                </Typography>
              </>
            </section>
          ) : null}
          {/* after upload show name and close icon */}
          {projectSheet?.length !== 0 && projectSheet[0]?.size < 10000000 ? (
            <Box className="upload_complete" my={1}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    className="fs_16"
                    sx={{
                      display: "flex",
                      gap: "3px",
                    }}
                  >
                    <span style={{ marginBottom: 1 }}>
                      {projectSheet[0]?.name}
                    </span>
                  </Typography>
                </Box>

                <span
                  className="file-remove cp"
                  onClick={() => {
                    setProjectSheet([]);
                  }}
                  style={{
                    color: "red",
                    marginLeft: "20px",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                >
                  X
                </span>
              </div>
            </Box>
          ) : null}

          {/* if the file size is bigger then 10 mb it will show warning */}
          {projectSheet[0]?.size > 10000000 ? (
            <Box className="upload_error" my={1}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box style={{ display: "flex" }}>
                  <Typography className="fs_14 fw_400">
                    Upload limit is 10 MB.
                    <br /> Please resize and try again!
                  </Typography>
                </Box>
                <div>
                  <button
                    type="submit"
                    style={{
                      color: "white",
                      padding: "7px 12px 7px 12px",
                    }}
                    onClick={() => {
                      setProjectSheet([]);
                    }}
                    className="btn_primary warning_btn "
                    value="Upload"
                  >
                    <Typography>Try again</Typography>
                  </button>
                </div>
              </div>
            </Box>
          ) : (
            <Box
              pt={3}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "350px",
              }}
            >
              <button
                type="submit"
                style={{
                  color: "white",
                }}
                onClick={handleClose}
                className="btn_primary warning_btn"
                value="Cancel"
              >
                <Typography>Cancel</Typography>
              </button>
              <button
                type="submit"
                style={{
                  color: "white",
                }}
                onClick={() => {
                  handleSubmit();
                }}
                className="btn_primary btn_primary_hover "
                value="Upload"
              >
                <Typography>Upload File</Typography>
              </button>
            </Box>
          )}
        </Card>
      </Modal>
    </div>
  );
};

export default uploadSingleFile;
