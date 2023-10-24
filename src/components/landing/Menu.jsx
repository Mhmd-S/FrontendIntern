import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import { Link } from "react-router-dom";

const Menu = ({ title, icon, content, buttonContent, link }) => {
  return (
    <div className="w-full flex flex-col space items-center justify-evenly bg-[#1E293B] h-[500px] p-5 m-2">
      <h1 className="text-2xl">{title}</h1>
      {icon}
      <p>{content}</p>
      <PrimaryButton>
        <Link to={link}>{buttonContent}</Link>
      </PrimaryButton>
    </div>
  );
};

export default Menu;
