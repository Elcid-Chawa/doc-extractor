"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { DataTable } from "./InvoiceTable";
import { Textarea } from "@/components/ui/textarea";
export default function InvoiceForm({
  data,
  headerData,
  setData,
  setHeaderData,
}: {
  data: any;
  headerData: any;
  setData: (prevData: any) => void;
  setHeaderData: (prevData: any) => void;
}) {
  const [notes, setNotes] = React.useState("");
  const form = useForm();
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "item",
        header: "ID",
      },
      {
        accessorKey: "qty",
        header: "QTY",
      },
      {
        accessorKey: "price",
        header: "Price",
      },
      {
        accessorKey: "tax",
        header: "Tax",
      },
    ],
    [],
  );

  const addItem = () => {
    setData([...data, { item: "", qty: 0, price: 0, tax: 0 }]);
  };
  return (
    <Form {...form}>
      <form>
        <div className="flex w-[100%] gap-3 flex-wrap mb-3">
          <FormField
            control={form.control}
            name="currency"
            render={({ field }) => (
              <FormItem className="min-w-[110px]">
                <Select
                  onValueChange={(value) => {
                    field.onChange;
                    setHeaderData({ ...headerData, currency: value });
                  }}
                  defaultValue={headerData.currency}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="USD">USD ($)</SelectItem>
                    <SelectItem value="EUR">EURO (€) </SelectItem>
                    <SelectItem value="FCFA">FCFA </SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="documentType"
            render={({ field }) => (
              <FormItem className="min-w-[110px]">
                <Select
                  onValueChange={(value) => {
                    setHeaderData({ ...headerData, documentType: value });
                  }}
                  defaultValue={headerData.documentType}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a document type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="invoice">invoice</SelectItem>
                    <SelectItem value="recipt">receipt</SelectItem>
                    <SelectItem value="proforma">proforma</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="min-w-[110px] border flex items-center p-2 text-sm">
                <FormControl>
                  <input
                    type="date"
                    defaultValue={headerData.date}
                    onChange={(e) => {
                      field.onChange;
                      setHeaderData({ ...headerData, date: e.target.value });
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="invoiceNumber"
            render={({ field }) => (
              <FormItem className="min-w-[110px]">
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Invoice Number"
                    className="border flex items-center "
                    onChange={(e) => {
                      field.onChange;
                      setHeaderData({
                        ...headerData,
                        invoiceNumber: e.target.value,
                      });
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customerName"
            render={({ field }) => (
              <FormItem className="min-w-[200px]">
                <Select
                  onValueChange={(value) => {
                    field.onChange;
                    setHeaderData({ ...headerData, customerName: value });
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Customer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="customer1">ABC customer</SelectItem>
                    <SelectItem value="customer2">EFG Customer</SelectItem>
                    <SelectItem value="customer3">HIJ Customer</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button
            type="button"
            style={{ backgroundColor: "green" }}
            className=" rounded-full w-10 h-10"
          >
            <Plus />
          </Button>
        </div>
        <div className="max-h-[600px] overflow-y-scroll">
          <DataTable
            form={form}
            data={data}
            onChange={setData}
            columns={columns}
          />
          <Button
            onClick={addItem}
            type="button"
            style={{ backgroundColor: "green" }}
            className="mt-8 p-4 rounded-2xl text-md "
          >
            <Plus /> Add Item
          </Button>
        </div>

        <hr className="my-4 border-2 border-gray-300 " />
        <div className="flex flex-col gap-4">
          <Label className="font-bold text-lg">Invoice Payment Methods</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex  items-center border p-4 max-w-full text-gray-500">
              <Checkbox id="mtn" />
              <Label htmlFor="mtn" className="ml-2 text-md">
                MTN Mobile Money
              </Label>
            </div>
            <div className="flex  items-center border p-4 max-w-full text-gray-500">
              <Checkbox id="orange" />
              <Label htmlFor="orange" className="ml-2 text-md">
                Orange Money
              </Label>
            </div>
            <div className="flex  items-center border p-4 max-w-full text-gray-500">
              <Checkbox id="airtime" />
              <Label htmlFor="airtime" className="ml-2 text-md">
                Airtime
              </Label>
            </div>
            <div className="flex  items-center border p-4 max-w-full text-gray-500">
              <Checkbox id="bank-transfer" />
              <Label htmlFor="bank-transfer" className="ml-2 text-md">
                Bank Transfer
              </Label>
            </div>
          </div>
        </div>
        <hr className="my-4 border-2 border-gray-300 " />
        <div>
          <div className="flex justify-between">
            <Label className="font-bold text-lg">Notes</Label> <span className="text-sm text-gray-500">*optional</span>
          </div>
          <div>
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <Textarea
                    placeholder="Enter your notes here..."
                    className="mt-2"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
}
