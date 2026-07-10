"use client";

import { ScrollReveal } from "./UI";
import { Cpu, BarChart3, Wrench, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Programming & HDL",
    icon: Code2,
    skills: ["Python", "Verilog HDL", "C", "Embedded C", "Java", "MATLAB", "HTML"],
    color: "from-blue-500/10 to-indigo-500/10",
  },
  {
    title: "Data Science & ML",
    icon: BarChart3,
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Exploratory Data Analysis (EDA)",
      "Machine Learning Models",
      "Data Cleaning & Manipulation",
      "Data Visualization",
      "Data Extraction & Prediction",
    ],
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Hardware & EDA Tools",
    icon: Cpu,
    skills: ["Xilinx Vivado", "Xilinx ISE", "ProteusVSM", "Keil", "CANoe", "Circuit Design & Simulation"],
    color: "from-orange-500/10 to-red-500/10",
  },
  {
    title: "Development & Systems",
    icon: Wrench,
    skills: ["VSCode", "GitHub", "Vercel", "Anaconda"],
    color: "from-green-500/10 to-teal-500/10",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-cream dark:bg-charcoal transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-baseline gap-2 mb-16">
            <span className="text-sm font-semibold text-lavender tracking-widest uppercase">
              02 /
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-cream">
              Technical Skills
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <ScrollReveal
                key={cat.title}
                delay={idx * 0.1}
                className="group relative flex flex-col p-8 rounded-2xl border border-cream-border dark:border-charcoal-border bg-cream-dark/20 dark:bg-charcoal-light/20 hover:border-lavender dark:hover:border-lavender transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient Blend */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                />

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-lavender/10 text-lavender group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-charcoal dark:text-cream">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide border border-cream-border dark:border-charcoal-border/80 bg-cream dark:bg-charcoal text-[#4b5563] dark:text-[#a1a1aa] hover:border-lavender/50 dark:hover:border-lavender/50 hover:text-lavender dark:hover:text-lavender hover:bg-lavender/5 dark:hover:bg-lavender/5 cursor-default transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
