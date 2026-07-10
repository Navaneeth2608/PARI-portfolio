"use client";

import { useState } from "react";
import { ScrollReveal } from "./UI";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all fields.");
      return;
    }

    setStatus("submitting");

    try {
      // Use Formspree for form submission
      // Replace with personal Formspree ID (e.g. https://formspree.io/f/your_form_id)
      const response = await fetch("https://formspree.io/f/xoqyddzo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email directly.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-cream-dark/30 dark:bg-charcoal-light/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-baseline gap-2 mb-16">
            <span className="text-sm font-semibold text-lavender tracking-widest uppercase">
              08 /
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal dark:text-cream">
              Get In Touch
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Call-out and Info */}
          <div className="lg:col-span-6 space-y-10">
            <ScrollReveal delay={0.1}>
              <h3 className="text-2xl sm:text-3xl font-serif text-charcoal dark:text-cream leading-normal mb-4">
                Let's construct something impact-oriented together.
              </h3>
              <p className="text-[#4b5563] dark:text-[#a1a1aa] leading-relaxed">
                Whether you are a recruiter looking for a dedicated VLSI & Embedded Systems intern, a software team seeking analytical support, or simply want to say hello, feel free to drop a message.
              </p>
            </ScrollReveal>

            {/* Huge editorial email link (Design reference highlight) */}
            <ScrollReveal delay={0.2} className="pt-4">
              <span className="text-xs uppercase tracking-widest text-[#6b7280] dark:text-[#a1a1aa] font-semibold">
                Direct Email
              </span>
              <div className="mt-2 group">
                <a
                  href="mailto:pari707queen@gmail.com"
                  className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-charcoal dark:text-cream group-hover:text-lavender transition-colors duration-300 underline decoration-lavender/30 decoration-2 underline-offset-8"
                >
                  pari707queen@gmail.com
                </a>
              </div>
            </ScrollReveal>

            {/* Direct details */}
            <ScrollReveal delay={0.3} className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-sm text-[#4b5563] dark:text-[#a1a1aa]">
                <div className="p-2.5 rounded-lg bg-cream dark:bg-charcoal border border-cream-border dark:border-charcoal-border text-lavender">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 9080382211</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#4b5563] dark:text-[#a1a1aa]">
                <div className="p-2.5 rounded-lg bg-cream dark:bg-charcoal border border-cream-border dark:border-charcoal-border text-lavender">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Trichy, Tamil Nadu, India</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <ScrollReveal
              delay={0.2}
              className="p-8 rounded-2xl border border-cream-border dark:border-charcoal-border bg-cream dark:bg-charcoal transition-all duration-300 shadow-sm"
            >
              <h4 className="text-lg font-serif font-bold text-charcoal dark:text-cream mb-6">
                Send a Message
              </h4>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-charcoal dark:text-cream mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cream-border dark:border-charcoal-border bg-[#f8f9fa] dark:bg-charcoal-light text-charcoal dark:text-cream text-sm focus:outline-none focus:border-lavender focus:ring-1 focus:ring-lavender transition-all duration-200"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-charcoal dark:text-cream mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cream-border dark:border-charcoal-border bg-[#f8f9fa] dark:bg-charcoal-light text-charcoal dark:text-cream text-sm focus:outline-none focus:border-lavender focus:ring-1 focus:ring-lavender transition-all duration-200"
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-charcoal dark:text-cream mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cream-border dark:border-charcoal-border bg-[#f8f9fa] dark:bg-charcoal-light text-charcoal dark:text-cream text-sm focus:outline-none focus:border-lavender focus:ring-1 focus:ring-lavender transition-all duration-200 resize-none"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-charcoal dark:bg-cream text-cream dark:text-charcoal hover:bg-lavender dark:hover:bg-lavender dark:hover:text-charcoal hover:text-charcoal font-semibold text-xs tracking-wider uppercase cursor-pointer transition-all duration-300 disabled:opacity-55 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                {/* Status Banners */}
                {status === "success" && (
                  <div className="flex items-center gap-2 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-xs">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Your message was sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-xs">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
