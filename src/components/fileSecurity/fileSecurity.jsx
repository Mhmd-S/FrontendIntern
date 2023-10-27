import React from "react";
import UploadFile from "./uploadFile";

const FileSecurity = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-4/5">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1">
          <div className="flex flex-col justify-center md:col-span-1 sm:col-span-2">
            <h1 className="text-5xl font-bold mb-4">Scan your File</h1>
            <div className="mb-3">
              <p>
                Ensure the safety of your files by scanning them for viruses and
                malware. Simply upload your file, and our powerful virus
                scanning technology will inspect it thoroughly to identify any
                potential threats. Your uploaded files are kept confidential,
                and our system will promptly notify you of the results.
              </p>
            </div>
          </div>
          <div className="md:col-span-1 sm:col-span-2">
            <UploadFile></UploadFile>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileSecurity;
