import { Typography } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../../context/globalContext";
import "./inputForm.css";
import InputFormModal from "./InputFormModal.jsx";
const inputForm = () => {
  const { setInputModal } = useGlobalContext();
  return (
    <>
      <InputFormModal />
      <div className="display_Grid ">
        <div className="border-dashed">
          <button
            className="btn_primary btn_primary_hover"
            style={{
              color: "white",
            }}
            size="small"
            onClick={() => setInputModal(true)}
          >
            Input Data
          </button>
        </div>
      </div>
    </>
  );
};

export default inputForm;
