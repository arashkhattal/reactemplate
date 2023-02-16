import Typography from "@material-ui/core/Typography";
import {
  AccountCircle,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
const ariaLabel = { "aria-label": "description" };

function RedBar() {
  return (
    <Box
      sx={{
        height: 20,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? "rgba(255, 0, 0, 0.1)"
            : "rgb(255 132 132 / 25%)",
      }}
    />
  );
}
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

// item cal curation of multiple select
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight:
        ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
//  dummy data of multiple select
const names = ["Chinmy", "Jabed", "Arash"];

const Filled = () => {
  // store show password
  const [showPassword, setShowPassword] =
    useState(false);
  // store multiple item
  const [personName, setPersonName] = useState(
    []
  );
  // show password function
  const handleClickShowPassword = () =>
    setShowPassword((show) => !show);

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
      typeof value === "string"
        ? value.split(",")
        : value
    );
  };
  return (
    <div>
      <div>
        <Typography className="fs_24 text_Margin ">
          Input Text
        </Typography>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="filled"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          variant="filled"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />{" "}
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <Typography className="fs_24 text_Margin ">
          Input Password
        </Typography>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
      </div>
      <div>
        <Typography className="fs_24 text_Margin ">
          Input Number
        </Typography>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div>
        {" "}
        <Typography className="fs_24 text_Margin ">
          Input Multiline
        </Typography>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          variant="filled"
        />{" "}
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          variant="filled"
          multiline
          maxRows={3}
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          variant="filled"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </div>
      <div>
        <Typography className="fs_24 text_Margin ">
          Input Error
        </Typography>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
        <TextField
          label="Outlined secondary"
          color="secondary"
          variant="filled"
          focused
        />
      </div>
      <div>
        <Typography className="fs_24 text_Margin ">
          Input Select Item
        </Typography>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          variant="filled"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          variant="filled"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </TextField>
      </div>

      <Box>
        <Typography className="fs_24 text_Margin ">
          Input Field Different size
        </Typography>
        <div>
          <TextField
            label="Size"
            variant="filled"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
          <TextField
            label="Size"
            variant="filled"
            id="outlined-size-normal"
            defaultValue="Normal"
          />
        </div>
      </Box>
    </div>
  );
};

export default Filled;