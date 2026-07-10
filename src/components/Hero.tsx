"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 md:pt-0 overflow-hidden">
      {/* Editorial Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen w-full">
        {/* Left Side: Editorial Typography (Charcoal background on dark, Cream on light) */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12 lg:py-0 bg-cream dark:bg-charcoal transition-colors duration-300">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            {/* Title / Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-charcoal dark:text-cream leading-tight tracking-tight mb-4">
              Paribalan
              <span className="text-lavender"> K,</span>
            </h1>

            {/* Professional Subheading */}
            <p className="text-lg sm:text-xl font-sans font-light tracking-wide text-[#4b5563] dark:text-[#a1a1aa] mb-8 leading-relaxed">
              Electronics & Communication Engineering student from India, specializing in VLSI Design, Embedded Systems, IoT, and Data Analytics.
            </p>

            {/* Design Line & Callout */}
            <div className="flex items-stretch gap-4 mb-10 pl-1 border-l-2 border-lavender">
              <div className="flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#1a1a1a] dark:text-cream">
                  By Hardwork & Determination
                </span>
                <span className="text-xs text-[#6b7280] dark:text-[#a1a1aa] mt-0.5">
                  Currently seeking core engineering & data science opportunities
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal dark:bg-cream text-cream dark:text-charcoal hover:bg-lavender dark:hover:bg-lavender dark:hover:text-charcoal hover:text-charcoal transition-all duration-300 font-medium text-sm tracking-wide uppercase cursor-pointer"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                download="Paribalan_K_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cream-border dark:border-charcoal-border bg-cream-dark/30 dark:bg-charcoal-light/30 text-charcoal dark:text-cream hover:border-lavender hover:text-lavender dark:hover:border-lavender dark:hover:text-lavender transition-all duration-300 font-medium text-sm tracking-wide uppercase cursor-pointer"
              >
                Download Resume
                <FileText className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/pari707"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4b5563] dark:text-[#a1a1aa] hover:text-lavender dark:hover:text-lavender transition-colors duration-250"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/paribalan-k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4b5563] dark:text-[#a1a1aa] hover:text-lavender dark:hover:text-lavender transition-colors duration-250"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:pari707queen@gmail.com"
                className="text-[#4b5563] dark:text-[#a1a1aa] hover:text-lavender dark:hover:text-lavender transition-colors duration-250"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Processed Headshot on Lavender Background */}
        <div className="lg:col-span-5 relative flex items-center justify-center bg-lavender/10 lg:bg-lavender/10 py-16 lg:py-0 overflow-hidden">
          {/* Large block of purple background in desktop */}
          <div className="absolute inset-y-0 right-0 left-0 lg:left-auto lg:w-[90%] bg-lavender/20 dark:bg-lavender/10 transition-colors duration-300" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 w-[280px] sm:w-[360px] md:w-[420px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-cream dark:border-charcoal bg-lavender/30"
          >
            {/* Display the grayscale transparent headshot */}
            {/* The transparent PNG will allow the lavender backdrop to show through */}
            <img
              src="/profile-transparent-gray.png"
              alt="Paribalan K"
              className="w-full h-full object-cover object-center filter grayscale contrast-110 brightness-105 select-none"
              onError={(e) => {
                // Fallback in case transparent grayscale PNG isn't loaded correctly
                e.currentTarget.src = "/profile-gray.jpg";
              }}
            />
          </motion.div>

          {/* Decorative Background Accents */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-lavender/30 dark:bg-lavender/15 rounded-full filter blur-3xl animate-pulse-slow pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
