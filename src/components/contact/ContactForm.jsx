import React from "react";
import FormField from "../common/FormField";
import FormGeneralErrorMessage from "../common/FormGeneralErrorMessage";
import Form from "../common/Form";
import FormButton from "../common/FormButton";
import useContact from "./hooks/useContact";

const ContactForm = () => {
  const { register, handleSubmit, onSubmit, generalError, errors, loading } =
    useContact();

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-6  bg-[#1E293B] rounded-md shadow-lg">
        <div className="mb-4">
          <FormGeneralErrorMessage generalError={generalError} />
          <Form onSubmit={() => handleSubmit(onSubmit)} loading={loading}>
            <FormField
              label="First Name"
              name="first"
              defaultValue=""
              placeholder="First Name"
              register={register}
              errors={errors}
              validationRules={{
                required: "First Name is required",
                pattern: {
                  value: /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/,
                  message: "First Name cannot have any number of symbols",
                },
              }}
            ></FormField>
            <FormField
              label="Last Name"
              name="last"
              defaultValue=""
              placeholder="Last Name"
              register={register}
              errors={errors}
              validationRules={{
                required: "Last Name is required",
                pattern: {
                  value: /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/,
                  message: "Last Name cannot have any number of symbols",
                },
              }}
            ></FormField>
            <FormField
              label="Message"
              name="message"
              defaultValue=""
              placeholder="Message"
              register={register}
              errors={errors}
              validationRules={{
                required: "Message is required",
                pattern: {
                  value: /^.*\S+.*$/,
                  message: "Message cannot be empty",
                },
              }}
            ></FormField>
            <FormButton text="Send" />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
