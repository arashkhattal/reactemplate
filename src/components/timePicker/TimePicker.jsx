import React from "react";
import moment from "moment";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const TimePicker = ({ label, required, value, onChange }) => {
  const timeOptions = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 2; j++) {
      const hour = i < 10 ? `0${i}` : i;
      const minute = j === 0 ? "00" : "30";
      timeOptions.push({
        label: moment(`${hour}:${minute}`, "HH:mm").format("hh:mm A"),
        value: `${hour}:${minute}`,
      });
    }
  }

  return (
    <>
      <FormControl
        fullWidth
        required={required}
      >
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          style={{
            height: 43,
          }}
          autoWidth
          label="Manger"
          MenuProps={{
            style: {
              maxHeight: 400,
            },
          }}
          value={value}
          onChange={onChange}
        >
          {timeOptions.map((time) => (
            <MenuItem key={time?.value} value={time?.value}>
              {time?.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default TimePicker;
