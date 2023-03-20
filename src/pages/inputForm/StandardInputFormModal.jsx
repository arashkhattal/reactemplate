import {
  Visibility,
  VisibilityOff,
  VolumeDown,
  VolumeUp,
} from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Card,
  Checkbox,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Slider,
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

//  dummy data of multiple select
const names = ["Chinmy", "Jabed", "Arash"];

const StandardInputFormModal = ({
  standardInputModal,
  setStandardInputModal,
}) => {
  // store show password
  const [showPassword, setShowPassword] = useState(false);

  // show password function
  const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

  const [value, setValue] = useState(30);

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

  const handleChange1 = (event, newValue) => {
    setValue(newValue);
  };

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
    setStandardInputModal(false);
  };

  return (
    <Modal
      open={standardInputModal}
      onClose={() => setStandardInputModal(false)}
    >
      <Card className="modal_ui global_modal">
        <Typography
          className="fs_24"
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
          fontWeight="medium"
        >
          Standard Input Form
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Typography className="fs_16 fw_600 text_Margin ">
              Input Text
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              required
              type="text"
              label="Full Name"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              label="password"
              style={{ marginTop: "5px" }}
              type="password"
              fullWidth
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              label="Email"
              style={{ marginTop: "5px" }}
              type="email"
              fullWidth
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              label="Url"
              style={{ marginTop: "5px" }}
              type="url"
              fullWidth
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              label="Search"
              style={{ marginTop: "5px" }}
              type="search"
              fullWidth
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              style={{ marginTop: "5px" }}
              type="number"
              fullWidth
              label="Mobile Number"
              value={tel}
              onChange={(e) => {
                setTel(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              style={{ marginTop: "5px" }}
              type="date"
              fullWidth
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              style={{ marginTop: "5px" }}
              type="time"
              fullWidth
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              style={{ marginTop: "5px" }}
              type="datetime-local"
              fullWidth
              value={dateTime}
              onChange={(e) => {
                setDateTime(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              style={{ marginTop: "5px" }}
              type="month"
              fullWidth
              value={month}
              onChange={(e) => {
                setMonth(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              style={{ marginTop: "5px" }}
              type="week"
              fullWidth
              value={week}
              onChange={(e) => {
                setWeek(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              style={{ marginTop: "5px" }}
              label="color"
              type="color"
              fullWidth
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              type="file"
              fullWidth
              value={file}
              onChange={(e) => {
                setFile(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              label="currency"
              style={{ marginTop: "5px" }}
              id="outlined-select-currency"
              select
              fullWidth
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

          <Grid item xs={12} md={12}>
            <Typography>Multiselect chip</Typography>
            <Autocomplete
              multiple
              limitTags={3}
              id="multiple-limit-tags"
              options={multiData}
              getOptionLabel={(option) => option?.title}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography>check box</Typography>
            <FormControl fullWidth label="check">
              <Select
                style={{ marginTop: "5px" }}
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

          <Grid item xs={12} md={12}>
            <TextField
            label="short note"
              style={{ marginTop: "5px" }}
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

          <Grid item xs={12} md={12}>
            <Typography>Slider Input</Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <VolumeDown />
              <Slider
                aria-label="Volume"
                value={value}
                onChange={handleChange1}
              />
              <VolumeUp />
            </Stack>
          </Grid>
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
            color={"secondary"}
            onClick={() => setStandardInputModal(false)}
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

export default StandardInputFormModal;
