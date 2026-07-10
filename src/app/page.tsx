"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LoadingScreen, BackToTop } from "@/components/UI";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="flex flex-col min-h-screen bg-cream dark:bg-charcoal text-[#1a1a1a] dark:text-[#f3f4f6] transition-colors duration-300">
          <Navbar />
          
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </main>
          
          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  );
}
