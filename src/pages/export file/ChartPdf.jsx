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

const styles = StyleSheet.create({
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

const ChartPdf = () => {
    const data = [
      { label: "January", value: 10 },
      { label: "February", value: 20 },
      { label: "March", value: 15 },
      { label: "April", value: 25 },
      { label: "May", value: 30 },
    ];

  return (
    <>
      {data?.map((cd) => {
        <View
          style={{
            ...styles.chart_bar,
            backgroundColor: "red",
            height: `50%`,
          }}
        >
          <Text>{cd?.label}</Text>
          <Text>{cd?.value}</Text>
        </View>;
      })}
    </>
  );
};

export default ChartPdf;
