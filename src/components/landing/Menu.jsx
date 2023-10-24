import React from "react";
import PrimaryButton from "../common/PrimaryButton";

const Menu = ({ title, icon, content, buttonContent }) => {
  return (
    <div className="w-full flex flex-col space items-center justify-evenly bg-[#1E293B] h-[500px] p-5">
      <h1 className="text-2xl">{title}</h1>
      {icon}
      <p>{content}</p>
      <PrimaryButton>{buttonContent}</PrimaryButton>
    </div>
  );
};

export default Menu;
