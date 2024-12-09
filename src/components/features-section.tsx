"use client";

import React from "react";

import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
const features = [
  {
    icon: <FaSearch className="h-8 w-8 text-sky-500" />,
    title: "Comprehensive College Search",
    description:
      "Search with filters like tuition fees, program type, and admission deadlines.",
  },
  {
    icon: <FaUser  className="h-8 w-8 text-sky-500" />,
    title: "User Friendly Interface ",
    description:
      "User friendly interface which every one can easly use and finde your colleges.  ",
  },
  {
    icon: <MdCreateNewFolder className="h-8 w-8 text-sky-500" />,
    title: "Collge Creation ",
    description:
      "The college creation is very simply just only fill up the fields in it.",
  },

];

function FeaturesSection() {
  return (
    <section className="py-5 lg:py-32 pb-20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          Everything you need to build a career
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg shadow-lg p-6 hover:bg-slate-700 transition-colors"
          
           
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
