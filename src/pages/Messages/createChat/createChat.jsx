import {
  Box,
  Card,
  Divider,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import React, {
  useEffect,
  useState,
} from "react";

import { useGlobalContext } from "../../../context/globalContext";

const CreateChat = () => {
  // store chat name
  const [name, setName] = useState("");
  // global function
  const { createChat, setCreateChat, setAlert } =
    useGlobalContext();
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
      open={createChat}
      onClose={() => setCreateChat(false)}
    >
      <Card className="center_modal_ui ">
        <Typography
          className="fs_24"
          style={{
            textAlign: "center",
            padding: "10px",
          }}
        >
          Create Chat
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
            onClick={() => setCreateChat(false)}
          >
            Cancel
          </button>
          <button
            className="btn_primary btn_primary_hover"
            style={{
              color: "white",
              width: "15%",
            }}
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

export default CreateChat;
