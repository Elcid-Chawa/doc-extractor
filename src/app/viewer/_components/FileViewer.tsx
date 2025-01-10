'use client';
import InvoicePDF from "@/app/invoice/_components/InvoicePDF";
import { PDFViewer } from "@react-pdf/renderer";
import { FileText, Upload } from "lucide-react";
import React, {useState, useEffect} from "react";

export default function FileViewer({
  filePreviewUrl,
  handleFileUpload,
}: {
  filePreviewUrl: string;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if(!isClient) {
    return <div>Loading...</div>  
  }

  return (
    <div>
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
          <div className="h-[600px] w-full">
            <embed
              src={filePreviewUrl}
              type="application/pdf"
              className="w-full h-full rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
