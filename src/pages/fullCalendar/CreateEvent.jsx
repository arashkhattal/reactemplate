import { Box, Card, Grid, Modal, TextField, Typography } from "@mui/material";
import moment from "moment/moment";
import TimePicker from "../../components/timePicker/TimePicker";

import React, { useState } from "react";
import { useGlobalContext } from "../../context/globalContext";

const CreateEvent = ({ events, setEvents }) => {
  // store event info
  const [event, setEvent] = useState("");
  const [eventStart, setEventStart] = useState(null);
  const [eventEnd, setEventEnd] = useState(null);
  const [checked, setChecked] = useState(false);
  const [eventStartTime, setEventStartTime] = useState(null);
  const [eventEndTime, setEventEndTime] = useState(null);

  // global function
  const { createEvent, setCreateEvent, setAlert } = useGlobalContext();
  // submit created event
  const HandleSubmit = async () => {
    if (event === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Event Event Name",
      });
      return;
    } else {
      if (event) {
        const newEvent = {
          id: events.length + 1,
          title: event,
          allDay: checked,
          start: checked
            ? moment(eventStart, "YYYY-MM-DD").utc().format()
            : moment(eventStart + "T" + eventStartTime)
                .utc()
                .format(),
          end: checked
            ? moment(eventEnd, "YYYY-MM-DD").add(1, "days").utc().format()
            : moment(eventEnd + "T" + eventEndTime)
                .utc()
                .format(),
        };
        setEvents([...events, newEvent]);
      }
      setAlert({
        flag: true,
        type: "success",
        msg: "Event Created Successfully",
      });
      setEvent("");
      setEventStart(null);
      setEventEnd(null);
      setChecked(false);
    }
    console.log("arash :", events);
    setCreateEvent(false);
  };

  return (
    <Modal open={createEvent} onClose={() => setCreateEvent(false)}>
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
          <Grid item xs={12} md={10}>
            <TextField
              fullWidth
              required
              type="text"
              label="Create Event"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={2} style={{ marginTop: "10px" }}>
            <Typography style={{ fontSize: "14px" }}>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => {
                  setChecked(!checked);
                }}
              />
              &nbsp;All Day
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              type="date"
              label="Start Date"
              value={eventStart}
              onChange={(e) => setEventStart(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              type="date"
              label="End Date"
              value={eventEnd}
              onChange={(e) => setEventEnd(e.target.value)}
            />
          </Grid>
          {checked ? (
            ""
          ) : (
            <>
              <Grid item xs={12} md={6}>
                <TimePicker
                  label="Start Time"
                  required={true}
                  value={eventStartTime}
                  onChange={(e) => setEventStartTime(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TimePicker
                  label="End Time"
                  required={true}
                  value={eventEndTime}
                  onChange={(e) => setEventEndTime(e.target.value)}
                />
              </Grid>
            </>
          )}
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
