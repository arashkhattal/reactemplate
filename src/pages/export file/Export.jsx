import React from "react";
import { Document, Page, Text, pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import PptxGenJS from "pptxgenjs";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { Card, Grid } from "@mui/material";
import "../tables/htmlTable/Table.css";

const ExportFile = () => {
  // export pdf function
  const handleExportPdf = async () => {
    const MyDocument = () => (
      <Document>
        <Page>
          <Text>Hello, World!</Text>
        </Page>
      </Document>
    );

    const pdfBlob = await pdf(<MyDocument />).toBlob();
    saveAs(pdfBlob, "myDocument.pdf");
  };

  //   export as ppt function
  const handleExportPpt = () => {
    const pptx = new PptxGenJS();
    const slide = pptx.addSlide();
    slide.addText("Hello, World!", { x: 1, y: 1 });
    pptx.writeFile("myPresentation.pptx");
  };

  //   export as excel function
  const exportToExcel = () => {
    const table = document.getElementById("myTable");
    const html = table.outerHTML;
    const url = "data:application/vnd.ms-excel," + encodeURIComponent(html);
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "myData.xls";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <Card className="global_card">
        {/* <button onClick={handleExportPdf}>Export to PDF</button> */}

        <h1>Example for all types export</h1>
        <br/>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4} lg={4}>
            <button
              className="btn_primary btn_primary_hover"
              size="small"
              style={{
                color: "white",
              }}
              onClick={handleExportPdf}
            >
              Export to PDF
            </button>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <button
              className="btn_primary btn_primary_hover"
              size="small"
              style={{
                color: "white",
              }}
              onClick={handleExportPpt}
            >
              Export to PPT
            </button>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <ReactHTMLTableToExcel
              className="btn_primary btn_primary_hover"
              size="small"
              table="myTable"
              filename="myData"
              sheet="Sheet"
              buttonText="Export to Excel"
              onClick={exportToExcel}
            />
          </Grid>
        </Grid>

        {/* <button onClick={handleExportPpt}>Export as PPT</button> */}
<br/>
        <table id="myTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>35</td>
              <td>123 Main St</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>28</td>
              <td>456 Oak Ave</td>
            </tr>
            <tr>
              <td>Bob Johnson</td>
              <td>42</td>
              <td>789 Pine St</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ExportFile;
