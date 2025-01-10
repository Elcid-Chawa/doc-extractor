"use client";
import React, { useState } from "react";
import { Upload, FileText, Plus, Save } from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import FileViewer from "./_components/FileViewer";
import FieldsViewer from "./_components/FieldsViewer";

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
    <ResizablePanelGroup className="pt-4" direction="horizontal">
      <ResizablePanel>
        <FileViewer
          filePreviewUrl={filePreviewUrl}
          handleFileUpload={handleFileUpload}
        />
      </ResizablePanel>
      <ResizableHandle className="border border-2 " />
      <ResizablePanel>
        <FieldsViewer />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
