"use client";
import React, { useState, useEffect } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import InvoiceForm from "./_components/InvoiceForm";
import InvoiceDetails from "./_components/InvoiceDetails";

export default function InvoicePage() {
  const [data, setData] = useState([{ item: "", qty: 0, price: 0, tax: 0 }]);
  const [today, setToday] = useState(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  const [headerData, setHeaderData] = useState({
    currency: "USD",
    documentType: "invoice",
    date: today,
    invoiceNumber: 0,
    cusotmerName: "",
  });

  return (
    <ResizablePanelGroup className="pt-4 h-screen" direction="horizontal">
      <ResizablePanel className="h-full">
        <InvoiceForm
          data={data}
          setData={setData}
          headerData={headerData}
          setHeaderData={setHeaderData}
        />
      </ResizablePanel>
      <ResizableHandle className="border border-2 mx-3" />
      <ResizablePanel>
        <InvoiceDetails data={data} headerData={headerData} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
