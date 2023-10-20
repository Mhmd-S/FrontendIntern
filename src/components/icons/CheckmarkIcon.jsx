import React from "react";

const  CheckmarkIcon = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" className={`w-1/3 h-1/3`}>
      <path
        fill={`${color ? color : '#B1CC33'}`}
        d="M61.5 23.3l-8.013-8.013-25.71 25.71-9.26-9.26-8.013 8.013 17.42 17.44z"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M10.5 39.76L27.92 57.2 61.5 23.31l-8.013-8.013-25.71 25.71-9.26-9.26z"
      ></path>
    </svg>
  );
}

export default CheckmarkIcon;
