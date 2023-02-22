import { Box, Card, Modal, Typography } from "@mui/material";
import moment from "moment/moment";

import React, { useState } from "react";
import { useGlobalContext } from "../../context/globalContext";

const DeleteEvent = ({ events, setEvents, deleteEvent, setDeleteEvent }) => {
  // global function
  const { setAlert } = useGlobalContext();
  // submit created event
  const HandleSubmit = async () => {
    let allEventsDataNow = events?.filter((a) => a?.id !== deleteEvent?.data);
    setEvents([...allEventsDataNow]);
    setAlert({
      flag: true,
      type: "success",
      msg: "Event Deleted Successfully",
    });

    setDeleteEvent(false);
  };

  console.log("ID :", deleteEvent?.data);

  return (
    <Modal
      open={deleteEvent}
      onClose={() =>
        setDeleteEvent({
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
          Are you sure ???
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
            onClick={() => setDeleteEvent(false)}
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

export default DeleteEvent;
