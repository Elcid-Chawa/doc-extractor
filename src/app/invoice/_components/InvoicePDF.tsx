"use client";
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

export default function InvoicePDF({ data }: { data: any[] }) {
  // Create styles
  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      // flexGrow: 1,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "black",
      borderStyle: "solid",
    },
    cell: {
      width: "16.66%", // Adjusted to evenly distribute columns
      textAlign: "center",
    },
    boldText: {
      fontWeight: "bold",
    },
    totals: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ backgroundColor: "green", height: "100px" }} />
        <View style={styles.section}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Invoice</Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* Invoice Details */}
            <View style={styles.section}>
              <Text>Invoice Number: 0001</Text>
              <Text>Invoice Date: {new Date().toLocaleDateString()}</Text>
              <Text>Due Date: {new Date().toLocaleDateString()}</Text>
            </View>

            {/* Client Details */}
            <View style={styles.section}>
              <Text style={{ fontWeight: "bold" }}>Bill To:</Text>
              <Text>Customer Name</Text>
              <Text>Shiping Address</Text>
              <Text>Address</Text>
            </View>
          </View>

          <View style={{ ...styles.row, backgroundColor: "gray", padding:5 }}>
            <Text style={styles.cell}>ID</Text>
            <Text style={styles.cell}>Item</Text>
            <Text style={styles.cell}>Qty</Text>
            <Text style={styles.cell}>UP</Text>
            <Text style={styles.cell}>Tax</Text>
            <Text style={styles.cell}>Total</Text>
          </View>
          {data.map((item, idx) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                borderBottom: "1px solid black",
              }}
              key={idx}
            >
              <Text style={styles.cell}>{idx}</Text>
              <Text style={styles.cell}>{item.item}</Text>
              <Text style={styles.cell}>{item.qty}</Text>
              <Text style={styles.cell}>{item.price}</Text>
              <Text style={styles.cell}>{item.tax}</Text>
              <Text style={styles.cell}>
                {parseInt(item.qty) * parseInt(item.price)}
              </Text>
            </View>
          ))}
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "green",
            display: "flex",
            justifyContent: "flex-end",
            padding:10,
            margin:10,
          }}
        >
          <View style={styles.row}>
            <Text style={styles.cell}>Sub Total:</Text>
            <Text style={styles.cell}>0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cell}>Tax()</Text>
            <Text>0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cell}>Total: </Text>
            <Text style={styles.cell}>0</Text>
          </View>
          <View style={{ borderBottomWidth: 2 }}>
            <Text></Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
