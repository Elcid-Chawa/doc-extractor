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
import { Plus, PlusCircle } from "lucide-react";
import { DataTable } from "./InvoiceTable";

export default function InvoiceForm({data, setData}:{data:any, setData:(prevData: any) => void}) {
  const form = useForm();
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "item",
        header: "Item",
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
        <div className="flex w-[100%] gap-2 flex-wrap mb-3">
          <FormField
            control={form.control}
            name="currency"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={"USD"}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EURO</SelectItem>
                    <SelectItem value="FCFA">FCFA</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="invoice"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={"invoice"}
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
              <FormItem>
                <FormControl>
                  <input
                    type="date"
                    value={new Date().toISOString().split("T")[0]}
                    onChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="invoiceNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="number" onChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customer"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
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
          <Button type="button">
            <PlusCircle />
          </Button>
        </div>

        <DataTable form={form} data={data} onChange={setData} columns={columns} />
        <Button onClick={addItem} type="button" className="mt-8 p-2 bg-green-500">
          <Plus /> Add Item
        </Button>
      </form>
    </Form>
  );
}
