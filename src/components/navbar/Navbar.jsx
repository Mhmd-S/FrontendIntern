import React from "react";
import { Link, useLocation } from "react-router-dom";

import useNavbar from "./hooks/useNavbar";
import MenuIcon from "../icons/MenuIcon";
import MenuIconTwo from "../icons/MenuIcon2";
import HomeIcon from "../icons/HomeIcon";
import ToolsIcon from "../icons/ToolsIcon";
import LoginIcon from "../icons/LoginIcon";

const Navbar = () => {
  const { menuOpen, toggleMenu } = useNavbar();
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname);

  return (
    <div className="relative w-full flex justify-between items-center flex-row p-4 z-20">
      <div>PentestTool</div>

      <div className="right-0 md:hidden" onClick={toggleMenu}>
        {menuOpen ? <MenuIconTwo /> : <MenuIcon />}
      </div>

      <ul
        className={`${
          menuOpen ? "absolute" : "hidden"
        } p-4 w-[90%] bg-[#202447e0] ring-2 rounded-lg translate-x-[-50%] top-full left-1/2 flex flex-col [&>*]:hover:pointer [&>*]:p-4 [&>*]:w-full md:flex md:items-center md:flex-row md:bg-transparent md:w-max md:ring-0 md:translate-x-0 md:[&>*]:w-max md:[&>*]:px-5 md:[&>*]:py-0 transition-all duration-300 ease-in-out`}
      >
        <li>
          <Link className="flex" to="/landing">
            <HomeIcon className="mr-2"></HomeIcon>
            <p
              className={`${pathname === "/landing" ? "font-bold" : null} ml-2`}
            >
              Home
            </p>
          </Link>
        </li>
        <li>
          <Link className="flex" to="menu">
            <ToolsIcon />
            <p className={`${pathname === "/menu" ? "font-bold" : null} ml-2`}>
              Tools Menu
            </p>
          </Link>
        </li>
        <li>
          <Link className="flex" to="/login">
            <LoginIcon />
            <p className={`${pathname === "/login" ? "font-bold" : null} ml-2`}>
              Login
            </p>
          </Link>
        </li>
        <li>
          <Link to="contact-us">
            <div className="`w-full p-2 px-4 text-center bg-[#0EA5E9] text-white rounded-lg">
              Contact Us
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
