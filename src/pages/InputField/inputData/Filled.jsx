import {
  Box,
  FilledInput,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
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
const Filled = () => {
  return (
    <div>
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
      />
      <TextField
        required
        id="filled-required"
        label="Required"
        defaultValue="Hello World"
        variant="filled"
      />
      <TextField
        disabled
        id="filled-disabled"
        label="Disabled"
        defaultValue="Hello World"
        variant="filled"
      />
      <TextField
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
      />
      <TextField
        id="filled-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      />
      <TextField
        id="filled-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
      />
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
      />
      <TextField
        id="filled-helperText"
        label="Helper text"
        defaultValue="Default Value"
        helperText="Some important text"
        variant="filled"
      />
      <TextField
        error
        id="filled-error"
        label="Error"
        defaultValue="Hello World"
        variant="filled"
      />
      <TextField
        error
        id="filled-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        variant="filled"
      />
      <TextField
        id="filled-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
        variant="filled"
      />
      <TextField
        id="filled-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        variant="filled"
      />
      <TextField
        id="filled-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="filled"
      />
      {/*  currency TextField*/}
      <div>
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="filled"
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
          id="filled-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="filled"
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
      {/*  */}
      <div>
        <TextField
          label="Size"
          id="filled-size-small"
          defaultValue="Small"
          variant="filled"
          size="small"
        />
        <TextField
          label="Size"
          id="filled-size-normal"
          defaultValue="Normal"
          variant="filled"
        />
      </div>
      {/*  */}
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Normal"
        variant="filled"
      />
      {/*  */}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl variant="filled">
          <InputLabel htmlFor="component-filled">
            Name
          </InputLabel>
          <FilledInput
            id="component-filled"
            defaultValue="Composed TextField"
          />
        </FormControl>
      </Box>
      {/*  */}
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "25ch",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Filled success"
          variant="filled"
          color="success"
          focused
        />
      </Box>
    </div>
  );
};

export default Filled;
