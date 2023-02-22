import {
  Box,
  Card,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import React, { useState } from "react";

import { useGlobalContext } from "../../../context/globalContext";

// column data
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "firstName",
    headerName: "First name",
    width: 130,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 130,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
];

// table data
const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 6,
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    age: 150,
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
  },
];
const createGroup = () => {
  // store chat name
  const [name, setName] = useState("");
  const [select, setSelect] = useState([]);
  console.log(select);
  // global function
  const {
    createGroup,
    setCreateGroup,
    setAlert,
  } = useGlobalContext();
  // submit created chat
  const HandleSubmit = async () => {
    if (name === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please enter Chat Room Name",
      });

      return;
    } else {
      setAlert({
        flag: true,
        type: "success",
        msg: "Created a chat Successfully",
      });
    }
  };

  return (
    <Modal
      open={createGroup}
      onClose={() => setCreateGroup(false)}
    >
      <Card
        className="center_modal_ui"
        style={{
          maxHeight: "60vh",
          overflow: "auto",
        }}
      >
        <Typography
          className="fs_24"
          style={{
            textAlign: "center",
            padding: "10px",
          }}
        >
          Add Group Chat Room
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              required
              type="text"
              label="Chat Room Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />
          </Grid>
        </Grid>
        <div
          style={{ height: 400, width: "100%" }}
        >
          {/* tabel Data grid component  */}
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[4]}
            checkboxSelection
            value={select}
            onChange={(e) =>
              setSelect(e.target.value)
            }
          />
        </div>
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
            onClick={() => setCreateGroup(false)}
          >
            Cancel
          </button>
          <button
            className="btn_primary btn_primary_hover"
            style={{
              color: "white",
              width: "15%",
            }}
            size="small"
            onClick={() => {
              HandleSubmit();
            }}
          >
            Save
          </button>
        </Box>
      </Card>
    </Modal>
  );
};

export default createGroup;
