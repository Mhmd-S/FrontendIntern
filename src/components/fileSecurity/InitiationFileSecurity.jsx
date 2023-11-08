import React from "react";
import FormField from "../common/FormField";
import Form from "../common/Form";
import FormButton from "../common/FormButton";
import FormGeneralErrorMessage from "../common/FormGeneralErrorMessage";
import RadioGroup from "../common/RadioGroup";
import FormFieldError from "../common/FormFieldError";
import useInitiationFileSecurity from "./hooks/useInitiationFileSecuirty";
import FileUploadField from "../common/FileUploadField";
import ScanSelection from "../common/ScanSelection";

const InitiationFileSecurity = ({ setFile }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    resetField,
    setError,
    generalError,
    errors,
    loading,
  } = useInitiationFileSecurity( setFile );

  return (
    <div className="w-full h-full p-4 grid grid-rows-[25%_75%] grid-cols-1 items-center md:grid-cols-[50%_50%] md:grid-rows-1">
      
      
      <div className='w-full h-full flex flex-col items-center justify-center px-4 md:px-[5.5rem] md:h-fit md:items-start'>
        <h1 className='w-full py-8 text-3xl text-center leading-tight md:py-4 md:text-[5rem] md:text-start'>
          File Content Security Analyzer
        </h1>
      
        <p className="w-full text-sm text-[#9DA4AB] text-center md:block md:text-start md:text-lg">
          File security is a critical component of any organization's
          security strategy. It involves the protection of hardware, software,
          and data from unauthorized access, use, disclosure, disruption,
          modification, or destruction.
        </p>
      
      </div>

      <div className="relative w-full h-5/6 p-4 grid grid-cols-1 grid-rows-[75%_25%] justify-center items-center md:p-12 md:h-full">
      
        <div className="w-full h-full p-4 grid grid-rows-[10%_90%] grid-cols-1 justify-center items-center rounded-t-3xl bg-[#1E293B] border-b-2 border-b-[#304566] shadow-[inset_5px_5px_15px_10px_#fafafa05]">
      
          <FormGeneralErrorMessage generalError={generalError} />
          
          <Form onSubmit={handleSubmit(onSubmit)} loading={loading}>

              <FileUploadField
                 type='file' 
                 name='file1' 
                 register={register}
                 errors={errors}
                 resetField={resetField}
                 setError={setError}
                 validationRules={{
                     required: 'File is required',
                 }}
              />

            <FormButton text="Initiate Testing" />

          </Form>

        </div>

        <div className="w-full h-full bg-[#182234] flex justify-center items-center rounded-b-3xl shadow-[inset_5px_5px_15px_10px_#fafafa05]">
          
          <p className="p-4 text-[#76859A] text-[0.75rem] md:text-md">
            Your network will be tested against attacks such as port scanning,
            denial of service, and SQL injection.
          </p>

        </div>

        <ScanSelection currentScan='File Scan' />

      </div>

    </div>
  );
};

export default InitiationFileSecurity;
