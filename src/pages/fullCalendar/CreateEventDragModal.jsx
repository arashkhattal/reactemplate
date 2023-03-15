import React from "react";
import {
  Grid,
  Card,
  TextField,
  Divider,
  Autocomplete,
  Box,
  Chip,
  Typography,
} from "@mui/material";
import moment from "moment";

import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { useGlobalContext } from "../../context/globalContext";
import { getCurrentDate } from "../../helpers/globalFunction";
import TimePicker from "../../components/timePicker/TimePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  maxWidth: "600px",
  maxHeight: "95vh",
  overflow: "auto",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};
const boxSX = {
  background: "#DC6C43",
  color: "#ffffff",
  "&:hover": {
    color: "#ffffff",
    backgroundColor: "#e37a54",
  },
};

const CreateEventDragModal = ({
  events,
  setEvents,
  createEventDrag,
  setCreateEventDrag,
}) => {

  useEffect(() => {
    if (createEventDrag?.state && createEventDrag?.data) {
      if (createEventDrag?.data?.allDay) {
        if (createEventDrag?.data?.dateStr) {
          setEventStart(createEventDrag?.data?.dateStr);
          setEventEnd(createEventDrag?.data?.dateStr);
        } else {
          setEventStart(createEventDrag?.data?.startStr);
          setEventEnd(
            moment(createEventDrag?.data?.endStr, "YYYY-MM-DD")
              .subtract(1, "days")
              .format("YYYY-MM-DD")
          );
        }
        setChecked(true);
      } else {
        setChecked(false);
        setEventStart(
          moment(createEventDrag?.data?.startStr).format("YYYY-MM-DD")
        );
        setEventEnd(moment(createEventDrag?.data?.endStr).format("YYYY-MM-DD"));
        setEventStartTime(
          moment(createEventDrag?.data?.startStr).format("HH:mm")
        );
        setEventEndTime(moment(createEventDrag?.data?.endStr).format("HH:mm"));
      }
    }
  }, [createEventDrag?.data, createEventDrag?.state]); //eslint-disable-line react-hooks/exhaustive-deps

  // function to create event by drag (single & multiple)
  const handleDateSelect = (selectInfo) => {
    console.log(selectInfo);
    console.log(selectInfo.startStr);
    const title = prompt("Please enter a title for your event");
    if (title) {
      const newEvent = {
        id: (events.length + 1).toString(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      };

      setEvents([...events, newEvent]);
    }
  };

  // store event info
  const [event, setEvent] = useState("");
  const [eventStart, setEventStart] = useState(null);
  const [eventEnd, setEventEnd] = useState(null);
  const [checked, setChecked] = useState(false);
  const [eventStartTime, setEventStartTime] = useState(null);
  const [eventEndTime, setEventEndTime] = useState(null);
  const [activeEndDate, setActiveEndDate] = useState(false);
  const [activeStartDate, setActiveStartDate] = useState(false);

  // global function
  const { setAlert } = useGlobalContext();

  // function to create event
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
          id: (events.length + 1).toString(),
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
    setCreateEventDrag(false);
  };

  // function for specific date format
  const getformatedDate = (date) => {
    if (date === null || date === "") return "";
    var dateObj = moment(date).utc().toDate();
    if (JSON.stringify(dateObj) !== "Invalid Date") {
      var month = dateObj.getMonth() + 1; //months from 1-12
      var day = dateObj.getDate();
      var year = dateObj.getFullYear();
      if (month < 10) {
        month = `0${month}`;
      }
      if (day < 10) {
        day = `0${day}`;
      }
      return day + "/" + month + "/" + year;
    } else {
      return "";
    }
  };

  return (
    <Modal
      open={createEventDrag?.state}
      onClose={() => setCreateEventDrag({ state: false, data: null })}
    >
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
          Create Event
        </Typography>
        {/* grid component from mui */}

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
              type={activeStartDate ? "date" : "text"}
              inputProps={{
                min: getCurrentDate(),
                max: eventEnd,
              }}
              fullWidth
              required
              onFocus={() => setActiveStartDate(true)}
              onBlur={() => setActiveStartDate(false)}
              label="Start Date"
              value={activeStartDate ? eventStart : getformatedDate(eventStart)}
              onChange={(e) => setEventStart(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              inputProps={{
                min: eventStart ? eventStart : getCurrentDate(),
              }}
              type={activeEndDate ? "date" : "text"}
              onFocus={() => setActiveEndDate(true)}
              onBlur={() => setActiveEndDate(false)}
              label="End Date"
              value={activeEndDate ? eventEnd : getformatedDate(eventEnd)}
              onChange={(e) => setEventEnd(e.target.value)}
            />
          </Grid>
          {/* condition to display time based on all day check box  */}
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
            onClick={() => setCreateEventDrag({ state: false, data: null })}
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
export default CreateEventDragModal;
