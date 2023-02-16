import Typography from "@material-ui/core/Typography";
import {
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
const Outlined = () => {
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
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />{" "}
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
        />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
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
        />
        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={
              showPassword ? "text" : "password"
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={
                    handleClickShowPassword
                  }
                  onMouseDown={
                    handleMouseDownPassword
                  }
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <div>
        <Typography className="fs_24 text_Margin ">
          Input Number
        </Typography>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
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
        />{" "}
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          maxRows={3}
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
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
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
        <TextField
          label="Outlined secondary"
          color="secondary"
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

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">
            Multiple Select
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={
              <OutlinedInput label="Multiple Select" />
            }
            renderValue={(selected) =>
              selected.join(", ")
            }
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox
                  checked={
                    personName.indexOf(name) > -1
                  }
                />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <Box>
        <Typography className="fs_24 text_Margin ">
          Input Field Different size
        </Typography>
        <div>
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
          <TextField
            label="Size"
            id="outlined-size-normal"
            defaultValue="Normal"
          />
        </div>
      </Box>
    </div>
  );
};

export default Outlined;
