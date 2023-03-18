import {
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
  const [names, setName] = useState("");
  // store new password
  const [address, setAdders] = useState("");
  // store
  const [phone, setPhone] = useState("");
  // store
  const [age, setAge] = useState("");
  // store sleeted item
  const [email, setEmail] = useState("");
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
    if (names === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please enter Name ",
      });
      return;
    }
    if (phone === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Phone Number",
      });
      return;
    }
    if (age === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter Age",
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
            <TextField size="small" type="text" fullWidth />
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
              InputLabelProps={{
                shrink: true,
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
              InputLabelProps={{
                shrink: true,
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
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="tel-input">Telephone Input:</label>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              style={{ marginTop: "10px" }}
              size="small"
              type="tel"
              fullWidth
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
            />
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
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="checkbox-input">Checkbox Input:</label>
          </Grid>
          <Grid item xs={12} md={8} style={{ marginTop: "10px" }}>
            <input type="checkbox" id="checkbox-input" name="checkbox-input" />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="checkbox-input">Checkbox Input:</label>
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

          {/* <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="radio-input-1">Radio Input 1:</label>
          </Grid>
          <Grid item xs={12} md={8} style={{ marginTop: "10px" }}>
            <input
              type="radio"
              id="radio-input-1"
              name="radio-input"
              value="option-1"
            />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "10px" }}>
            <label for="radio-input-2">Radio Input 2:</label>
          </Grid>
          <Grid item xs={12} md={8} style={{ marginTop: "10px" }}>
            <input
              type="radio"
              id="radio-input-2"
              name="radio-input"
              value="option-2"
            />
          </Grid> */}

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

        <Box className="input_field_display">
          {/* <Box>
            <label></label>
            <Stack
              style={{ marginTop: "35px" }}
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
          </Box> */}
        </Box>
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
