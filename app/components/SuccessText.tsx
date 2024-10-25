import React from "react";

const SuccessText = () => {
  return (
    <div className="flex flex-col justify-start items-start text-start p-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        className="mb-4"
      >
        <defs>
          <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FF6A3A" />
            <stop offset="100%" stopColor="#FF527B" />
          </linearGradient>
        </defs>
        <g fill="none">
          <circle cx="32" cy="32" r="32" fill="url(#a)" />
          <path
            stroke="#FFF"
            strokeWidth="4"
            d="m18.286 34.686 8.334 7.98 19.094-18.285"
          />
        </g>
      </svg>

      <h1 className="text-2xl font-bold text-[#242740] mb-2">
        Thanks for subscribing!
      </h1>
      <p className="text-[#3A3A3A] mb-4">
        You will receive monthly updates directly to your inbox.
      </p>

      {/* Optional button for user to return to home or further actions */}
      <button
        type="button" // Changed to type "button"
        className="py-4 px-4 rounded-lg w-full transition-colors bg-[#303245] text-white text-sm hover:bg-gradient-to-r from-[#FF5474] via-[#FA5D62] via-[#FC6257] to-[#FF673E] "
        onClick={() => {
          console.log("Return to home or reset action");
        }}
      >
        Dismiss message
      </button>
    </div>
  );
};

export default SuccessText;
