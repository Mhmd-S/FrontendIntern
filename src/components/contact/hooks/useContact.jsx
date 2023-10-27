import React, { useState } from "react";
import { useForm } from "react-hook-form";

const useContact = (nextStep) => {
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
    alert("Thank you for contacting us. We will get back to you shortly");
  };

  return { register, handleSubmit, onSubmit, generalError, errors, loading };
};

export default useContact;
