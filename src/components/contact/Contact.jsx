import React from "react";
import ContactForm from "./ContactForm";
import CallIcon from "../icons/CallIcon";
import MailIcon2 from "../icons/MailIcon2";
import PinIcon from "../icons/PinIcon";

const Contact = () => {
  return (
    <>
      <di className="flex justify-center items-center h-screen">
        <div className="w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1">
            <div className="flex flex-col justify-center md:col-span-1 sm:col-span-2">
              <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
              <div className="mb-3">
                <p>
                  Get started with Network Security Sentry today and protect
                  what matters most. Your network, your data, your peace of
                  mind.
                </p>
              </div>
              <div className="flex">
                <MailIcon2></MailIcon2>
                <p className="ml-2">email@mail.com</p>
              </div>
              <div className="flex spacing-2">
                <CallIcon></CallIcon>
                <p className="ml-2"> (+60) 18-123-1234</p>
              </div>
              <div className="flex">
                <PinIcon></PinIcon>
                <p className="ml-2">
                  Tower A, G-02, Hyve Suites, Jalan Impact, Cyber 6, 63000,
                  Cyberjaya, Selangor
                </p>
              </div>
            </div>
            <div className="md:col-span-1 sm:col-span-2">
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </di>
    </>
  );
};

export default Contact;
