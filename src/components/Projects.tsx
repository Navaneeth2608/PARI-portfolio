"use client";

import { ScrollReveal } from "./UI";
import { Github, ExternalLink, Cpu, Layout, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "FIR Low Pass Filter Implementation",
      subtitle: "VLSI Design & Digital Signal Processing",
      description: "Designed, simulated, and verified a Finite Impulse Response (FIR) low-pass filter using the Distributed Arithmetic (DA) technique. DA optimizes digital logic by replacing conventional multipliers with look-up tables (LUTs) and shift-accumulators, greatly enhancing computational throughput and silicon efficiency.",
      tools: ["Verilog HDL", "Xilinx Vivado", "Digital VLSI", "Logic Simulation", "Timing Constraints"],
      features: [
        "LUT-based arithmetic structure replacing hardware multipliers.",
        "Comprehensive logic simulation and waveform checks.",
        "Timing constraint verification and path-delay optimizations.",
        "Resource utilization assessment on FPGA models."
      ],
      github: "https://github.com/pari707/fir-filter-da",
      live: null,
      type: "hardware", // will render schematic mockup
    },
    {
      title: "Data Preprocessing & Predictive ML System",
      subtitle: "Data Science & Analytical Models",
      description: "Developed end-to-end analytical pipelines using Python to clean, manipulate, and explore structured datasets, implementing machine learning classifiers to predict target variables based on engineering telemetry.",
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "EDA"],
      features: [
        "Robust data cleaning, outlier treatment, and feature scaling.",
        "Exploratory Data Analysis (EDA) with customized correlation plots.",
        "Implementation and benchmarking of classification algorithms.",
        "Performance evaluation using accuracy, recall, and ROC-AUC metrics."
      ],
      github: "https://github.com/pari707/data-science-eda",
      live: null,
      type: "analytics", // will render plot mockup
    }
  ];

  return (
    <section id="projects" className="py-24 bg-cream dark:bg-charcoal transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-baseline gap-2 mb-16">
            <span className="text-sm font-semibold text-lavender tracking-widest uppercase">
              04 /
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-cream">
              Key Projects
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <ScrollReveal
              key={proj.title}
              delay={idx * 0.15}
              className="flex flex-col rounded-2xl border border-cream-border dark:border-charcoal-border bg-cream-dark/20 dark:bg-charcoal-light/20 overflow-hidden group hover:border-lavender dark:hover:border-lavender transition-all duration-300 shadow-sm"
            >
              {/* Project Card Visual/Visual Placeholder */}
              <div className="h-56 bg-cream-dark/50 dark:bg-charcoal-light relative flex items-center justify-center p-6 border-b border-cream-border dark:border-charcoal-border overflow-hidden select-none">
                {/* Accent Background Blobs */}
                <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 to-transparent group-hover:opacity-100 transition-opacity duration-300" />
                
                {proj.type === "hardware" ? (
                  /* Schematic Simulation Waveform Block Representation in SVG */
                  <svg className="w-full h-full text-lavender/40 dark:text-lavender/25" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="30" width="80" height="40" rx="4" className="stroke-charcoal dark:stroke-cream stroke-1" fill="none" />
                    <text x="50" y="54" textAnchor="middle" className="fill-charcoal dark:fill-cream text-[9px] font-sans">Input x[n]</text>
                    
                    <path d="M90 50 H130" className="stroke-charcoal dark:stroke-cream stroke-1 stroke-dasharray-[2,2]" />
                    <polygon points="126,47 132,50 126,53" className="fill-charcoal dark:fill-cream" />
                    
                    <rect x="130" y="15" width="140" height="70" rx="6" className="stroke-lavender stroke-2" fill="none" />
                    <text x="200" y="45" textAnchor="middle" className="fill-lavender text-[10px] font-serif font-bold">Distributed Arithmetic</text>
                    <text x="200" y="60" textAnchor="middle" className="fill-charcoal dark:fill-cream/70 text-[8px] font-sans">LUT & Shift-Acc</text>
                    
                    <path d="M270 50 H310" className="stroke-charcoal dark:stroke-cream stroke-1" />
                    <polygon points="306,47 312,50 306,53" className="fill-charcoal dark:fill-cream" />
                    
                    <rect x="310" y="30" width="80" height="40" rx="4" className="stroke-charcoal dark:stroke-cream stroke-1" fill="none" />
                    <text x="350" y="54" textAnchor="middle" className="fill-charcoal dark:fill-cream text-[9px] font-sans">Output y[n]</text>

                    {/* Clock waveform below */}
                    <path d="M20 120 H60 V100 H100 V120 H140 V100 H180 V120 H220 V100 H260 V120 H300 V100 H340 V120 H380" className="stroke-lavender/30 dark:stroke-lavender/15 stroke-[1.5]" />
                    <text x="20" y="140" className="fill-charcoal/40 dark:fill-cream/30 text-[8px] font-sans">CLOCK WAVEFORM SIMULATION</text>
                  </svg>
                ) : (
                  /* Analytical Plot Mockup in SVG */
                  <svg className="w-full h-full text-lavender/40 dark:text-lavender/25" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Y-Axis */}
                    <path d="M40 20 V130" className="stroke-charcoal dark:stroke-cream stroke-1" />
                    {/* X-Axis */}
                    <path d="M40 130 H360" className="stroke-charcoal dark:stroke-cream stroke-1" />
                    
                    {/* Plot labels */}
                    <text x="35" y="25" textAnchor="end" className="fill-charcoal/40 dark:fill-cream/30 text-[7px]">1.0</text>
                    <text x="35" y="75" textAnchor="end" className="fill-charcoal/40 dark:fill-cream/30 text-[7px]">0.5</text>
                    <text x="35" y="125" textAnchor="end" className="fill-charcoal/40 dark:fill-cream/30 text-[7px]">0.0</text>
                    <text x="360" y="140" textAnchor="middle" className="fill-charcoal/40 dark:fill-cream/30 text-[7px]">Recall</text>
                    <text x="25" y="75" textAnchor="middle" transform="rotate(-90 25 75)" className="fill-charcoal/40 dark:fill-cream/30 text-[7px]">Precision</text>

                    {/* Precision-Recall curve */}
                    <path d="M40 30 Q120 32 200 45 T320 100 T360 130" className="stroke-lavender stroke-2" fill="none" />
                    <path d="M40 30 Q120 32 200 45 T320 100 T360 130 L360 130 H40 Z" className="fill-lavender/5" />
                    
                    {/* Grid lines */}
                    <path d="M40 75 H360" className="stroke-charcoal-border/50 dark:stroke-charcoal-border/20 stroke-[0.5] stroke-dasharray-[2,4]" />
                    <path d="M200 20 V130" className="stroke-charcoal-border/50 dark:stroke-charcoal-border/20 stroke-[0.5] stroke-dasharray-[2,4]" />
                    
                    {/* Legend */}
                    <rect x="260" y="25" width="80" height="25" rx="3" className="stroke-charcoal-border/50 dark:stroke-charcoal-border/20 bg-cream dark:bg-charcoal stroke-[0.5]" />
                    <circle cx="270" cy="37" r="3" className="fill-lavender" />
                    <text x="280" y="40" className="fill-charcoal dark:fill-cream text-[7px] font-semibold">Random Forest</text>
                  </svg>
                )}
                
                {/* Hardware indicator icon */}
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-cream/90 dark:bg-charcoal/90 border border-cream-border dark:border-charcoal-border">
                  {proj.type === "hardware" ? (
                    <Cpu className="w-4 h-4 text-lavender" />
                  ) : (
                    <Layers className="w-4 h-4 text-lavender" />
                  )}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-lavender tracking-wider uppercase mb-1">
                  {proj.subtitle}
                </span>
                
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal dark:text-cream mb-4">
                  {proj.title}
                </h3>
                
                <p className="text-sm text-[#4b5563] dark:text-[#a1a1aa] leading-relaxed mb-6 flex-grow">
                  {proj.description}
                </p>

                {/* Key Features */}
                <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal dark:text-cream mb-3.5">
                  Key Implementations
                </h4>
                <ul className="space-y-2 mb-6 text-sm text-[#4b5563] dark:text-[#a1a1aa] leading-relaxed">
                  {proj.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-lavender mt-2.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tool Badges */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {proj.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded bg-cream dark:bg-charcoal border border-cream-border dark:border-charcoal-border/80 text-[10px] font-semibold text-[#6b7280] dark:text-[#a1a1aa] transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-cream-border dark:border-charcoal-border/30">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#4b5563] dark:text-[#a1a1aa] hover:text-lavender dark:hover:text-lavender cursor-pointer transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Repo
                  </a>
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#4b5563] dark:text-[#a1a1aa] hover:text-lavender dark:hover:text-lavender cursor-pointer transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
