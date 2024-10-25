"use client";
import React, { useState } from "react";
import "../globals.css";

const listtext = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

type SectionTextProps = {
  setSuccess: (value: boolean) => void;
};

const SectionText: React.FC<SectionTextProps> = ({ setSuccess }) => {
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!Email) {
      setMessage("Email cannot be empty");
      return;
    }
    if (!Email.includes("@")) {
      setMessage("Please enter a valid email address");
      return;
    }
    if (Email != "a@a.com") {
      setMessage("An error occurred, please try again later");
      return;
    }

    setSuccess(true);
    setMessage("Thank you for subscribing!");
  };

  return (
    <div className="bg-white p-8 rounded-lg max-w-lg mx-auto font-roboto">
      <h1 className="text-4xl md:text-4xl font-bold text-[#242740] mb-4 text-center">
        Stay updated!
      </h1>

      <p className="text-[#3A3A3A] mb-6 text-center font-light">
        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <ul className="text-[#1E2631] mb-6 space-y-2">
        {listtext.map((text, index) => (
          <li key={index} className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="hsl(4, 100%, 67%)" />
                <path
                  stroke="#FFF"
                  strokeWidth="2"
                  d="M6 11.381L8.735 14L15 8"
                />
              </g>
            </svg>
            <span>{text}</span>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="w-full">
          <label htmlFor="email" className="text-left">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className={`px-4 py-2 border border-[#D6D6D6] rounded-lg focus:outline-none mb-4 w-full text-[#3A3A3A] ${
              Email ? "border-[#FF6155]" : ""
            }`}
            onChange={handleEmailChange}
          />
        </div>
        <button
          type="submit"
          className={`py-3 px-4 rounded-lg transition-colors mt-4 text-white text-sm ${
            Email
              ? "bg-gradient-to-r from-[#FF5474] via-[#FA5D62] via-[#FC6257] to-[#FF673E] hover:bg-gradient-to-r from-[#FF5474] via-[#FA5D62] via-[#FC6257] to-[#FF673E]"
              : "bg-[#303245] cursor-not-allowed"
          }`}
          disabled={!Email}
        >
          Subscribe to monthly newsletter
        </button>
      </form>

      {Message && (
        <div
          className={`mt-4 p-3 rounded-lg text-center text-sm ${
            Message.includes("error")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {Message}
        </div>
      )}
    </div>
  );
};

export default SectionText;
