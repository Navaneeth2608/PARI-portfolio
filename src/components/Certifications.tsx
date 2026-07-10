"use client";

import { ScrollReveal } from "./UI";
import { Award, ShieldCheck, Cpu, Database, AwardIcon } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "IoT and Robotics Workshop Certificate",
      issuer: "Sona College of Technology, Salem",
      date: "March 2026",
      icon: Cpu,
      description: "Hands-on engineering workshop addressing microcontroller interfacing, autonomous robotics mechanics, sensor nodes integration, and Internet of Things deployment protocols.",
    },
    {
      title: "Introduction to Data Science",
      issuer: "Infosys Springboard",
      date: "July 2026",
      icon: Database,
      description: "Comprehensive foundational coursework covering basic Python scripting, scientific libraries (NumPy, Pandas), data cleansing operations, data visualizations, and introductory statistical analysis.",
    }
  ];

  const achievements = [
    {
      title: "Academic Performance Milestone",
      metric: "7.5 CGPA",
      detail: "Maintained a high level of academic performance in the B.E. Electronics & Communication Engineering track at University College of Engineering Trichy.",
    },
    {
      title: "NIT Tiruchirappalli Internship Completion",
      metric: "Research & Design",
      detail: "Selected for and successfully completed a research-intensive winter internship at NIT Trichy, simulating VLSI circuits and implementing hardware filter logic.",
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-cream dark:bg-charcoal transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Certifications Left Column */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="flex items-baseline gap-2 mb-12">
                <span className="text-sm font-semibold text-lavender tracking-widest uppercase">
                  06 /
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal dark:text-cream">
                  Certifications
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {certifications.map((cert, idx) => {
                const Icon = cert.icon;
                return (
                  <ScrollReveal
                    key={idx}
                    delay={idx * 0.1}
                    className="flex gap-5 p-6 rounded-2xl border border-cream-border dark:border-charcoal-border bg-cream-dark/20 dark:bg-charcoal-light/20 transition-all duration-300 hover:border-lavender dark:hover:border-lavender"
                  >
                    <div className="p-3 rounded-xl bg-lavender/10 text-lavender self-start">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                        <h3 className="text-lg font-serif font-bold text-charcoal dark:text-cream leading-snug">
                          {cert.title}
                        </h3>
                        <span className="text-[10px] text-lavender font-bold uppercase tracking-wider">
                          {cert.date}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#6b7280] dark:text-[#a1a1aa] mb-3 uppercase tracking-wider">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-[#4b5563] dark:text-[#a1a1aa] leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Achievements Right Column */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="flex items-baseline gap-2 mb-12">
                <span className="text-sm font-semibold text-lavender tracking-widest uppercase">
                  07 /
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal dark:text-cream">
                  Key Achievements
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {achievements.map((ach, idx) => (
                <ScrollReveal
                  key={idx}
                  delay={idx * 0.1}
                  className="p-6 rounded-2xl border border-cream-border dark:border-charcoal-border bg-cream-dark/20 dark:bg-charcoal-light/20 transition-all duration-300 hover:border-lavender dark:hover:border-lavender"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-lavender/10 text-lavender">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-charcoal dark:text-cream bg-[#f1f3f5] dark:bg-charcoal-light border border-cream-border dark:border-charcoal-border/50 px-2 py-0.5 rounded-md">
                      {ach.metric}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-charcoal dark:text-cream mb-2 leading-snug">
                    {ach.title}
                  </h3>
                  <p className="text-sm text-[#4b5563] dark:text-[#a1a1aa] leading-relaxed">
                    {ach.detail}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
