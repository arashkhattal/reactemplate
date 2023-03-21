import React from "react";
// import { Chart,Bar } from "./ReactPdf";
// import {
//   Page,
//   Document,
//   StyleSheet,
//   Text,
//   View,
//   pdf,
//   Chart,
//   Bar,
// } from "@react-pdf/renderer";
import * as allImp from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import PptxGenJS from "pptxgenjs";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { Card, Grid } from "@mui/material";
import "../tables/htmlTable/Table.css";

const { Document, Page, View, Text, StyleSheet, pdf } = allImp;

// style for table in pdf export
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  pageTitle: {
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "#DFECFF",
    color: "black",
    fontWeight: "bold",
    marginBottom: 10,
    paddingTop: 10,
  },
  mainRow: {
    display: "flex",
    flexDirection: "columns",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 500,
  },
  value: {
    color: "#00a2b5",
    fontSize: 16,
    fontWeight: "bold",
  },
  topRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topDateDetails: {
    flexBasis: "40%",
  },
  topOtherDetails: {
    flexBasis: "59%",
  },
  topDetailsPart: {
    flexBasis: "49%",
  },
  dateDiv: {
    marginTop: 5,
    marginBottom: 5,
  },
  old: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
  },
  new: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#00a2b5",
  },
  tableContainer: {
    marginTop: 20,
    flexBasis: "32%",
    borderColor: "gray",
    borderWidth: 0.5,
    minHeight: "700px",
    minWidth: "100%",
  },
  table_header: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "left",
    textAlign: "left",
    fontStyle: "bold",
    backgroundColor: "#eeeeee",
    padding: 3,
  },
  table_row: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    alignItems: "left",
    padding: 4,
  },
  table_tt: {
    width: "48%",
    textAlign: "left",
    fontSize: 10,
  },
  row_table_tt: {
    width: "48%",
    textAlign: "left",
    fontSize: 8,
  },
  start_date: {
    width: "26%",
    textAlign: "center",
    fontSize: 10,
  },
  row_start_date: {
    width: "26%",
    textAlign: "center",
    fontSize: 8,
  },
  end_date: {
    width: "26%",
    textAlign: "center",
    fontSize: 10,
  },
  row_end_date: {
    width: "26%",
    textAlign: "center",
    fontSize: 8,
  },
  empty_table: {
    textAlign: "center",
    marginTop: "80px",
    fontSize: 8,
  },
});

// import * as XLSX from "xlsx";
// import * as FileSaver from "file-saver";
// import ApexCharts from "apexcharts";

const ExportFile = () => {
  // export pdf function
  const handleExportPdf = async () => {
    const data = [
      { label: "January", value: 10 },
      { label: "February", value: 20 },
      { label: "March", value: 15 },
      { label: "April", value: 25 },
      { label: "May", value: 30 },
    ];
    const MyDocument = () => (
      <Document>
        <Page size="A4" orientation="portrait" style={styles.page}>
          <View style={styles.topRow}>
            <View style={styles.tableContainer}>
              <View style={styles.table_header}>
                <Text style={styles.table_tt}>Name</Text>
                <Text style={styles.start_date}>Gender</Text>
                <Text style={styles.end_date}>Age</Text>
              </View>
              <>
                <View style={styles.table_row}>
                  <Text style={styles.row_table_tt}>Arash</Text>
                  <Text style={styles.row_start_date}>M</Text>
                  <Text style={styles.row_end_date}>21</Text>
                </View>
                <View style={styles.table_row}>
                  <Text style={styles.row_table_tt}>chinmay</Text>
                  <Text style={styles.row_start_date}>M</Text>
                  <Text style={styles.row_end_date}>21</Text>
                </View>
                <View style={styles.table_row}>
                  <Text style={styles.row_table_tt}>vedant</Text>
                  <Text style={styles.row_start_date}>M</Text>
                  <Text style={styles.row_end_date}>21</Text>
                </View>
              </>
            </View>
          </View>
        </Page>
        <Page size="A4" orientation="portrait" style={styles.page}>
          {/* <View style={styles.topRow}>
            <Text style={styles.row_table_tt}>Arash</Text>
          </View> */}
          <View>
            <Text>Bar Chart Example</Text>
            {/* <Chart data={data}>
              <Bar dataKey="value" fill="#8884d8" />
            </Chart> */}
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

    // Add Third slide with table
    const slide3 = pptx.addSlide();
    const chartAndTable = [
      [
        { text: "Name", options: { fontFace: "Arial", bold: true } },
        { text: "Age", options: { fontFace: "Arial", bold: true } },
        { text: "Address", options: { fontFace: "Arial", bold: true } },
      ],
      ["John Doe", 35, "123 Main St"],
      ["Jane Smith", 28, "456 Oak Ave"],
      ["Bob Johnson", 42, "789 Pine St"],
    ];
    const chartData2 = [
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
    slide3.addChart(pptx.ChartType.line, chartData2, {
      x: 0.5,
      y: 0.5,
      w: 4,
      h: 2,
    });
    slide3.addTable(chartAndTable, {
      x: 0.5,
      y: 2.7,
      w: 4,
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

  //  const exportToExcel = () => {
  //    const wb = XLSX.utils.book_new();

  //    // create the first sheet
  //    const ws1 = XLSX.utils.json_to_sheet([
  //      { name: "John", age: 35 },
  //      { name: "Jane", age: 25 },
  //      { name: "Bob", age: 45 },
  //    ]);
  //    XLSX.utils.book_append_sheet(wb, ws1, "Sheet 1");

  //    // create the second sheet
  //    const ws2 = XLSX.utils.json_to_sheet([
  //      { country: "USA", population: 330000000 },
  //      { country: "China", population: 1400000000 },
  //      { country: "India", population: 1360000000 },
  //    ]);
  //    XLSX.utils.book_append_sheet(wb, ws2, "Sheet 2");

  //    // save the file
  //    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });
  //    const file = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
  //    FileSaver.saveAs(file, "export.xlsx");
  //  };

  //  // utility function to convert string to ArrayBuffer
  //  const s2ab = (s) => {
  //    const buf = new ArrayBuffer(s.length);
  //    const view = new Uint8Array(buf);
  //    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
  //    return buf;
  //  };

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
              // sheet="Sheet 1"
              sheet={["Sheet 1", "Sheet 2"]}
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
