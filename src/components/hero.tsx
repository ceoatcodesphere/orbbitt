import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="min-h-full mt-20 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      {/* Button Section */}
      <div className="flex justify-center mb-11">
        <a href="/search">
          <button className="border border-white hover:bg-white hover:text-black text-white px-6 rounded-full flex items-center space-x-3 hover:shadow-lg transition-all">
            {/* Button Text */}
            <span className="text-lg font-semibold">Get started</span>
            
            {/* Right Arrow */}
            <span className="text-lg">➔</span>
          </button>
        </a>
      </div>
      
      {/* Heading Section */}
      <h1 className="font-bold text-4xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 mb-16 max-w-screen-lg">
        Connecting{" "}
        <span className="">Communities</span>
        <br />
        Building Careers.
      </h1>
      
      {/* Search Bar Section */}
      <div className="flex justify-between items-center p-2 bg-gray-700 rounded-full  lg:w-[500px] mx-auto text-white shadow-md">
        <input
          type="text"
          placeholder="Search by course name..."
          className="flex-grow w-50px bg-transparent border-none text-sm sm:text-base placeholder-gray-400 focus:outline-none text-white"
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
