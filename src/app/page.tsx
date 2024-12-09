"use client";

import SiteHeader from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";

import SiteFooter from "@/components/site-footer";


export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-sans">
      {/* Header */}
      <SiteHeader />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />

      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
