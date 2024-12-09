import React from "react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Heading Section */}
      <header className="mb-28">
        <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-7xl tracking-tight w-full max-w-5xl mx-auto">
          Connecting <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                    Communities
          </span>
          , <br /> Building Careers.
        </h2>
      </header>

      {/* Button Section */}
      <div className="mb-20">
        <a href="/search" className="group inline-flex">
          <div className="relative rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <div className="" />
            <div className="relative border border-zinc-100 flex items-center justify-center px-16 py-3 rounded-full bg-slate-950">
              <span className="text-white text-sm font-medium">Get Started</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}