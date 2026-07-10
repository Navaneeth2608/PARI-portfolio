"use client";

import { ScrollReveal } from "./UI";
import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "B.E. Electronics & Communication",
      institution: "University College of Engineering Trichy",
      duration: "2023 – 2027 (Pursuing)",
      metricLabel: "CGPA",
      metricValue: "7.5",
      description: "Acquiring core engineering knowledge in VLSI design, embedded systems, microprocessor architectures, digital signal processing, control systems, and communication theories. Actively translating theory into practice through design and simulation projects.",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "RC Hr Sec School, Trichy",
      duration: "Completed 2023",
      metricLabel: "Percentage",
      metricValue: "71%",
      description: "Focused on core Mathematics, Physics, Chemistry, and Computer Science studies.",
    },
    {
      degree: "SSLC (10th)",
      institution: "RC Hr Sec School, Trichy",
      duration: "Completed 2021",
      metricLabel: "Board",
      metricValue: "State Board",
      description: "Completed foundation secondary school education with a focus on science and math streams.",
    }
  ];

  return (
    <section id="education" className="py-24 bg-cream-dark/30 dark:bg-charcoal-light/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-baseline gap-2 mb-16">
            <span className="text-sm font-semibold text-lavender tracking-widest uppercase">
              05 /
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-cream">
              Education
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 0.1}
              className="flex flex-col p-6 rounded-2xl border border-cream-border dark:border-charcoal-border bg-cream dark:bg-charcoal transition-colors duration-300 shadow-sm relative overflow-hidden"
            >
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-lavender/30 dark:bg-lavender/10" />

              <div className="flex items-center gap-3.5 mb-6 pt-2">
                <div className="p-2.5 rounded-xl bg-lavender/10 text-lavender">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#6b7280] dark:text-[#a1a1aa] font-medium font-sans">
                  <Calendar className="w-3.5 h-3.5 text-lavender" />
                  {edu.duration}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-serif font-bold text-charcoal dark:text-cream mb-2 leading-snug">
                {edu.degree}
              </h3>
              
              <p className="text-xs uppercase tracking-wider font-semibold text-lavender mb-5">
                {edu.institution}
              </p>

              <p className="text-sm text-[#4b5563] dark:text-[#a1a1aa] leading-relaxed mb-6 flex-grow">
                {edu.description}
              </p>

              <div className="mt-auto pt-4 border-t border-cream-border dark:border-charcoal-border/30 flex items-center justify-between">
                <span className="text-xs text-[#6b7280] dark:text-[#a1a1aa] font-medium flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-lavender" />
                  {edu.metricLabel}
                </span>
                <span className="text-sm font-bold text-charcoal dark:text-cream bg-[#f1f3f5] dark:bg-charcoal-light px-2.5 py-1 rounded-lg border border-cream-border dark:border-charcoal-border/50 transition-colors duration-300">
                  {edu.metricValue}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
