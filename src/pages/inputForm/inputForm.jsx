import { Card, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import FormatInputFormModal from "./FormatInputModal";
import "./inputForm.css";
import InputFormModal from "./InputFormModal.jsx";
import StandardInputFormModal from "./StandardInputFormModal";

const inputForm = () => {
  const { setInputModal} = useGlobalContext();
    const [standardInputModal, setStandardInputModal] = useState(false);
    const [formatInputModal, setFormatInputModal] = useState(false);
  return (
    <>
      <InputFormModal />
      <StandardInputFormModal
        standardInputModal={standardInputModal}
        setStandardInputModal={setStandardInputModal}
      />
      <FormatInputFormModal
        formatInputModal={formatInputModal}
        setFormatInputModal={setFormatInputModal}
      />
      <Card className="global_card" style={{ padding: "10px" }}>
        <h1 style={{ display: "flex", justifyContent: "center" }}>Forms</h1>
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
              Basic Input Form
            </button>
          </div>
          <div className="border-dashed">
            <button
              className="btn_primary btn_primary_hover"
              style={{
                color: "white",
              }}
              size="small"
              onClick={() => setStandardInputModal(true)}
            >
              Standard Input Form
            </button>
          </div>
          <div className="border-dashed">
            <button
              className="btn_primary btn_primary_hover"
              style={{
                color: "white",
              }}
              size="small"
              onClick={() => setFormatInputModal(true)}
            >
              Formated Input Form
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default inputForm;
