import React from "react";

export default function FieldsViewer() {
  return (
    <div>
      <h1 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
        Fields
      </h1>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">Invoice Meta Data</h3>
          <div className="flex flex-col">
            <p>Invoice Number</p>
            <p>Invoice Date</p>
            <p>Due Date</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">Invoice Meta Data</h3>
          <div className="flex flex-col">
            <p>Invoice Number</p>
            <p>Invoice Date</p>
            <p>Due Date</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">Invoice Meta Data</h3>
          <div className="flex flex-col">
            <p>Invoice Number</p>
            <p>Invoice Date</p>
            <p>Due Date</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">Invoice Meta Data</h3>
          <div className="flex flex-col">
            <p>Invoice Number</p>
            <p>Invoice Date</p>
            <p>Due Date</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">Line Items</h3>
          <table></table>
        </div>
      </div>
    </div>
  );
}
