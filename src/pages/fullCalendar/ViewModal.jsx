import React from "react";
import {
  Grid,
  Card,
  Divider,
  Icon,
  Typography,
  Box,
  //   TextField,
  //   Chip,
  //   Box,
  //   Autocomplete,
} from "@mui/material";
import moment from "moment";

import { useGlobalContext } from "../../context/globalContext";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";

// import { CopyToClipboard } from "react-copy-to-clipboard";
// import axiosInstance from "helper/axiosInstance";
// import { validateEmail } from "helper/globalFunction";

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

const viewCalender = ({
  viewEvent,
  setViewEvent,
  setEditEvent,
  setDeleteEvent,
}) => {
  const [taskSubject, setTaskSubject] = useState("");

  const [taskStartdate, setTaskStartDate] = useState("");
  const [taskEnddate, setTaskEndDate] = useState("");

  const [checked, setChecked] = useState(false);

  //   const fetchSenderList = async () => {
  //     try {
  //       const response = await axiosInstance.get(
  //         `/backend/dropdown_user_For_compose`
  //       );

  //       if (response?.status === 200) {
  //         setSenderData(response?.data?.data);
  //       } else if (response?.status === 203) {
  //         handle203(response);
  //       }
  //     } catch (error) {
  //       setAlert({
  //         flag: true,
  //         type: "error",
  //         msg: "Something went wrong! please try again",
  //       });
  //     }
  //   };

  //   const getSenderName = (option) => {
  //     let dataNow = senderData?.filter(
  //       (s) => s?.customer_user_email_id === option
  //     );
  //     if (dataNow?.length > 0) {
  //       return dataNow[0]?.customer_user_full_name + " -";
  //     } else return "";
  //   };

  // Copy to clipboard

  //   const coptText = (e) => {
  //     setAlert({
  //       flag: true,
  //       type: "success",
  //       msg: "Copied to clipboard",
  //     });
  //   };

  useEffect(() => {
    if (viewEvent?.state) {
      let data = viewEvent?.data;
      console.log("data:", data);
      setTaskSubject(data?.event?._def?.title);
      setTaskStartDate(data?.event?._instance?.range?.start);
      setTaskEndDate(data?.event?._instance?.range?.end);
      //   setUrl(data?.event?._def?.extendedProps?.url);
      //   setDesc(
      //     data?.event?._def?.extendedProps?.description.length > 0
      //       ? data?.event?._def?.extendedProps?.description
      //       : "No Description..."
      //   );
      //   let fromArr = [];
      //   data?.event?._def?.extendedProps?.attendees.forEach((t) => {
      //     fromArr?.push(t?.email);
      //   });
      //   setEventUser([...fromArr]);

      setChecked(data?.event?._def?.allDay);
    }
  }, [viewEvent?.state]); //eslint-disable-line react-hooks/exhaustive-deps

  const getFormatedString = (line) => {
    if (line.length > 42) {
      return line.substring(0, 55) + ".....";
    } else {
      return line;
    }
  };

  const newEndDate = moment(taskEnddate).format("YYYY/MM/DD");
  console.log(moment(newEndDate).format("MMMM Do YYYY, 11:30"));

  return (
    <Modal
      open={viewEvent?.state}
      onClose={() => setViewEvent({ state: false, data: null })}
    >
      <Card sx={style}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              style={{
                fontSize: "24px",
              }}
              fontWeight="medium"
            >
              Event
            </Typography>
          </Box>
          <Box>
            <Icon
              fontSize="small"
              onClick={() => {
                setEditEvent({
                  state: true,
                  data: viewEvent?.data?.event,
                });
                setViewEvent({ state: false, data: null });
              }}
              sx={{ cursor: "pointer" }}
            >
              edit
            </Icon>
            <Icon
              fontSize="small"
              onClick={() => {
                setDeleteEvent({
                  state: true,
                  data: viewEvent?.data?.event?._def?.publicId,
                });
                setViewEvent({ state: false, data: null });
              }}
              sx={{
                color: "#f95770",
                marginLeft: 2,
                cursor: "pointer",
              }}
            >
              delete
            </Icon>
            <Icon
              fontSize="small"
              sx={{ ml: 2, cursor: "pointer" }}
              onClick={() => {
                setViewEvent({ state: false, data: null });
              }}
            >
              close
            </Icon>
          </Box>
        </Box>

        <Divider
          sx={{
            mx: 0,
            my: 3,
            position: "relative",
            zIndex: "3",
          }}
        />
        <Grid container spacing={3}>
          <Grid item xs={12} md={2.5}>
            <Typography
              style={{
                fontSize: "15px",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              Title :
            </Typography>
          </Grid>
          <Grid item xs={12} md={9.5}>
            <Typography
              style={{
                fontSize: "14.5px",
                marginTop: "10px",
                borderBottom: "1px solid lightgrey",
              }}
            >
              {taskSubject}
            </Typography>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Typography
              style={{
                fontSize: "14.5px",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              Start Date :
            </Typography>
          </Grid>
          <Grid item xs={12} md={3.5}>
            <Typography
              style={{
                fontSize: "15px",
                marginTop: "10px",
                borderBottom: "1px solid lightgrey",
              }}
            >
              {checked
                ? moment(taskStartdate).utc().format("MMMM Do YYYY")
                : moment(taskStartdate).utc().format("MMMM Do YYYY, h:mm a")}
            </Typography>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Typography
              style={{
                fontSize: "14.5px",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              End Date :
            </Typography>
          </Grid>
          <Grid item xs={12} md={3.5}>
            <Typography
              style={{
                fontSize: "15px",
                marginTop: "10px",
                borderBottom: "1px solid lightgrey",
              }}
            >
              {checked
                ? moment(newEndDate).utc().format("MMMM Do YYYY")
                : moment(taskEnddate).utc().format("MMMM Do YYYY, h:mm a")}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Modal>
  );
};
export default viewCalender;
