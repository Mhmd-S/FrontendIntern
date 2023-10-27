import React, { useState } from "react";
import { useForm } from "react-hook-form";

const useUploadFile = (nextStep) => {
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
    alert("Your File is being Scanned");
  };

  return { register, handleSubmit, onSubmit, generalError, errors, loading };
};

export default useUploadFile;
