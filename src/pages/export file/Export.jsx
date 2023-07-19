import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  pdf,
  Svg,
  Canvas,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import PptxGenJS from "pptxgenjs";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { Card, Grid } from "@mui/material";
import "../tables/htmlTable/Table.css";
import Chart from "./ChartPdf";
import ApexCharts from "react-apexcharts";
import { Line } from "react-chartjs-2";
import ChartPdf from "./ChartPdf";

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
  chart_container: {
    marginTop: 20,
    marginLeft: 70,
    height: 180,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  chart_bar: {
    width: 70,
    minHeight: "30px",
    backgroundColor: "#969696",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    textAlign: "center",
    justifyContent: "flex-end",
    overflow: "visible",
  },
});

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
          {/* <View>
            <Text>My Sales Chart</Text>
            <MyChart />
          </View> */}
          <View
            style={{
              ...styles.chart_bar,
              backgroundColor: "red",
              height: `50%`,
            }}
          >
            <Text>asd</Text>
            <Text>12</Text>
          </View>
          <View
            style={{
              ...styles.chart_bar,
              backgroundColor: "red",
              height: `50%`,
            }}
          >
            <Text>sdff</Text>
            <Text>34</Text>
          </View>
          <View
            style={{
              ...styles.chart_bar,
              backgroundColor: "red",
              height: `50%`,
            }}
          >
            <Text>fgfg</Text>
            <Text>56</Text>
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
            {/* <ReactHTMLTableToExcel
              className="btn_primary btn_primary_hover"
              size="small"
              table="myTable"
              filename="myData"
              // sheet="Sheet 1"
              sheet={["Sheet 1", "Sheet 2"]}
              buttonText="Export to Excel"
              onClick={exportToExcel}
            /> */}
            <button
              className="btn_primary btn_primary_hover"
              size="small"
              style={{
                color: "white",
              }}
              onClick={exportToExcel}
            >
              Export to Excel
            </button>
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
