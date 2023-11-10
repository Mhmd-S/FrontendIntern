import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Securing Your Cyberspace</h1>
          <h4 className="text-lg my-10">
            We are here to provide you with state-of-the-art technologies to
            combat threat actors and protect yourself from future exposure.
          </h4>

          <Link to='/menu'>
            <PrimaryButton>
              View Services
            </PrimaryButton>
          </Link>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
