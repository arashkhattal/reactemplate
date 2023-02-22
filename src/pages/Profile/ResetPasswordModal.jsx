
import {
  Box,
  Card,
  Divider,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import "./profile.css";

const ResetPasswordModal = () => {
  // store current password
  const [currentPass, setCurrentPass] =
    useState("");
  // store new password
  const [newPass, setNewPass] = useState("");
  // store
  const [confirmPass, setConfirmPass] =
    useState("");
  // global function
  const { resetModal, setResetModal, setAlert } =
    useGlobalContext();

  // submit password function
  const handleSubmit = async (e) => {
    if (currentPass === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please enter Current Password",
      });
      return;
    }
    if (newPass === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter New Password",
      });
      return;
    }
    if (confirmPass === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Re-enter New Password",
      });
      return;
    }
    if (newPass !== confirmPass) {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Check Your New Password & Confirm Password",
      });
      return;
    } else {
      setAlert({
        flag: true,
        type: "success",
        msg: "Password changed successfully",
      });
      console.log(`New Password is: ${newPass}`);
    }
    setResetModal(false);
    setCurrentPass("");
    setNewPass("");
    setConfirmPass("");
  };

  return (
    <Modal
      open={resetModal}
      onClose={() => setResetModal(false)}
    >
      <Card className="reset_modal_ui">
        <Typography
          className="fs_24"
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
          fontWeight="medium"
        >
          Reset Password
        </Typography>
        <Divider sx={{ mx: 0 }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <TextField
              label="Current Password"
              size="small"
              type="password"
              fullWidth
              value={currentPass}
              onChange={(e) =>
                setCurrentPass(e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              size="small"
              label="New Password"
              type="password"
              fullWidth
              value={newPass}
              onChange={(e) =>
                setNewPass(e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label="Confirm Password"
              size="small"
              type="password"
              fullWidth
              value={confirmPass}
              onChange={(e) =>
                setConfirmPass(e.target.value)
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
            color={"secondary"}
            onClick={() => setResetModal(false)}
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

export default ResetPasswordModal;
