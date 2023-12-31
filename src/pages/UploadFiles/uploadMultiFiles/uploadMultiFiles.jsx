import { Box, Card, Modal, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import FolderImg from "../../../assets/image/dragndrop.png";

const uploadSingleFile = () => {
  // modal open and close function and store
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // get file and details
  const [projectSheet, setProjectSheet] = useState([]);
  console.log(projectSheet[0]);

  // store present File
  const [presentFile, setPresentFile] = useState([]);

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

  // filter data
  const handleDelete = (e) => {
    const filteredData = projectSheet.filter((item, index) => index !== e);
    setProjectSheet(filteredData);
  };

  // NOTE: fileUpload and check the file
  const FileInputClicked = (type) => {
    projectSheetRef.current.click();
  };
  // drag and drop file function
  const FileDrop = (e, type) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files) {
      let arrFile = [...files];
      console.log(arrFile);
      let newFile = [];
      arrFile?.forEach((t) => {
        if (t?.size > 10000000) {
          alert(`${t?.name} is larger than 10MB`);
        } else {
          newFile.push(t);
        }
      });
      setProjectSheet([...projectSheet, ...newFile]);
    }
  };

  const FileSelected = (val) => {
    console.log(val);
    if (val) {
      let arrFile = [...val];
      console.log(arrFile);
      let newFile = [];
      arrFile?.forEach((t) => {
        if (t?.size > 10000000) {
          alert(`${t?.name} is larger than 10MB`);
        } else {
          newFile.push(t);
        }
      });
      setProjectSheet([...projectSheet, ...newFile]);
    }
  };

  // for edit name
  useEffect(() => {}, [projectSheet]);

  // upload file reset
  useEffect(() => {
    if (!open) {
      setProjectSheet([]);
    }
  }, [open]);
  // upload file function
  const handleSubmit = async (e) => {
    projectSheet.map((file) => {
      console.log("File_name:", file?.name);
    });
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
          {/* after upload show name and close icon */}
          {projectSheet?.length !== 0
            ? projectSheet?.map((file, i) => (
                <div>
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
                          {" "}
                          <span
                            style={{
                              marginBottom: 1,
                            }}
                          >
                            {file?.name}
                          </span>
                        </Typography>
                      </Box>

                      <span
                        className="file-remove cp"
                        onClick={() => {
                          handleDelete(i);
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
                </div>
              ))
            : null}

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
        </Card>
      </Modal>
    </div>
  );
};

export default uploadSingleFile;
