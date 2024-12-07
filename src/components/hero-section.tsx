import React from "react";

export function HeroSection() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center px-4">
      {/* Heading Section */}
      <h2 className="text-4xl w-full max-w-5xl mx-auto z-20 md:text-4xl lg:text-7xl font-bold text-white font-sans tracking-tight mb-28">
        Connecting{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
          Communities
        </span>
        , <br /> Building Careers.
      </h2>

      {/* Button Section */}
      <a href="/search">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-48">
          <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-16 py-5 text-sm font-medium text-white backdrop-blur-3xl">
            Get Started
          </span>
        </button>
      </a>
    </div>
  );
}
