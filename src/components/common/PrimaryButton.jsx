import React from "react";
import LoadingIcon from "../icons/LoadingIcon";

const PrimaryButton = ({ children }) => {
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
        {children}
      </button>
    </>
  );
};

export default PrimaryButton;
