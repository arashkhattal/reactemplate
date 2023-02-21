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

const EditCalender = () => {
  const { setEditEvent, editEvent, calenderEdit } = useGlobalContext();

  const [taskSubject, setTaskSubject] = useState("");

  const [taskStartdate, setTaskStartDate] = useState("");
  const [taskEnddate, setTaskEndDate] = useState("");
  const [taskStartTime, setTaskStartTime] = useState("");
  const [taskEndTime, setTaskEndTime] = useState("");
  const [activeEndDate, setActiveEndDate] = useState(false);
  const [activeStartDate, setActiveStartDate] = useState(false);
  const [activeEndTime, setActiveEndTime] = useState(false);
  const [activeStartTime, setActiveStartTime] = useState(false);

  const [checked, setChecked] = useState(false);

  const [senderData, setSenderData] = useState([]);

  //   const addData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axiosInstance.post(`/backend/update_event`, {
  //         id: calenderEdit?.data?._def?.publicId,
  //         title: taskSubject,
  //         description: desc,
  //         startStr: checked
  //           ? moment(taskStartdate, "YYYY-MM-DD").utc().format()
  //           : moment(taskStartdate + "T" + taskStartTime)
  //               .utc()
  //               .format(),
  //         endStr: checked
  //           ? moment(taskEnddate, "YYYY-MM-DD").add(1, "days").utc().format()
  //           : moment(taskEnddate + "T" + taskEndTime)
  //               .utc()
  //               .format(),
  //         allDay: checked,
  //         editable: true,
  //         durationEditable: true,
  //         display: "auto",
  //         overlap: true,
  //         extendedProps: {
  //           attendees: filterUser,
  //           url: url,
  //         },
  //       });
  //       if (response.status === 200) {
  //         setAlert({
  //           flag: true,
  //           type: "success",
  //           msg: response?.data?.msg,
  //         });
  //         setReload(reload + 1);
  //       } else if (response?.status === 203) {
  //         handle203(response);
  //       }
  //     } catch (error) {
  //       setAlert({
  //         flag: true,
  //         type: "error",
  //         msg: "Something went wrong. Please try again",
  //       });
  //     } finally {
  //       setTaskSubject("");
  //       setTaskStartDate("");
  //       setTaskEndDate("");
  //       setTaskStartTime("");
  //       setTaskEndTime("");
  //       setActiveEndDate(false);
  //       setActiveStartDate(false);
  //       setAddModalTask(false);
  //       setCalenderEdit({
  //         state: false,
  //         data: null,
  //       });
  //       setAddCalenderView({ state: false });
  //       setLoading(false);
  //     }
  //   };

  useEffect(() => {
    if (editEvent?.state) {
      let data = editEvent?.data;
      setTaskSubject(data?._def?.title);

      // format : 2023-02-03T18:42
      // setTaskStartDate(data?._instance?.range?.start);
      // setTaskEndDate(data?._instance?.range?.end);

      // setTaskStartDate(
      //   moment(data?._instance?.range?.start).format("YYYY-MM-DD")
      // );
      // setTaskEndDate(
      //   moment(data?._instance?.range?.end).format("YYYY-MM-DD")
      // );
      // setTaskStartTime(
      //   moment(data?._instance?.range?.start).format("HH:mm")
      // );
      // setTaskEndTime(
      //   moment(data?._instance?.range?.end).format("HH:mm")
      // );

      if (editEvent?.data?.allDay) {
        if (editEvent?.data?.dateStr) {
          setTaskStartDate(editEvent?.data?.dateStr);
          setTaskEndDate(editEvent?.data?.dateStr);
        } else {
          setTaskStartDate(editEvent?.data?.startStr);
          setTaskEndDate(
            moment(editEvent?.data?.endStr, "YYYY-MM-DD")
              .subtract(1, "days")
              .format("YYYY-MM-DD")
          );
        }
        setTaskEndTime("");
        setTaskStartTime("");
        setChecked(true);
      } else {
        setChecked(false);
        setTaskStartDate(
          moment(editEvent?.data?.startStr).format("YYYY-MM-DD")
        );
        setTaskEndDate(moment(editEvent?.data?.endStr).format("YYYY-MM-DD"));
        setTaskStartTime(moment(editEvent?.data?.startStr).format("HH:mm"));
        setTaskEndTime(moment(editEvent?.data?.endStr).format("HH:mm"));
      }
      setChecked(data?._def?.allDay);
    }
  }, [editEvent?.state, editEvent?.data]); //eslint-disable-line react-hooks/exhaustive-deps

  const getSenderName = (option) => {
    let dataNow = senderData?.filter(
      (s) => s?.customer_user_email_id === option
    );
    if (dataNow?.length > 0) {
      return dataNow[0]?.customer_user_full_name + " -";
    } else return "";
  };

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

  const HandleSubmit = async () => {
    if (taskSubject === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Event Event Name",
      });
      return;
    } else {
      if (taskSubject) {
        const newEvent = {
          id: events.length + 1,
          title: taskSubject,
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
      setTaskSubject("");
      setEventStart(null);
      setEventEnd(null);
      setChecked(false);
    }
    setEditEvent(false);
  };

  return (
    <Modal
      open={editEvent?.state}
      onClose={() =>
        setEditEvent({
          state: false,
          data: null,
        })
      }
    >
      <Card sx={style}>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
          }}
          fontWeight="medium"
        >
          Edit Event
        </Typography>
        <Divider
          sx={{
            mx: 0,
            position: "relative",
            zIndex: "3",
          }}
        />
        <Grid container spacing={3}>
          <Grid item xs={12} md={10}>
            <Input
              fullWidth
              required
              type="text"
              label="Title"
              value={taskSubject}
              onChange={(e) => setTaskSubject(e.target.value)}
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
              required
              type={activeStartDate ? "date" : "text"}
              inputProps={{
                min: getCurrentDate(),
                max: taskEnddate,
              }}
              sx={{
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#DC6C43",
                },
                "& .MuiInputBase-root": {
                  "& fieldset": {},
                  "&.Mui-focused fieldset": {
                    borderColor: "#DC6C43",
                  },
                },
                width: "100%",
              }}
              onFocus={() => setActiveStartDate(true)}
              onBlur={() => setActiveStartDate(false)}
              label="Start Date"
              value={
                activeStartDate ? taskStartdate : getformatedDate(taskStartdate)
              }
              onChange={(e) => setTaskStartDate(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              type={activeEndDate ? "date" : "text"}
              inputProps={{
                min: taskStartdate ? taskStartdate : getCurrentDate(),
              }}
              onFocus={() => setActiveEndDate(true)}
              onBlur={() => setActiveEndDate(false)}
              label="End Date"
              value={activeEndDate ? taskEnddate : getformatedDate(taskEnddate)}
              onChange={(e) => setTaskEndDate(e.target.value)}
            />
          </Grid>
          {checked ? (
            ""
          ) : (
            <>
              {/* <Grid item xs={12} md={6}>
                <TextField
                  format={"HH:mm"}
                  required
                  type={activeStartTime ? "time" : "text"}
                  // inputProps={{
                  //   min: taskStartdate
                  //     ? taskStartdate
                  //     : getFormatedDate(taskEnddate),
                  // }}
                  sx={{
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#DC6C43",
                    },
                    "& .MuiInputBase-root": {
                      "& fieldset": {},
                      "&.Mui-focused fieldset": {
                        borderColor: "#DC6C43",
                      },
                    },
                    width: "100%",
                  }}
                  onFocus={() => setActiveStartTime(true)}
                  onBlur={() => setActiveStartTime(false)}
                  label="Start Time"
                  value={
                    activeStartTime
                      ? taskStartTime
                      : taskStartTime !== ""
                      ? moment(taskStartTime, "HH:mm").format("LT")
                      : ""
                  }
                  onChange={(e) => setTaskStartTime(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  required
                  type={activeEndTime ? "time" : "text"}
                  // inputProps={{
                  //   min: taskEnddate
                  //     ? taskEnddate
                  //     : getFormatedDate(taskEnddate),
                  // }}
                  sx={{
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#DC6C43",
                    },
                    "& .MuiInputBase-root": {
                      "& fieldset": {},
                      "&.Mui-focused fieldset": {
                        borderColor: "#DC6C43",
                      },
                    },
                    width: "100%",
                  }}
                  onFocus={() => setActiveEndTime(true)}
                  onBlur={() => setActiveEndTime(false)}
                  label="End Time"
                  value={
                    activeEndTime
                      ? taskEndTime
                      : taskEndTime !== ""
                      ? moment(taskEndTime, "HH:mm").format("LT")
                      : ""
                  }
                  onChange={(e) => setTaskEndTime(e.target.value)}
                />
              </Grid> */}
              <Grid item xs={12} md={6}>
                <TimePicker
                  label="Start Time"
                  required={true}
                  value={taskStartTime}
                  onChange={(e) => setTaskStartTime(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TimePicker
                  label="End Time"
                  required={true}
                  value={taskEndTime}
                  onChange={(e) => setTaskEndTime(e.target.value)}
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
          }}
        >
          <Button
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
          </Button>
          <Button
            className="sendbtn1"
            size="small"
            sx={boxSX}
            onClick={() => {
              HandleSubmit();
            }}
          >
            Save
          </Button>
        </Box>
      </Card>
    </Modal>
  );
};
export default EditCalender;
