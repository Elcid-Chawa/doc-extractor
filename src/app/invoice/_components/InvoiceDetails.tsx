"use client";
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  BlobProvider,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import InvoicePDF from "./InvoicePDF";
import { DownloadIcon } from "lucide-react";

export default function InvoiceDetails({ data }: { data: any[] }) {
  return (
    <div className="px-5 h-full">
      <h1>PDF Preview</h1>
      {/* PDF Preview */}
      <div className="border p-4 mb-4 max-h-[600px]">
        <BlobProvider document={<InvoicePDF data={data} />}>
          {({ url, loading }) =>
            loading ? (
              <p>Loading PDF preview...</p>
            ) : (
              <iframe
                src={url!}
                style={{ width: "100%", height:"600px" }}
                title="PDF Preview"
              />
            )
          }
        </BlobProvider>
      </div>
      <div className="flex justify-end">
        <PDFDownloadLink
          document={<InvoicePDF data={data} />}
          fileName="somename.pdf"
        >
          {({ loading }: { loading: boolean }) =>
            loading ? (
              <p>Loading PDF preview...</p>
            ) : (
              <button className="btn flex gap-2 mt-8 border p-2 rounded-md">
                <span>
                  <DownloadIcon />
                </span>
                Download now!
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}
