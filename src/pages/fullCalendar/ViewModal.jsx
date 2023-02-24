import React from "react";
import { Grid, Card, Divider, Icon, Typography, Box } from "@mui/material";
import moment from "moment";

import { useGlobalContext } from "../../context/globalContext";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";

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
  setDelEvent,
}) => {

  // states to store event data
  const [taskSubject, setTaskSubject] = useState("");

  const [taskStartdate, setTaskStartDate] = useState("");
  const [taskEnddate, setTaskEndDate] = useState("");

  const [checked, setChecked] = useState(false);

  // useeffect to prefill event data
  useEffect(() => {
    if (viewEvent?.state) {
      let data = viewEvent?.data;
      console.log("data:", data);
      setTaskSubject(data?.event?._def?.title);
      setTaskStartDate(data?.event?._instance?.range?.start);
      setTaskEndDate(data?.event?._instance?.range?.end);
      setChecked(data?.event?._def?.allDay);
    }
  }, [viewEvent?.state]); //eslint-disable-line react-hooks/exhaustive-deps



  const newEndDate = moment(taskEnddate).format("YYYY/MM/DD");
  console.log(moment(newEndDate).format("MMMM Do YYYY, 11:30"));

  return (
    // modal component from mui
    <Modal
      open={viewEvent?.state}
      onClose={() => setViewEvent({ state: false, data: null })}
    >
      {/* card component from mui  */}
      <Card sx={style}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            {/* Typography component from mui */}
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
                setDelEvent({
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
        {/* grid component from mui */}
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
