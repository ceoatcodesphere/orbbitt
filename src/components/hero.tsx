import React from "react";

export function GridBackgroundDemo() {
 
  // Explicitly type the event parameter
  
  return (
    <div className="min-h-full mt-20 flex flex-col justify-center items-center">
      <div className="flex justify-center mb-11">
        <a href="/search">
          <button className="border border-white hover:bg-white hover:text-black text-white px-6 rounded-full flex items-center space-x-3 hover:shadow-lg transition-all">
            {/* Icon */}
            <span className="text-xl">✨</span>

            {/* Button Text */}
            <span className="text-lg font-semibold">Get started</span>

            {/* Right Arrow */}
            <span className="text-lg">➔</span>
          </button>
        </a>
      </div>
      <h1 className="font-bold text-4xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 mb-16">
        Connecting{" "}
        <span className="">
          Communities
        </span>
        <br />
        Building Careers.
      </h1>
      
      <div className="flex justify-between items-center p-2 bg-gray-700 rounded-full max-w-lg w-full mx-auto text-white shadow-md">
      <input
        type="text"
         placeholder="Search by course name..."
        className="flex-grow bg-transparent border-none text-sm sm:text-base placeholder-gray-400 focus:outline-none text-white"
      />
      <a href="/search">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm sm:text-base transition-all">
      Go →
      </button>
      </a>
    </div>
    </div>
  );
}
