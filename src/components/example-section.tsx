"use client";
import React from "react";
import { Button } from "./ui/button";


function ExampleSection() {
  return (
    <section className="py-10 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-12 items-center">
          {/* SVG Motion Section */}
          <div
         
          >
          <img  src="https://www.qodrr.com/static/media/About%20Illustration.2d01e3bc.png" alt="" />
          </div>
          
          {/* Text and Button Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4 md:mb-6">
            We Are Building Your Career
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-6 md:mb-8">
            Welcome to Orbbitt, your ultimate destination for discovering the best colleges and universities that match your aspirations. Whether you are passionate about engineering, medicine, arts, or any other field, our platform makes it easy to explore and choose the perfect institution to pursue your dream course.            </p>
          <a href="/search"> <Button className="bg-sky-500 hover:bg-sky-400 text-white font-semibold h-10 md:h-12 px-4 md:px-6 rounded-lg transition-colors">
            Get Started
            </Button></a> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExampleSection;
