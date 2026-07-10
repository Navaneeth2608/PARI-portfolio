"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

// ScrollReveal component to trigger entrance animations as sections enter viewport
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier (easeOutExpo)
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// LoadingScreen component with smooth transition out
export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal text-[#f3f4f6]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Editorial Initials */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-serif mb-6 text-lavender tracking-wider"
        >
          PK
        </motion.div>

        {/* Animated Loading Bar */}
        <div className="w-48 h-[1px] bg-charcoal-border relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-lavender"
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            style={{ width: "60%" }}
          />
        </div>

        {/* Subtext */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xs uppercase tracking-widest mt-4 text-[#a1a1aa]"
        >
          Portfolio Experience
        </motion.span>
      </div>
    </motion.div>
  );
}

// Back-to-Top Button
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, backgroundColor: "var(--color-lavender-dark)" }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-lg cursor-pointer bg-lavender text-charcoal focus:outline-none"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
