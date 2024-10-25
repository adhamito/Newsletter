"use client";
import React, { useState } from "react";
import SectionText from "./components/SectionText";
import SectionImg from "./components/SectionImg";
import SuccessText from "./components/SuccessText";

// SuccessText Component

export default function Home() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="shadow-md items-center ml-56">
      <div className="p-16 text-black md:w-[850px] w-full">
        <div className="bg-transparent flex md:flex-row md:justify-between flex-col justify-center items-center rounded-2xl shadow-md">
          {success ? (
            <div className="order-1 md:order-1 md:w-[450px] mx-auto items-start bg-white ">
              <SuccessText />
            </div>
          ) : (
            <>
              <div className="bg-white flex md:flex-row">
                <div className="order-1 md:order-1">
                  <SectionText setSuccess={setSuccess} />
                </div>
                <div className="order-2 md:order-2">
                  <SectionImg />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
