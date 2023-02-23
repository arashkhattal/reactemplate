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
import { useGlobalContext } from "../../context/globalContext";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";

const DelEventModal = ({ events, setEvents, delEvent, setDelEvent }) => {
  // global function
  const { setAlert } = useGlobalContext();

  // submit created event
  const HandleSubmit = async () => {
    let allEventsDataNow = events?.filter((a) => a?.id !== delEvent?.data);
    setEvents([...allEventsDataNow]);
    setAlert({
      flag: true,
      type: "success",
      msg: "Event Deleted Successfully",
    });

    setDelEvent({
      state: false,
      data: null,
    });
  };

  return (
    <Modal
      open={delEvent?.state}
      onClose={() =>
        setDelEvent({
          state: false,
          data: null,
        })
      }
    >
      <Card className="center_modal_ui ">
        <Typography
          className="fs_24"
          style={{
            textAlign: "center",
            padding: "10px",
          }}
        >
          Delete Event
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
            onClick={() =>
              setDelEvent({
                state: false,
                data: null,
              })
            }
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
export default DelEventModal;
