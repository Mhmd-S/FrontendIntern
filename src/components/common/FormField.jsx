import React from "react";
import FormFieldError from "./FormFieldError";

const FormField = ({
  label,
  name,
  type,
  register,
  errors,
  validationRules,
  defaultValue,
  placeholder,
  ...inputProps
}) => {
  return (
    <div className="w-full flex flex-col py-2">
      <label
        htmlFor={name}
        className="block text-lg pb-4 underline font-medium leading-6 text-white"
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register(name, validationRules)}
        {...inputProps}
        className={`block w-full rounded-md p-1.5 py-2.5 bg-[#334155] text-white border-2 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6' ${
          errors[name] ? "border-pink-600" : "border-transparent"
        } `}
      />

      <FormFieldError name={name} errors={errors} />
    </div>
  );
};

export default FormField;
