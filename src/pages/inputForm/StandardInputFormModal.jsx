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

const StandardInputFormModal = () => {
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
  const { standardInputModal, setStandardInputModal, setAlert } =
    useGlobalContext();

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

        <Box className="input_field_display">
          <Box>
            <label>Name</label>
            <TextField
              style={{ marginTop: "10px" }}
              placeholder="Name"
              size="small"
              type="text"
              fullWidth
              value={names}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box>
            <label>Address</label>
            <TextField
              style={{ marginTop: "10px" }}
              size="small"
              label="Address"
              type="text"
              fullWidth
              value={address}
              onChange={(e) => setAdders(e.target.value)}
            />
          </Box>

          <Box>
            <label>Phone Number</label>
            <TextField
              style={{ marginTop: "10px" }}
              id="outlined-number"
              placeholder="Phone Number"
              type="number"
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>
          <Box>
            <label>Age</label>
            <TextField
              style={{ marginTop: "10px" }}
              id="outlined-number"
              placeholder="Age"
              type="number"
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Box>
          <Box>
            {" "}
            <label>Email</label>
            <TextField
              style={{ marginTop: "10px" }}
              placeholder="Email"
              size="small"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          <Box>
            <label>Your Country Currency</label>
            <TextField
              style={{ marginTop: "10px" }}
              placeholder="Currency"
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
          </Box>

          <Box>
            <FormControl fullWidth size="small">
              <label>Manager name</label>
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
          </Box>
          <Box>
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
          </Box>
        </Box>
        <Box>
          {" "}
          <label>Short Note</label>
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
        </Box>
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
