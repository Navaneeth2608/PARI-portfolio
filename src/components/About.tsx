"use client";

import { ScrollReveal } from "./UI";
import { CheckCircle2, Languages, Cpu, BrainCircuit } from "lucide-react";

export default function About() {
  const coreDomains = [
    "VLSI Design & Digital Circuits",
    "Embedded Systems & IoT",
    "Analog/Digital Circuit Simulation",
    "Data Preprocessing & EDA",
    "Machine Learning & Visualization"
  ];

  const softSkills = [
    "Communication skills",
    "Problem-solving ability",
    "Teamwork",
    "Time management",
    "Adaptability",
    "Critical thinking",
    "Leadership",
    "Presentation skills",
    "Professional attitude",
    "Continuous learning mindset"
  ];

  return (
    <section id="about" className="py-24 bg-cream-dark/30 dark:bg-charcoal-light/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-baseline gap-2 mb-16">
            <span className="text-sm font-semibold text-lavender tracking-widest uppercase">
              01 /
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-cream">
              About Myself
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Professional Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0.1}>
              <p className="text-lg font-serif text-charcoal dark:text-cream leading-relaxed">
                I am an Electronics and Communication Engineering graduate with a strong foundation in VLSI Design, Embedded Systems, IoT, Analog and Digital Circuit Design, Digital Signal Processing, and hardware-based system development.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-[#4b5563] dark:text-[#a1a1aa] leading-relaxed">
                My background includes hands-on experience through internships and academic projects involving digital circuit design and simulation, Digital VLSI design, FIR low-pass filter implementation using Distributed Arithmetic, and image processing-based embedded applications.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-[#4b5563] dark:text-[#a1a1aa] leading-relaxed">
                I am also passionate about Data Science using Python, with skills in data pre-processing, analysis, data visualization, and machine learning. I am adept at combining engineering problem-solving with data-driven approaches to develop practical solutions and derive meaningful insights from complex datasets.
              </p>
            </ScrollReveal>

            {/* Languages card */}
            <ScrollReveal delay={0.4} className="pt-6">
              <div className="flex items-center gap-3 p-4 rounded-xl border border-cream-border dark:border-charcoal-border bg-cream dark:bg-charcoal transition-colors duration-300">
                <Languages className="w-5 h-5 text-lavender" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal dark:text-cream">
                    Languages
                  </h4>
                  <p className="text-sm text-[#4b5563] dark:text-[#a1a1aa] mt-0.5">
                    English (Proficient) &bull; Tamil (Native)
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Quick Pillars Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Core Domain Skills Card */}
            <ScrollReveal delay={0.2} className="p-6 rounded-2xl border border-cream-border dark:border-charcoal-border bg-cream dark:bg-charcoal-light/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-lavender/10 text-lavender">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal dark:text-cream">
                  Core Focus Areas
                </h3>
              </div>
              <ul className="space-y-3.5">
                {coreDomains.map((domain, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#4b5563] dark:text-[#a1a1aa]">
                    <CheckCircle2 className="w-4 h-4 text-lavender mt-0.5 flex-shrink-0" />
                    <span>{domain}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Soft Skills Card */}
            <ScrollReveal delay={0.3} className="p-6 rounded-2xl border border-cream-border dark:border-charcoal-border bg-cream dark:bg-charcoal-light/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-lavender/10 text-lavender">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal dark:text-cream">
                  Professional Mindset
                </h3>
              </div>
              <ul className="space-y-3.5">
                {softSkills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#4b5563] dark:text-[#a1a1aa]">
                    <CheckCircle2 className="w-4 h-4 text-lavender mt-0.5 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
