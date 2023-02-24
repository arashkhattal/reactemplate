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
import moment from "moment";
import { useGlobalContext } from "../../context/globalContext";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
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

const EditCalender = ({ events, setEvents, editEvent, setEditEvent }) => {
  const { setAlert } = useGlobalContext();

  // store event info
  const [event, setEvent] = useState("");
  const [eventStart, setEventStart] = useState(null);
  const [eventEnd, setEventEnd] = useState(null);
  const [checked, setChecked] = useState(false);
  const [eventStartTime, setEventStartTime] = useState(null);
  const [eventEndTime, setEventEndTime] = useState(null);
  const [activeEndDate, setActiveEndDate] = useState(false);
  const [activeStartDate, setActiveStartDate] = useState(false);

  // useeffect to prefill the data in modal
  useEffect(() => {
    if (editEvent?.state) {
      let data = editEvent?.data;
      console.log(editEvent?.data?._def?.publicId);
      setEvent(data?._def?.title);
      if (editEvent?.data?.allDay) {
        if (editEvent?.data?.dateStr) {
          setEventStart(editEvent?.data?.dateStr);
          setEventEnd(editEvent?.data?.dateStr);
        } else {
          setEventStart(editEvent?.data?.startStr);
          setEventEnd(
            moment(editEvent?.data?.endStr, "YYYY-MM-DD")
              .subtract(1, "days")
              .format("YYYY-MM-DD")
          );
        }
        setEventStartTime("");
        setEventEndTime("");
        setChecked(true);
      } else {
        setChecked(false);
        setEventStart(moment(editEvent?.data?.startStr).format("YYYY-MM-DD"));
        setEventEnd(moment(editEvent?.data?.endStr).format("YYYY-MM-DD"));
        setEventStartTime(moment(editEvent?.data?.startStr).format("HH:mm"));
        setEventEndTime(moment(editEvent?.data?.endStr).format("HH:mm"));
      }
      setChecked(data?._def?.allDay);
    }
  }, [editEvent?.state, editEvent?.data]); //eslint-disable-line react-hooks/exhaustive-deps

  // function to edit the event

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
          id: editEvent?.data?._def?.publicId,
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
    setEditEvent(false);
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
    // modal component from mui
    <Modal
      open={editEvent?.state}
      onClose={() =>
        setEditEvent({
          state: false,
          data: null,
        })
      }
    >
      {/* card component from mui  */}
      <Card className="center_modal_ui ">
        {/* Typography component from mui */}
        <Typography
          className="fs_24"
          style={{
            textAlign: "center",
            padding: "10px",
          }}
        >
          Edit Event
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
            onClick={() =>
              setEditEvent({
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
            Save
          </button>
        </Box>
      </Card>
    </Modal>
  );
};
export default EditCalender;
