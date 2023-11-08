import React from "react";
import FormField from "../common/FormField";
import Form from "../common/Form";
import useInitiationNetworkSecurity from "./hooks/useInitiationNetworkSecurity";
import FormButton from "../common/FormButton";
import FormGeneralErrorMessage from "../common/FormGeneralErrorMessage";
import RadioGroup from "../common/RadioGroup";
import FormFieldError from "../common/FormFieldError";
import ScanSelection from "../common/ScanSelection";

const portOptions = [
  { value: "crticial", label: "Critical" },
  { value: "all", label: "All" },
  { value: "custom", label: "Custom" },
  { value: "network", label: "Network" },
];

const InitiationNetworkSecurity = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    generalError,
    errors,
    loading,
    portRangeWatch,
  } = useInitiationNetworkSecurity();

  return (
    <div className="w-full h-full p-4 grid grid-rows-[25%_75%] grid-cols-1 items-center md:grid-cols-[50%_50%] md:grid-rows-1">
      
      <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-[5.5rem] md:h-fit md:items-start">
      
        <h1 className="w-full py-4 text-3xl text-center leading-tight md:py-4 md:text-[5rem] md:text-start">
          Network Security Explorer
        </h1>

        <p className="w-full text-sm text-[#9DA4AB] text-center md:block md:text-start md:text-lg">
          Network security is the practice of preventing and protecting against
          unauthorized intrusion into corporate networks.
        </p>
      
      </div>

      <div className="relative w-full h-full p-4 grid grid-cols-1 grid-rows-[85%_15%] justify-center items-center md:p-12 md:h-full">
        
        <div className="w-full h-full p-4 grid grid-rows-[10%_90%] grid-cols-1 justify-center items-center rounded-t-3xl bg-[#1E293B] border-b-2 border-b-[#304566] shadow-[inset_5px_5px_15px_10px_#fafafa05]">
        
          <FormGeneralErrorMessage generalError={generalError} />
        
          <Form onSubmit={handleSubmit(onSubmit)} loading={loading}>
        
            <div className="w-full h-fit relative">
        
              <FormField
                label="Ip Address"
                name="IpAddress"
                type="text"
                register={register}
                errors={errors}
                placeholder="IP Address ex. 192.168.0.1"
                validationRules={{
                  required: "IP Address is required",
                  pattern: {
                    value: /^([0-9]{1,3}\.){3}[0-9]{1,3}$/,
                    message: "Invalid IP Address",
                  },
                }}
              />
        
            </div>

            <RadioGroup
              label="Port Range"
              name="portRange"
              register={register}
              errors={errors}
              options={portOptions}
              validationRules={{
                required: "Port Range is required",
              }}
              defaultOption="custom"
            />

            <input
              label="Custom Port Range"
              name="customPortRange"
              type="text"
              {...register("customPortRange", {
                pattern: {
                  value: /^([0-9]{1,5},)*[0-9]{1,5}$/,
                  message: "Invalid Port Range",
                },
                validate: (value) => {
                  if (portRangeWatch === "custom" && !value) {
                    return "Custom Port Range is required";
                  }
                },
              })}
              placeholder="Custom Ports"
              disabled={portRangeWatch !== "custom"}
              className="w-full p-2 mt-2 mb-4 text-lg text-white bg-[#1E293B] border-2 border-[#304566] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#304566] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />

            <FormFieldError name="customPortRange" errors={errors} />

        
            <FormButton text="Initiate Testing" />
        
              
          </Form>
        
        </div>
        
        <div className="w-full h-full bg-[#182234] flex justify-center items-center rounded-b-3xl shadow-[inset_5px_5px_15px_10px_#fafafa05]">
        
          <p className="p-4 text-[#76859A] text-[0.75rem] md:text-md">
            Your network will be tested against attacks such as port scanning,
            denial of service, and SQL injection.
        
          </p>
        
        </div>
      
        <ScanSelection currentScan='Network Scan' />

      </div>
    
    </div>
  );
};

export default InitiationNetworkSecurity;
