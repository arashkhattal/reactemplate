import {
  Box,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

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

const Standard = () => {
  // select multiple item function
  return (
    <div>
      <div>
        <Typography className="fs_24 text_Margin ">
          Input Text
        </Typography>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="standard"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          variant="standard"
          InputProps={{
            readOnly: true,
          }}
        />{" "}
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
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
          variant="standard"
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
          variant="standard"
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
          variant="standard"
          multiline
        />{" "}
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          variant="standard"
          multiline
          maxRows={3}
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          variant="standard"
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
          variant="standard"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          variant="standard"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
        <TextField
          label="Outlined secondary"
          color="secondary"
          variant="standard"
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
          variant="standard"
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
          variant="standard"
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

      <Box>
        <Typography className="fs_24 text_Margin ">
          Input Field Different size
        </Typography>
        <div>
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            variant="standard"
            size="small"
          />
          <TextField
            label="Size"
            id="outlined-size-normal"
            defaultValue="Normal"
            variant="standard"
          />
        </div>
      </Box>
    </div>
  );
};

export default Standard;
