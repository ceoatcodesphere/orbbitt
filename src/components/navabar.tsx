"use client";

import React, { useState } from "react";

import Link from "next/link";


const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<header className="mb-7">
  <div className="container mx-auto flex justify-between items-center p-6 lg:p-10">
    {/* Logo */}
    <div className="text-4xl font-bold">
  <h1>
    <a href="#">
      <span
        className="bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"
      >
        Orbbitt
      </span>
    </a>
  </h1>
</div>

    {/* Desktop Navigation */}
    <nav className="hidden lg:hidden md:hidden xl:flex space-x-12">
      <a href="#hero" className="hover:text-grey-800 py-3 text-lg md:text-2xl">Home</a>

      <Link href="/creation-collage" className="hover:text-grey-800 py-3 text-lg md:text-2xl ">Add your college</Link>
      <Link href="/search" className="hover:text-grey-800 py-3 text-lg md:text-2xl ">Search a college</Link>
      <a href="/auth" className="hover:text-grey-800 py-3 text-lg  md:text-2xl">Sign up</a>
      <a
  href="/auth"
  className="bg-white text-black border-2 border-black text-lg md:text-2xl px-6 py-3 rounded-lg hover:bg-gray-800 hover:border-gray-800 transition duration-300"
>
  Log In
</a>

    </nav>

    {/* Mobile Navigation Button */}
    <div className="xl:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Navigation Links */}
  <div
    className={`xl:hidden overflow-hidden transition-all duration-500 ease-in-out ${
      isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
    }`}
  >
    <nav className="text-center">
      <a href="#" className="block px-6 py-3 text-lg hover:bg-gray-100 hover:text-black ">Home</a>
      <Link href="/creation-collage" className="block hover:text-grey-800 py-3 text-lg md:text-xl ">Add your college</Link>
      <Link href="/search" className="block hover:text-grey-800 py-3 text-lg md:text-xl ">Search a college</Link>
      <a href="/auth" className="block px-6 py-3 text-white text-lg hover:text-grey-800 ">Sign up</a>
      <a href="/auth" className="block px-6 py-3 text-lg hover:text-grey-800 ">Log In</a>
    </nav>
  </div>
</header>

  );
};

export default SiteHeader;