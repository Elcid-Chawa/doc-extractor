"use client";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import InvoiceForm from "./_components/InvoiceForm";
import InvoiceDetails from "./_components/InvoiceDetails";

export default function InvoicePage() {
  const [data, setData] = React.useState([
    { item: "", qty: 0, price: 0, tax: 0 },
  ]);
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <InvoiceForm data={data} setData={setData} />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <InvoiceDetails data={data} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
