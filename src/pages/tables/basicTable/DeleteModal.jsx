import React from "react";
import {
  Grid,
  Card,
  TextField,
  Divider,
  Box,
  Input,
  Button,
  Typography,
} from "@mui/material";
// import { useGlobalContext } from "../../../context/globalcontext";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { useGlobalContext } from "../../../context/globalContext";

const DelModal = ({ openDeleteModal, setOpenDeleteModal }) => {
  // global function
  const { setAlert } = useGlobalContext();

  const HandleSubmit = () => {
    setAlert({
      flag: true,
      type: "success",
      msg: "Data Deleted Successfully",
    });
  };

  return (
    // modal component from mui
    <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
      {/* card component from mui  */}
      <Card className="center_modal_ui global_modal">
        {/* Typography component from mui */}
        <Typography
          className="fs_24"
          style={{
            textAlign: "center",
            padding: "10px",
          }}
        >
          Are you sure ?
        </Typography>

        <Box
          pt={3}
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <button
            className="btn_primary warning_btn "
            style={{
              color: "white",
              width: "15%",
            }}
            size="small"
            onClick={() => setOpenDeleteModal(false)}
          >
            Cancel
          </button>
          <button
            className="btn_primary btn_primary_hover"
            style={{
              color: "white",
              width: "15%",
            }}
            onClick={() => {
              HandleSubmit();
            }}
          >
            Delete
          </button>
        </Box>
      </Card>
    </Modal>
  );
};
export default DelModal;
