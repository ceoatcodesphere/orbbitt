"use client";
import React from "react";


const ExampleSection = () => {
  return (
    <div className="flex justify-center items-center  py-12 px-6 sm:px-8">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
      {/* Image Section */}
      <div className="w-full sm:w-1/2">
        <img
          src="https://www.qodrr.com/static/media/About%20Illustration.2d01e3bc.png" 
          alt="About Image" 
        
          className="w-[500px] h-auto object-cover rounded-lg shadow-lg" 
        />
      </div>

      {/* Text Section */}
      <div className="w-full sm:w-1/2 text-center sm:text-left font-sans">
        <h2 className="text-3xl font-bold mb-4 font-sans">
          Welcome to Orbbitt
        </h2>
        <p className="text-lg  font-sans">
          Your ultimate destination for discovering the best colleges and universities that match your aspirations. Whether you are passionate about engineering, medicine, arts, or any other field, our platform makes it easy to explore and choose the perfect institution to pursue your dream course.
        </p>
      </div>
    </div>
  </div>
  );
};

export default ExampleSection;
