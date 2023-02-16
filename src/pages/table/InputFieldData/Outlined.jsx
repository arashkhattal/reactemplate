import Typography from "@material-ui/core/Typography";
import {
  AccountCircle,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
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
const Outlined = () => {
  // show password function
  const [showPassword, setShowPassword] =
    useState(false);

  const handleClickShowPassword = () =>
    setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Typography className="fs_24">
        Input Text
      </Typography>
      <div>
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
      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />

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

      {/* currency Outline */}
      <div>
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
      </div>
      {/* Form control text field */}
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            With a start adornment
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField
          id="input-with-icon-textfield"
          label="TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <AccountCircle
            sx={{
              color: "action.active",
              mr: 1,
              my: 0.5,
            }}
          />
          <TextField
            id="input-with-sx"
            label="With sx"
            variant="standard"
          />
        </Box>
      </Box>
      <Box>
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
      {/*  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": {
            width: "25ch",
          },
        }}
      >
        <RedBar />
        <TextField
          label={'margin="none"'}
          id="margin-none"
        />
        <RedBar />
        <TextField
          label={'margin="dense"'}
          id="margin-dense"
          margin="dense"
        />
        <RedBar />
        <TextField
          label={'margin="normal"'}
          id="margin-normal"
          margin="normal"
        />
        <RedBar />
      </Box>
      {/*  */}
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label="fullWidth"
          id="fullWidth"
        />
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
          id="outlined-controlled"
          label="Controlled"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
        />
      </Box>
      {/*  */}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl>
          <InputLabel htmlFor="component-outlined">
            Name
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            defaultValue="Composed TextField"
            label="Name"
          />
        </FormControl>
      </Box>
      {/*  */}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Input
          defaultValue="Hello world"
          inputProps={ariaLabel}
        />
        <Input
          placeholder="Placeholder"
          inputProps={ariaLabel}
        />
        <Input
          disabled
          defaultValue="Disabled"
          inputProps={ariaLabel}
        />
        <Input
          defaultValue="Error"
          error
          inputProps={ariaLabel}
        />
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
          label="Outlined secondary"
          color="secondary"
          focused
        />
      </Box>
    </div>
  );
};

export default Outlined;
