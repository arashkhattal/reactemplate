import {
  Autocomplete,
  Box,
  Card,
  Checkbox,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

import React, { useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { validateEmail, validatePhone } from "./../../helpers/globalFunction";

// dummy data
const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
//  dummy names
const allName = ["Chinmy", "Jabed", "Arash"];

// multiple select with delete button dummy data
const multiData = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
  },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];
// calculation of multiple select
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FormatInputFormModal = ({ formatInputModal, setFormatInputModal }) => {
  // store current password
  const [text, setText] = useState("");
  // store new password
  const [password, setPassword] = useState("");
  // store email item
  const [email, setEmail] = useState("");
  // store url item
  const [url, setUrl] = useState("");
  // store search item
  const [search, setSearch] = useState("");
  // store tel item
  const [tel, setTel] = useState("");
  // store number item
  const [number, setNumber] = useState("");
  // store date item
  const [date, setDate] = useState("");
  // store time item
  const [time, setTime] = useState("");
  // store DAtetime item
  const [dateTime, setDateTime] = useState("");
  // store month item
  const [month, setMonth] = useState("");
  // store week item
  const [week, setWeek] = useState("");
  //store color
  const [color, setColor] = useState("");
  // store File
  const [file, setFile] = useState("");

  // store sleeted item
  const [note, setNote] = useState("");
  //  store toggle value
  const [checked, setChecked] = useState(true);
  //  store toggle value
  const [currency, setCurrency] = useState(true);

  // global function
  const { setAlert } = useGlobalContext();

  const handleToggleChange = (event) => {
    setChecked(event.target.checked);
  };
  //store manege name
  const [personName, setPersonName] = useState([]);
  console.log(personName);
  // select item function
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  // submit info function
  const handleSubmit = async (e) => {
    if (text === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please enter Text value",
      });
      return;
    }
    if (email === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter Email ",
      });
      return;
    }
    if (!validateEmail(email)) {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter valid email address",
      });
      return;
    }
    if (password === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please enter Password value",
      });
      return;
    }
    if (url === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter url value",
      });
      return;
    }

    if (search === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter search value",
      });
      return;
    }
    if (tel === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter Phone number value",
      });
      return;
    }
    if (!validatePhone(tel)) {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter valid Phone number value",
      });
      return;
    }
    if (number === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter Number value",
      });
      return;
    }
    if (date === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please select Date value",
      });
      return;
    }
    if (time === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Select Time value",
      });
      return;
    }
    if (dateTime === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Select Date-Time value",
      });
      return;
    }
    if (month === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please select month value",
      });
      return;
    }
    if (week === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please select week value",
      });
      return;
    }
    if (color === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please select color value",
      });
      return;
    }

    if (file === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please select file",
      });
      return;
    }

    if (personName?.length === 0) {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please select Manager",
      });
      return;
    }
    if (note === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Write Something",
      });
      return;
    } else {
      setAlert({
        flag: true,
        type: "success",
        msg: "Inputted Data successfully",
      });
    }
    setFormatInputModal(false);
  };

  return (
    <Modal open={formatInputModal} onClose={() => setFormatInputModal(false)}>
      <Card className="modal_ui global_modal">
        <Typography
          className="fs_24"
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
          fontWeight="medium"
        >
          Formated Input Form
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12} md={4} style={{ marginTop: "5px" }}>
            <label for="text-input">Text Input:</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              size="small"
              type="text"
              fullWidth
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="password-input">Password Input:</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              size="small"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="email-input">Email Input:</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              id="outlined-number"
              type="email"
              fullWidth
              size="small"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="url-input">URL Input:</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              id="outlined-number"
              type="url"
              fullWidth
              size="small"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="search-input">Search Input:</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              size="small"
              type="search"
              fullWidth
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="tel-input">Mobile Number Input:</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              size="small"
              type="tel"
              fullWidth
              value={tel}
              onChange={(e) => {
                setTel(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="number-input">Number Input:</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              size="small"
              type="number"
              fullWidth
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="date-input">Date Input:</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              size="small"
              type="date"
              fullWidth
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="time-input">Time Input:</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              size="small"
              type="time"
              fullWidth
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="datetime-local-input">Datetime-Local Input:</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              size="small"
              type="datetime-local"
              fullWidth
              value={dateTime}
              onChange={(e) => {
                setDateTime(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="month-input">Month Input:</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              size="small"
              type="month"
              fullWidth
              value={month}
              onChange={(e) => {
                setMonth(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="week-input">Week Input:</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              size="small"
              type="week"
              fullWidth
              value={week}
              onChange={(e) => {
                setWeek(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="week-input">Date Range Input:</label>
          </Grid>
          <Grid item xs={12} md={8} style={{ marginTop: "10px" }}>
            <form>
              <label for="start-date">Start Date:</label>&nbsp;
              <input type="date" id="start-date" name="start-date" />
              &nbsp;&nbsp;
              <label for="end-date">End Date:</label>&nbsp;
              <input type="date" id="end-date" name="end-date" />
            </form>
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="week-input">Color Input:</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              size="small"
              type="color"
              fullWidth
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="range-input">Range Input:</label>
          </Grid>
          <Grid item xs={12} md={8} style={{ marginTop: "10px" }}>
            <input type="range" id="range-input" name="range-input" />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="file-input">File Input:</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              size="small"
              type="file"
              fullWidth
              value={file}
              onChange={(e) => {
                setFile(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="checkbox-input">Toggle Input:</label>
          </Grid>
          <Grid item xs={12} md={8} style={{ marginTop: "5px" }}>
            <Box>
              <label></label>
              <Stack
                style={{ marginTop: "5px" }}
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <Typography>Off</Typography>
                <Switch
                  defaultChecked={checked}
                  onChange={handleToggleChange}
                  inputProps={{
                    "aria-label": "ant design",
                  }}
                />
                <Typography>On</Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="checkbox-input">Checkbox Input:</label>
          </Grid>
          <Grid item xs={12} md={8} style={{ marginTop: "10px" }}>
            <input type="checkbox" id="checkbox-input" name="checkbox-input" />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="checkbox-input">Radio Group Input:</label>
          </Grid>
          <Grid item xs={12} md={8} style={{ marginTop: "10px" }}>
            <form>
              <label for="gender-male">
                <input
                  type="radio"
                  id="gender-male"
                  name="gender"
                  value="male"
                />
                Male
              </label>
              &nbsp;
              <label for="gender-female">
                <input
                  type="radio"
                  id="gender-female"
                  name="gender"
                  value="female"
                />
                Female
              </label>
              &nbsp;
              <label for="gender-other">
                <input
                  type="radio"
                  id="gender-other"
                  name="gender"
                  value="other"
                />
                Other
              </label>
            </form>
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label>Your Country Currency</label>
          </Grid>

          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              id="outlined-select-currency"
              select
              fullWidth
              size="small"
              defaultValue="EUR"
              onChange={(e) => setCurrency(e.target.value)}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label>Multi Select Input</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <Autocomplete
              multiple
              limitTags={3}
              id="multiple-limit-tags"
              options={multiData}
              getOptionLabel={(option) => option?.title}
              renderInput={(params) => <TextField {...params} />}
              // sx={{ width: "800px" }}
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label>Manager name</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <FormControl fullWidth size="small">
              <Select
                style={{ marginTop: "10px" }}
                id="demo-multiple-checkbox"
                multiple
                fullWidth
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {allName.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label>Short Note</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              fullWidth
              id="outlined-textarea"
              placeholder="Short Note"
              multiline
              rows={4}
              maxRows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </Grid>
        </Grid>

       
        <Box> </Box>
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
            color={"secondary"}
            onClick={() => setFormatInputModal(false)}
          >
            Cancel
          </button>
          <button
            className="btn_primary btn_primary_hover"
            size="small"
            style={{
              color: "white",
              width: "15%",
            }}
            onClick={() => {
              handleSubmit();
            }}
          >
            Save
          </button>
        </Box>
      </Card>
    </Modal>
  );
};

export default FormatInputFormModal;
