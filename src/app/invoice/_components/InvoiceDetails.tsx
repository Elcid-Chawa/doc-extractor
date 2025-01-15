"use client";
import React, { useState, useEffect } from "react";
import { BlobProvider, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "./InvoicePDF";
import { DownloadIcon } from "lucide-react";

export default function InvoiceDetails({
  data,
  headerData,
}: {
  data: any[];
  headerData: any;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-5 h-full w-[100%] bg-gray-300">
      <h1 className="font-bold text-lg">PDF Preview</h1>
      {/* PDF Preview */}
      <div className="max-h-[600px] w-full">
        <PDFViewer showToolbar={false} className="w-[100%]  h-[600px]">
          <InvoicePDF data={data} headerData={headerData} />
        </PDFViewer>

        {/* <BlobProvider
          document={<InvoicePDF data={data} headerData={headerData} />}
        >
          {({ url, loading }) =>
            loading ? (
              <p>Loading PDF preview...</p>
            ) : (
              <iframe
                src={url!}
                style={{ width: "100%", height: "600px" }}
                title="PDF Preview"
              />
            )
          }
        </BlobProvider> */}
      </div>
      <div className="flex justify-center">
        <PDFDownloadLink
          document={<InvoicePDF data={data} headerData={headerData} />}
          fileName="somename.pdf"
        >
          {/* {({ loading }: { loading: boolean }) =>
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
          } */}
          <button
            style={{ backgroundColor: "green", color: "white" }}
            className="btn flex gap-2 mt-8 border py-2 px-5"
          >
            <span>
              <DownloadIcon />
            </span>
            Download
          </button>
        </PDFDownloadLink>
      </div>
    </div>
  );
}
