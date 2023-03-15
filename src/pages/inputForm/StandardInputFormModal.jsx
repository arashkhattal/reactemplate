import { Visibility, VisibilityOff } from "@mui/icons-material";
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
  // store current password
  // const [names, setName] = useState("");
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
    setStandardInputModal(false);
  };

  // store show password
  const [showPassword, setShowPassword] = useState(false);
  // store multiple item
  const [personName, setPersonName] = useState([]);
  // show password function
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // select multiple item function

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              required
              type="text"
              label="Full Name"
              // value={fullName}
              // onChange={(e) => setFullName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
            />{" "}
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography className="fs_16 fw_600 text_Margin ">
              Input Password
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl sx={{ width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography className="fs_16 fw_600 text_Margin ">
              Input Number
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography className="fs_16 fw_600 text_Margin ">
              Input Multiline
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              multiline
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              maxRows={3}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography className="fs_16 fw_600 text_Margin ">
              Input Select Item
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue="EUR"
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <Autocomplete
              multiple
              limitTags={3}
              id="multiple-limit-tags"
              options={multiData}
              getOptionLabel={(option) => option?.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Muli Data select"
                  placeholder="Favorites"
                />
              )}
              // sx={{ width: "800px" }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl sx={{  width: 230 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Multiple Select
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Multiple Select" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
