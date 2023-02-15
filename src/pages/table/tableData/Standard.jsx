import {
  Box,
  FilledInput,
  FormControl,
  FormHelperText,
  Input,
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
const Standard = () => {
  return (
    <div>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
        variant="standard"
      />
      <TextField
        disabled
        id="standard-disabled"
        label="Disabled"
        defaultValue="Hello World"
        variant="standard"
      />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
      />
      <TextField
        id="standard-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
      <TextField
        id="standard-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"
      />
      <TextField
        id="standard-helperText"
        label="Helper text"
        defaultValue="Default Value"
        helperText="Some important text"
        variant="standard"
      />
      <TextField
        error
        id="standard-error"
        label="Error"
        defaultValue="Hello World"
        variant="standard"
      />
      <TextField
        error
        id="standard-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        variant="standard"
      />
      <TextField
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
        variant="standard"
      />
      <TextField
        id="standard-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        variant="standard"
      />
      <TextField
        id="standard-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="standard"
      />
      {/* currency TextField*/}
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="standard"
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
          id="standard-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="standard"
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
          id="standard-size-small"
          defaultValue="Small"
          size="small"
          variant="standard"
        />
        <TextField
          label="Size"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
      </div>
      {/*  */}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">
            Name
          </InputLabel>
          <Input
            id="component-simple"
            defaultValue="Composed TextField"
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">
            Name
          </InputLabel>
          <Input
            id="component-helper"
            defaultValue="Composed TextField"
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Some important helper text
          </FormHelperText>
        </FormControl>
        <FormControl disabled variant="standard">
          <InputLabel htmlFor="component-disabled">
            Name
          </InputLabel>
          <Input
            id="component-disabled"
            defaultValue="Composed TextField"
          />
          <FormHelperText>
            Disabled
          </FormHelperText>
        </FormControl>
        <FormControl error variant="standard">
          <InputLabel htmlFor="component-error">
            Name
          </InputLabel>
          <Input
            id="component-error"
            defaultValue="Composed TextField"
            aria-describedby="component-error-text"
          />
          <FormHelperText id="component-error-text">
            Error
          </FormHelperText>
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
          label="Standard warning"
          variant="standard"
          color="warning"
          focused
        />
      </Box>
    </div>
  );
};

export default Standard;
