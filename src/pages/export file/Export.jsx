import React from "react";
import { pdf, Document, Page, Text, View } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import PptxGenJS from "pptxgenjs";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { Card, Grid } from "@mui/material";
import "../tables/htmlTable/Table.css";
// import ApexCharts from "apexcharts";

const ExportFile = () => {
  // export pdf function
  const handleExportPdf = async () => {
    const MyDocument = () => (
      <Document>
        <Page>
          <View>
            <Text>Table</Text>
            <table>
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
          </View>
        </Page>
      </Document>
    );

    const pdfBlob = await pdf(<MyDocument />).toBlob();
    saveAs(pdfBlob, "myDocument.pdf");
  };

  //   export as ppt function
  const handleExportPpt = () => {
    const pptx = new PptxGenJS();

    // Add first slide with chart
    const slide1 = pptx.addSlide();
    const chartData = [
      {
        name: "Series 1",
        labels: ["January", "February", "March"],
        values: [5, 8, 3],
      },
      {
        name: "Series 2",
        labels: ["January", "February", "March"],
        values: [3, 2, 7],
      },
    ];
    slide1.addChart(pptx.ChartType.line, chartData, {
      x: 0.5,
      y: 0.5,
      w: 8,
      h: 5,
    });

    // Add second slide with table
    const slide2 = pptx.addSlide();
    const table = [
      [
        { text: "Name", options: { fontFace: "Arial", bold: true } },
        { text: "Age", options: { fontFace: "Arial", bold: true } },
        { text: "Address", options: { fontFace: "Arial", bold: true } },
      ],
      ["John Doe", 35, "123 Main St"],
      ["Jane Smith", 28, "456 Oak Ave"],
      ["Bob Johnson", 42, "789 Pine St"],
    ];
    slide2.addTable(table, {
      x: 0.5,
      y: 0.5,
      w: 8,
      fill: "F7F7F7",
      autoPage: true,
      margin: [0.2, 0.2, 0.2, 0.2],
    });

    // Write the PowerPoint presentation to a file
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
        <h1>Example for all types export</h1>
        <br />
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
        <br />
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
