import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import FormField from "../common/FormField";
import useLogin from "./hooks/useLogin";
import FormGeneralErrorMessage from "../common/FormGeneralErrorMessage";
import Form from "../common/Form";
import FormButton from "../common/FormButton";

const Login = () => {
  const { register, handleSubmit, onSubmit, generalError, errors, loading } =
    useLogin();

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-6  bg-[#1E293B] rounded-md shadow-lg">
        <h2 className="text-2xl text-center">Welcome Back!</h2>
        <form className="mt-4">
          <div className="mb-4">
            <FormGeneralErrorMessage
              generalError={generalError}
            ></FormGeneralErrorMessage>
            <Form onSubmit={handleSubmit(onSubmit)} loading={loading}>
              <FormField
                name="email"
                defaultValue=""
                placeholder="Email"
                register={register}
                errors={errors}
                validationRules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid Email",
                  },
                }}
              ></FormField>
              <FormField
                name="password"
                defaultValue=""
                placeholder="Password"
                register={register}
                errors={errors}
                validationRules={{
                  required: "Password is required",
                  pattern: {
                    value: /^.*\S+.*$/,
                    message: "Password cannot be empty",
                  },
                }}
              ></FormField>
              <FormButton text="Login" />
            </Form>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
