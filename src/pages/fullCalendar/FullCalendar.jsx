import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./fullCalendar.css";
import { Card, Typography } from "@mui/material";
import CreateEvent from "./createEvent";
import { useGlobalContext } from "../../context/globalContext";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import DeleteEvent from "./DeleteModal";

const Calendar = () => {
  // default events
  const [events, setEvents] = useState([
    {
      id: 1,
      allDay: true,
      title: "Event 1",
      start: "2023-02-16",
      end: "2023-02-17",
    },
    {
      id: 2,
      allDay: false,
      title: "Event 2",
      start: "2023-02-20",
      end: "2023-02-22",
    },
  ]);
  // global function for create event modal
  const { setCreateEvent, setViewEvent } = useGlobalContext();

  // function to create event by drag (single & multiple)
  const handleDateSelect = (selectInfo) => {
    console.log(selectInfo);
    console.log(selectInfo.startStr);
    const title = prompt("Please enter a title for your event");
    if (title) {
      const newEvent = {
        id: events.length + 1,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      };

      setEvents([...events, newEvent]);
    }
  };

  return (
    <div>
      <CreateEvent events={events} setEvents={setEvents} />
      <ViewModal />
      <EditModal events={events} setEvents={setEvents} />
      <DeleteEvent events={events} setEvents={setEvents}/>
      {/* card component from mui  */}
      <Card
        style={{
          padding: "20px",
          margin: "20px",
        }}
        className="test"
      >
        {/* <button onClick={handleDateSelect}>Create Event</button> */}

        {/* Typography component from MUI  */}
        <Typography
          className="global_display_flex fs_24 fw_600"
          style={{ marginBottom: "10px" }}
        >
          Full Calendar
        </Typography>
        {/* full calendar component  */}
        <FullCalendar
          aspectRatio={2}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          dayMaxEvents={2}
          initialView="dayGridMonth"
          selectable={true}
          events={events}
          select={handleDateSelect}
          editable={true}
          droppable={true}
          eventClick={(e) =>
            setViewEvent({
              state: true,
              data: e,
            })
          }
          customButtons={{
            myCustomButton: {
              text: "Create Event",
              class: "btn-sm",
              click: function () {
                setCreateEvent(true);
              },
            },
          }}
          headerToolbar={{
            start: "prev,next today",
            center: "title",
            end: "myCustomButton dayGridMonth,timeGridWeek,timeGridDay",
          }}
          views={{
            dayGridDay: {
              type: "dayGrid",
              duration: { days: 1 },
            },
            timeGridWeek: {
              type: "timeGrid",
              duration: { weeks: 1 },
            },
          }}
        />
      </Card>
    </div>
  );
};

export default Calendar;
