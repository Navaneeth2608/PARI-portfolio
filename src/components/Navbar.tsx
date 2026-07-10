"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/app/providers";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for glass effect and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      // Background effect
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "glass-nav py-3 shadow-md" : "bg-transparent py-5"
        }`}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-charcoal-border/30 dark:bg-charcoal-border/10">
          <div
            className="h-full bg-lavender transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo / Initials */}
          <a
            href="#"
            className="text-2xl font-serif font-bold text-charcoal dark:text-cream hover:text-lavender dark:hover:text-lavender transition-colors duration-250 tracking-wider"
          >
            P.K.
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide uppercase text-[#4b5563] dark:text-[#a1a1aa] hover:text-lavender dark:hover:text-lavender transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls: Theme & Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-cream-border dark:border-charcoal-border bg-cream-dark/50 dark:bg-charcoal-light/50 text-[#4b5563] dark:text-[#a1a1aa] hover:text-lavender dark:hover:text-lavender cursor-pointer transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full border border-cream-border dark:border-charcoal-border bg-cream-dark/50 dark:bg-charcoal-light/50 text-[#4b5563] dark:text-[#a1a1aa] hover:text-lavender dark:hover:text-lavender cursor-pointer transition-all duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 top-[70px] z-30 md:hidden bg-cream/95 dark:bg-charcoal/95 backdrop-blur-md"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6 pb-20">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif font-medium tracking-widest uppercase text-[#1a1a1a] dark:text-[#f3f4f6] hover:text-lavender dark:hover:text-lavender transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
