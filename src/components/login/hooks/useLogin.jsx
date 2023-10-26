import React, { useState } from "react";
import { useForm } from "react-hook-form";

const useLogin = (nextStep) => {
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setGeneralError("");
    setLoading(true);
    alert("You are logged in");
  };

  return { register, handleSubmit, onSubmit, generalError, errors, loading };
};

export default useLogin;
