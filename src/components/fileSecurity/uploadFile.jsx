import React from "react";
import FormField from "../common/FormField";
import FormGeneralErrorMessage from "../common/FormGeneralErrorMessage";
import Form from "../common/Form";
import FormButton from "../common/FormButton";
import useUploadFile from "./hooks/useUploadFile";

const UploadFile = () => {
  const { register, handleSubmit, onSubmit, generalError, errors, loading } =
    useUploadFile();

  return (
    <div className="w-full h-5/6 p-4 grid grid-cols-1 grid-rows-[70%_30%] justify-center items-center md:p-20 md:h-full">
      <div className="w-full h-full p-4 grid grid-rows-[10%_90%] grid-cols-1 justify-center items-center rounded-t-3xl bg-[#1E293B] border-b-2 border-b-[#304566] shadow-[inset_5px_5px_15px_10px_#fafafa05]">
        <FormGeneralErrorMessage generalError={generalError} />

        <Form onSubmit={handleSubmit(onSubmit)} loading={loading}>
          <FormField
            label="Upload Your File"
            name="file"
            type="file"
            register={register}
            errors={errors}
            placeholder="File"
          />
          <FormButton text="Initiate Scan" />
        </Form>
      </div>

      <div className="w-full h-full bg-[#182234] flex justify-center items-center rounded-b-3xl shadow-[inset_5px_5px_15px_10px_#fafafa05]">
        <p className="p-4 text-[#76859A]">
          With our File Virus Scan service, you can ensure the safety of your
          digital assets and have peace of mind while using them. You'll receive
          immediate feedback on the scan results.
        </p>
      </div>
    </div>
  );
};

export default UploadFile;
