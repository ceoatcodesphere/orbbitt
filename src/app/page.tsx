"use client";


import TechLeaderSection from "@/components/about";
import { GridBackgroundDemo } from "@/components/hero";
import SiteHeader from "@/components/navabar";


import { motion } from "framer-motion";
import { LampContainer } from "../components/lamp";
import Footer from "@/components/footer";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-sans">
   <SiteHeader/>
   <GridBackgroundDemo/>
  <TechLeaderSection />
  <LampContainer>
    <motion.div    initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}         className="mt-8 bg-gradient-to-br from-slate-100 to-slate-100 py-4 bg-clip-text text-center  font-medium tracking-tight text-transparent "
>
      <motion.h1
     
        className="mt-8 bg-gradient-to-br from-slate-100 to-slate-100 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
       What are you waiting for ? <br />  Let us get started
       
      </motion.h1>
      <a href="/search">  <button className="bg-blue-600 text-white px-6 py-3 text-center mt-7 rounded-full hover:bg-white hover:text-black">
            Get Started
          </button>
          </a> </motion.div>
    </LampContainer>
    <Footer />
    </div>
  );
}
