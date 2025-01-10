"use client";
import React, { useState } from "react";
import { Upload, FileText, Plus, Save } from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function ViewerPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string>("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      const fileUrl = URL.createObjectURL(file);
      setFilePreviewUrl(fileUrl);
      reader.onload = () => {
        setFilePreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
            <FileText className="w-6 h-6" /> Viewer
          </h1>{" "}
        </div>
        <div className="flex-1 h-full overflow-y-auto shadow-sm p-4">
          {!filePreviewUrl ? (
            <div className="h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <label className="flex flex-col items-center cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400" />
                <span className="mt-2 text-sm text-gray-500">
                  Upload a document
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  onChange={handleFileUpload}
                />
              </label>
            </div>
          ) : (
            <div className="h-[600px]">
              <embed
                src={filePreviewUrl}
                type="application/pdf"
                className="w-full h-full rounded-lg"
              />
            </div>
          )}
        </div>
      </ResizablePanel>
      <ResizableHandle className="border border-2 " />
      <ResizablePanel>
        <div className="ml-3">Fileds</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
