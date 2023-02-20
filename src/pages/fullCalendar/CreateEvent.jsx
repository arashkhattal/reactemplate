import {
  Box,
  Card,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { useGlobalContext } from "../../context/globalContext";

const CreateEvent = () => {
  // store chat name
  const [event, setEvent] = useState("");
  // global function
  const {
    createEvent,
    setCreateEvent,
    setAlert,
  } = useGlobalContext();
  // submit created chat
  const HandleSubmit = async () => {
    if (event === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Event Event Name",
      });
      return;
    } else {
      setAlert({
        flag: true,
        type: "success",
        msg: "Event Created Successfully",
      });
    }
    setCreateEvent(false);
  };

  return (
    <Modal
      open={createEvent}
      onClose={() => setCreateEvent(false)}
    >
      <Card className="center_modal_ui ">
        <Typography
          className="fs_24"
          style={{
            textAlign: "center",
            padding: "10px",
          }}
        >
          Create Event
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              required
              type="text"
              label="Create Event"
              value={event}
              onChange={(e) =>
                setEvent(e.target.value)
              }
            />
          </Grid>
        </Grid>
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
            onClick={() => setCreateEvent(false)}
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
            Save
          </button>
        </Box>
      </Card>
    </Modal>
  );
};

export default CreateEvent;
