"use client";

import { ScrollReveal } from "./UI";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "VLSI Design & FIR Filter Implementation Intern",
      company: "National Institute of Technology (NIT)",
      location: "Tiruchirappalli, Tamil Nadu, India",
      duration: "January 2026 – February 2026",
      summary: "Collaborated on digital design, simulation, and analysis of VLSI digital circuits, focusing on arithmetic implementation paradigms.",
      details: [
        "Designed, modeled, and simulated complex digital circuits utilizing Verilog HDL on Xilinx Vivado and Xilinx ISE.",
        "Implemented and evaluated an Finite Impulse Response (FIR) Low Pass Filter utilizing the Distributed Arithmetic (DA) technique, replacing standard multipliers to optimize silicon area and processing throughput.",
        "Performed detailed timing analyses, functional simulation checks, and performance benchmarks to ensure adherence to hardware specifications."
      ],
      technologies: ["Verilog HDL", "Xilinx Vivado", "Xilinx ISE", "Digital VLSI Design", "Distributed Arithmetic", "Circuit Simulation"],
      outcome: "Successfully achieved functional verification and reduced multiplier-based logic resource requirements through Distributed Arithmetic optimization."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-cream-dark/30 dark:bg-charcoal-light/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-baseline gap-2 mb-16">
            <span className="text-sm font-semibold text-lavender tracking-widest uppercase">
              03 /
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-cream">
              Internship Experience
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l border-cream-border dark:border-charcoal-border">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={idx} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 p-1 rounded-full bg-cream dark:bg-charcoal border-2 border-lavender text-lavender transition-all duration-300">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl border border-cream-border dark:border-charcoal-border bg-cream dark:bg-charcoal transition-colors duration-300 shadow-sm">
                {/* Header metadata */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal dark:text-cream">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-lavender font-serif mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5 text-xs text-[#6b7280] dark:text-[#a1a1aa] font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-lavender" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 sm:justify-end">
                      <MapPin className="w-3.5 h-3.5 text-lavender" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm italic text-[#4b5563] dark:text-[#a1a1aa] mb-6 border-l border-cream-border dark:border-charcoal-border pl-3">
                  {exp.summary}
                </p>

                {/* Specifics list */}
                <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal dark:text-cream mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-3.5 mb-6 text-sm text-[#4b5563] dark:text-[#a1a1aa] leading-relaxed">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-lavender mt-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology list */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#f1f3f5] dark:bg-charcoal-light text-xs font-semibold text-[#4b5563] dark:text-[#a1a1aa] border border-cream-border dark:border-charcoal-border/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Outcome card */}
                <div className="flex items-start gap-3 p-4 rounded-xl border border-lavender/25 bg-lavender/5 text-sm text-charcoal dark:text-[#f3f4f6]">
                  <Award className="w-5 h-5 text-lavender flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-xs uppercase tracking-wider text-lavender">
                      Key Achievement
                    </h5>
                    <p className="mt-1 leading-relaxed text-[#4b5563] dark:text-[#a1a1aa]">
                      {exp.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
