"use client";
import React from "react";
import { Button } from "./ui/button";

const ExampleSection = () => {
  return (
    <section className="py-10 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src="https://www.qodrr.com/static/media/About%20Illustration.2d01e3bc.png"
              alt="Illustration"
              className="w-full"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug mb-4">
              We Are Building Your Career
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-6">
              Welcome to Orbbitt, your ultimate destination for discovering the best
              colleges and universities that match your aspirations. Whether you are
              passionate about engineering, medicine, arts, or any other field, our
              platform makes it easy to explore and choose the perfect institution to
              pursue your dream course.
            </p>
            <div className="mt-4">
              <a href="/search">
                <Button
                  className="bg-sky-500 hover:bg-sky-400 text-white font-semibold h-10 md:h-12 px-4 md:px-6 rounded-lg transition duration-200"
                >
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;
