"use client";
import React, { useState, useEffect } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

export default function InvoicePDF({
  data,
  headerData,
}: {
  data: any[];
  headerData: any;
}) {
  // Create styles
  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,
    },
    section: {
      padding: 10,
      flexGrow: 1,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#d3d3d3",
      borderStyle: "solid",
    },
    trow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      width: "300px",
    },
    cell: {
      width: "16.66%", // Adjusted to evenly distribute columns
      padding: 4,
      fontSize: 12,
    },
    totalscell: {
      textAlign: "right",
      fontSize: 12,
      padding: 4,
      width: "50%",
    },
    boldText: {
      fontWeight: "bold",
      fontSize: 12,
    },
    totals: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    subSection: {
      display: "flex",
      flexDirection: "row",
      flexBasis: "50%",
      gap: 5,
      marginBottom: 10,
    },
    regularText: {
      fontSize: 12,
    },
  });

  const calculatedSubTotal = () =>
    data.reduce((acc, item) => acc + item.price * item.qty, 0);
  const calculatedTax = () =>
    data.reduce((acc, item) => acc + item.price * (item.tax / 100), 0);
  const calculatedTotal = () => calculatedSubTotal() + calculatedTax();
  return (
    <Document>
      <Page size={"A4"} wrap={false} style={styles.page}>
        <View
          style={{ backgroundColor: "green", height: 100, marginBottom: 10 }}
        />

        <View style={styles.section}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginVertical: 10,
            }}
          >
            {headerData.documentType.toUpperCase()}
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              // justifyContent: "space-between",
              gap: 5,
            }}
          >
            {/* Invoice Details */}
            <View style={styles.subSection}>
              <View>
                <Text style={styles.boldText}>From:</Text>
              </View>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={styles.regularText}>ABC Company</Text>
                <Text style={styles.regularText}>hello@Abcompany.com</Text>
                <Text style={styles.regularText}>+237 672 254 116</Text>
              </View>
            </View>

            {/* Client Details */}
            <View style={styles.subSection}>
              <View>
                <Text style={styles.boldText}>To: </Text>
              </View>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={styles.regularText}>ABC Company</Text>
                <Text style={styles.regularText}>hello@Abcompany.com</Text>
                <Text style={styles.regularText}>+237 672 254 116</Text>
              </View>
            </View>
          </View>

          <View
            style={{ ...styles.row, backgroundColor: "#F0F0F0", padding: 5 }}
          >
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
                paddingVertical: 4,
                borderBottom: "1px solid #d3d3d3",
              }}
              key={idx}
            >
              <Text style={styles.cell}>{idx}</Text>
              <Text style={styles.cell}>{item.item}</Text>
              <Text style={styles.cell}>{item.qty}</Text>
              <Text style={styles.cell}>{item.price}</Text>
              <Text style={styles.cell}>{item.tax}%</Text>
              <Text style={{ ...styles.cell, textAlign: "right" }}>
                {parseInt(item.qty) * parseInt(item.price)}
              </Text>
            </View>
          ))}
        </View>

        <View
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
            // justifyContent: "flex-end",
            marginBottom: 10,
            paddingRight: 10,
          }}
        >
          <View style={styles.trow}>
            <Text style={styles.totalscell}>Sub Total:</Text>

            <Text
              style={{
                ...styles.totalscell,
                borderBottomColor: "#d3d3d3",
                borderBottomWidth: 2,
                paddingBottom: 10,
              }}
            >
              {calculatedSubTotal()}
            </Text>
          </View>
          <View style={styles.trow}>
            <Text style={styles.totalscell}>
              Tax({`${headerData.currency}`}):
            </Text>
            <Text
              style={{
                ...styles.totalscell,
                borderBottomColor: "#d3d3d3",
                borderBottomWidth: 2,
                paddingVertical: 10,
              }}
            >
              {calculatedTax()}
            </Text>
          </View>
          <View style={styles.trow}>
            <Text style={styles.totalscell}>Total: </Text>
            <Text
              style={{
                ...styles.totalscell,
                borderBottomColor: "#d3d3d3",
                borderBottomWidth: 2,
                paddingVertical: 10,
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              {calculatedTotal()}
            </Text>
          </View>
          <View style={{ borderBottomWidth: 2 }}>
            <Text></Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
