import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import Menu from "./Menu";
import MailIcon from "../icons/MailIcon";
import InternetIcon from "../icons/InternetIcon";

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
          <PrimaryButton>View Services</PrimaryButton>
        </div>
      </div>
      <div className="w-4/5 mx-auto pb-10">
        <div className="flex flex-col justify-center items-center md:flex-row">
          <Menu
            title="Email Security Explorer"
            buttonContent="Secure Your Email"
            icon={<MailIcon />}
            link='/email-security'
            content="Find out the security flaws in your email.
            An secure email is your first line of defense"
          ></Menu>
          <Menu
            title="Network Security Sentry"
            buttonContent="Secure Your Network"
            link='/network-security'
            icon={<InternetIcon />}
            content="In today's connected world, safeguarding your digital assets is paramount. That's where Network Security Sentry steps in."
          ></Menu>
        </div>
      </div>
    </div>
  );
};

export default Landing;
