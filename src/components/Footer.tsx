"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-cream dark:bg-charcoal border-t border-cream-border dark:border-charcoal-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-xs tracking-wider text-[#6b7280] dark:text-[#a1a1aa] font-medium uppercase text-center md:text-left">
          &copy; {currentYear} Paribalan K. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/pari707"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b7280] dark:text-[#a1a1aa] hover:text-lavender dark:hover:text-lavender transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/paribalan-k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b7280] dark:text-[#a1a1aa] hover:text-lavender dark:hover:text-lavender transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:pari707queen@gmail.com"
            className="text-[#6b7280] dark:text-[#a1a1aa] hover:text-lavender dark:hover:text-lavender transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
