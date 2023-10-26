import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white p-4 text-center  mt-20">
      <div className="text-lg font-semibold"> PentestTool</div>
      <p className="text-sm">
        © {new Date().getFullYear()} Ronas Network and Services
      </p>
    </footer>
  );
};

export default Footer;
