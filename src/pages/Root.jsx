import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import PrimaryButton from "../components/common/PrimaryButton";
import Landing from "../components/landing/Landing";

const Root = () => {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden bg-[black] grid grid-rows-[5%_95%] grid-cols-1 md:h-screen md:grid md:grid-cols-1 md:grid-rows-[10%_90%] inset-0 bg-[url(/overlay.a588a288.webp)] bg-center">
      <Navbar />

      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
