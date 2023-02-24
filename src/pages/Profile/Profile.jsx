// @mui material components
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import React, {
  useState,
  useEffect,
} from "react";
// Data
import { Card, TextField } from "@mui/material";
import { useGlobalContext } from "../../context/globalContext";

import { Box } from "@mui/system";
import {
  validateEmail,
  validatePhone,
} from "../../helpers/globalFunction";
import ResetPasswordModal from "./ResetPasswordModal";
import bg from "../../assets/profile/bg.jpg";
function Profile() {
  // store email
  const [email, setEmail] = useState(
    "jabed@gmail.com"
  );
  //   store name
  const [fullName, setFullName] =
    useState("Jabed");
  // store phone number
  const [phoneno, setPhoneno] = useState(
    "01789274185"
  );
  //   store address
  const [address, setAdders] = useState(
    "Dhaka, Bangladesh"
  );
  //   selected photo
  const [selectedFile, setSelectedFile] =
    useState(null);
  // preview photo
  const [preview, setPreview] = useState(null);
  console.log(selectedFile);
  // global context
  const { setResetModal, setAlert } =
    useGlobalContext();
  // make URL fOR PREVIEW
  useEffect(() => {
    if (!selectedFile) {
      //  setPreview(undefined);
      return;
    }
    const objectUrl =
      URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  //   select photo function
  const onSelectFile = (e) => {
    if (
      !e.target.files ||
      e.target.files.length === 0
    ) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };
  // submit function
  const handleSubmit = () => {
    if (fullName === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please enter Full Name",
      });
      return;
    }
    if (email === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please enter Email",
      });
      return;
    }
    if (!validateEmail(email)) {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please enter Valid Email",
      });
      return;
    }

    if (!validatePhone(phoneno)) {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please enter Valid Phone Number",
      });
      return;
    }
    if (selectedFile === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Select Image",
      });
      if (address === "") {
        setAlert({
          flag: true,
          type: "error",
          msg: "Please enter Address",
        });
        return;
      }
      return;
    } else {
      setAlert({
        flag: true,
        type: "success",
        msg: "Update successful",
      });
      console.log(
        `Image name: ${selectedFile?.name}Image URL: ${preview}`,
        email,
        fullName,
        phoneno,
        address
      );
    }
  };

  return (
    <>
      <ResetPasswordModal />
      <Card
        className="global_card"
        style={{
          margin: "-10px",
          marginTop: "-50px",
        }}
      >
        <Box mb={2} />
        <div style={{ position: "relative" }}>
          <img
            style={{
              width: "100%",

              height: "300px",
            }}
            src={bg}
            alt=""
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "70%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div>
              <img
                alt=""
                src={
                  preview ||
                  "https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
                }
                style={{
                  width: "90px",
                  height: "90px",
                  fontSize: "50px",
                  borderRadius: "50%",
                }}
              ></img>

              <label>
                <input
                  type="file"
                  onChange={onSelectFile}
                  accept=".png,.jpg,.jpeg"
                  style={{
                    display: "none",
                  }}
                />
                <ModeEditOutlineIcon
                  style={{
                    cursor: "pointer",
                    fontSize: "18px",
                    color: "white",

                    marginLeft: "-10px",
                  }}
                />
              </label>
            </div>
          </div>
        </div>

        <Box mx={5} mt={5} mb={3}>
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "30px",
            }}
          >
            <TextField
              size="small"
              label="Full Name"
              type="text"
              fullWidth
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
            ></TextField>

            <TextField
              label="Email"
              size="small"
              type="text"
              fullWidth
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            ></TextField>

            <TextField
              label="Phone No"
              size="small"
              type="number"
              fullWidth
              value={phoneno}
              onChange={(e) =>
                setPhoneno(e.target.value)
              }
            />

            <TextField
              label="Address"
              size="small"
              type="text"
              fullWidth
              value={address}
              onChange={(e) =>
                setAdders(e.target.value)
              }
            />
          </Box>
          <Box
            pt={3}
            style={{
              display: "flex",
              justifyContent: "center",
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
              onClick={() => setResetModal(true)}
            >
              Reset Password
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
        </Box>
      </Card>
    </>
  );
}

export default Profile;
