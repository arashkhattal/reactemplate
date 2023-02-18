import { Card, Divider, Grid, Modal } from "@mui/material";

import { useGlobalContext } from "context/globalContext";
import React, { useState } from "react";
// import axiosInstance from "helpers/axiosInstance";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  maxWidth: "600px",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};
const ResetPasswordModal = () => {
  const {
    reload,
    setReload,
    setAlert,
    setLoading,
    resetModal,
    setResetModal,
    handle203,
  } = useGlobalContext();
  const [currentpass, setCurrentpass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [repass, setRepass] = useState("");
  const handlesubmit = async (e) => {
    if (currentpass === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please enter Current Password",
      });
      return;
    }
    if (newpass === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter New Password",
      });
      return;
    }
    if (repass === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Re-enter New Password",
      });
      return;
    }

    if (newpass !== repass) {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Check Your New Password & Confirm Password",
      });
      return;
    }
    try {
      setLoading(true);
      const response = await axiosInstance.post(
        "/backend/change_super_admin_password",
        {
          old_password: currentpass,
          new_password: newpass,
        }
      );
      if (response?.status === 200) {
        setAlert({
          flag: true,
          type: "success",
          msg: response?.data?.msg,
        });
        setCurrentpass("");
        setNewpass("");
        setRepass("");
        setReload(reload + 1);
        setResetModal(false);
      } else if (response?.status === 203) {
        handle203(response);
      }
      setLoading(false);
    } catch (error) {
      setAlert({
        flag: true,
        type: "error",
        msg: "Something went wrong! please try again",
      });
      setLoading(false);
    }
  };

  const boxSX = {
    background: "#DC6C43",
    color: "#ffffff",
    marginLeft: 2,
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#e37a54",
    },
  };

  return (
    <Modal open={resetModal} onClose={() => setResetModal(false)}>
      <Card sx={style}>
        <MDTypography
          variant="h4"
          style={{
            textAlign: "center",
          }}
          fontWeight="medium"
        >
          Reset Password
        </MDTypography>
        <Divider sx={{ mx: 0 }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <MDInput
              label="Current Password"
              size="medium"
              type="password"
              fullWidth
              value={currentpass}
              onChange={(e) => setCurrentpass(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <MDInput
              label="New Password"
              size="medium"
              type="password"
              fullWidth
              value={newpass}
              onChange={(e) => setNewpass(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <MDInput
              label="Confirm Password"
              size="medium"
              type="password"
              fullWidth
              value={repass}
              onChange={(e) => setRepass(e.target.value)}
            />
          </Grid>
        </Grid>
        <MDBox
          pt={3}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <MDButton
            size="small"
            color={"secondary"}
            onClick={() => setResetModal(false)}
          >
            Cancel
          </MDButton>
          <MDButton
            className="sendbtn1"
            size="small"
            sx={boxSX}
            onClick={() => {
              handlesubmit();
            }}
          >
            Save
          </MDButton>
        </MDBox>
      </Card>
    </Modal>
  );
};

export default ResetPasswordModal;
