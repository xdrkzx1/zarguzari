"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formType, setFormType] = useState<"b2b" | "general">("b2b");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-4">
          Enquiry
        </p>
        <h1 className="font-display font-light text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-[#F4EEE0] max-w-2xl">
          Discuss a<br />Project
        </h1>
        <p className="font-body text-base text-[#F4EEE0]/60 mt-8 max-w-lg leading-relaxed">
          Use the form below to tell us about your project. We respond to all
          enquiries within 2–3 working days.
        </p>
      </section>

      <div className="w-full h-px bg-[#BFA06A]/15" />

      <section className="py-16 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div>
            {/* Tab */}
            <div className="flex gap-px mb-10 bg-[#BFA06A]/10">
              <button
                onClick={() => setFormType("b2b")}
                className={`flex-1 py-3 font-body text-xs tracking-[0.15em] uppercase transition-all duration-200 ${
                  formType === "b2b"
                    ? "bg-[#BFA06A] text-[#1C1C1A]"
                    : "bg-[#1C1C1A] text-[#F4EEE0]/40 hover:text-[#F4EEE0]"
                }`}
              >
                Project Enquiry
              </button>
              <button
                onClick={() => setFormType("general")}
                className={`flex-1 py-3 font-body text-xs tracking-[0.15em] uppercase transition-all duration-200 ${
                  formType === "general"
                    ? "bg-[#BFA06A] text-[#1C1C1A]"
                    : "bg-[#1C1C1A] text-[#F4EEE0]/40 hover:text-[#F4EEE0]"
                }`}
              >
                General Enquiry
              </button>
            </div>

            {submitted ? (
              <div className="py-16 text-center">
                <CheckCircle2 size={40} className="text-[#BFA06A] mx-auto mb-4" />
                <h2 className="font-display font-light text-2xl text-[#F4EEE0] mb-3">
                  Enquiry received
                </h2>
                <p className="font-body text-sm text-[#F4EEE0]/50 max-w-xs mx-auto leading-relaxed">
                  Thank you for reaching out. We will review your enquiry and respond
                  within 2–3 working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Common fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-2">
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-[#252522] border border-[#BFA06A]/15 text-[#F4EEE0] font-body text-sm px-4 py-3 focus:outline-none focus:border-[#BFA06A]/50 transition-colors placeholder:text-[#F4EEE0]/20"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-2">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-[#252522] border border-[#BFA06A]/15 text-[#F4EEE0] font-body text-sm px-4 py-3 focus:outline-none focus:border-[#BFA06A]/50 transition-colors placeholder:text-[#F4EEE0]/20"
                    />
                  </div>
                </div>

                {formType === "b2b" && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-2">
                          Organisation
                        </label>
                        <input
                          type="text"
                          placeholder="Brand or studio name"
                          className="w-full bg-[#252522] border border-[#BFA06A]/15 text-[#F4EEE0] font-body text-sm px-4 py-3 focus:outline-none focus:border-[#BFA06A]/50 transition-colors placeholder:text-[#F4EEE0]/20"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-2">
                          Role
                        </label>
                        <input
                          type="text"
                          placeholder="Designer, Buyer, etc."
                          className="w-full bg-[#252522] border border-[#BFA06A]/15 text-[#F4EEE0] font-body text-sm px-4 py-3 focus:outline-none focus:border-[#BFA06A]/50 transition-colors placeholder:text-[#F4EEE0]/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-2">
                          Collection Type
                        </label>
                        <select className="w-full bg-[#252522] border border-[#BFA06A]/15 text-[#F4EEE0]/70 font-body text-sm px-4 py-3 focus:outline-none focus:border-[#BFA06A]/50 transition-colors appearance-none cursor-pointer">
                          <option value="">Select type</option>
                          <option>Bridal / Wedding</option>
                          <option>Couture</option>
                          <option>Prêt-à-porter</option>
                          <option>Accessories</option>
                          <option>Export yardage</option>
                          <option>Film / Costume</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-2">
                          Region
                        </label>
                        <select className="w-full bg-[#252522] border border-[#BFA06A]/15 text-[#F4EEE0]/70 font-body text-sm px-4 py-3 focus:outline-none focus:border-[#BFA06A]/50 transition-colors appearance-none cursor-pointer">
                          <option value="">Select region</option>
                          <option>India</option>
                          <option>Europe</option>
                          <option>UK</option>
                          <option>USA / Canada</option>
                          <option>Middle East</option>
                          <option>East Asia</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-2">
                          Timeline
                        </label>
                        <select className="w-full bg-[#252522] border border-[#BFA06A]/15 text-[#F4EEE0]/70 font-body text-sm px-4 py-3 focus:outline-none focus:border-[#BFA06A]/50 transition-colors appearance-none cursor-pointer">
                          <option value="">Select timeline</option>
                          <option>Under 6 weeks</option>
                          <option>6–12 weeks</option>
                          <option>3–6 months</option>
                          <option>6+ months</option>
                          <option>Not yet defined</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-2">
                          Budget Range
                        </label>
                        <select className="w-full bg-[#252522] border border-[#BFA06A]/15 text-[#F4EEE0]/70 font-body text-sm px-4 py-3 focus:outline-none focus:border-[#BFA06A]/50 transition-colors appearance-none cursor-pointer">
                          <option value="">Select range</option>
                          <option>Under $2,000</option>
                          <option>$2,000 – $10,000</option>
                          <option>$10,000 – $50,000</option>
                          <option>$50,000+</option>
                          <option>To be discussed</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-2">
                    {formType === "b2b" ? "Project Description *" : "Message *"}
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder={
                      formType === "b2b"
                        ? "Tell us about your project — technique, scale, creative direction, reference images you can share, etc."
                        : "Your message"
                    }
                    className="w-full bg-[#252522] border border-[#BFA06A]/15 text-[#F4EEE0] font-body text-sm px-4 py-3 focus:outline-none focus:border-[#BFA06A]/50 transition-colors placeholder:text-[#F4EEE0]/20 resize-none"
                  />
                </div>

                <p className="font-body text-xs text-[#F4EEE0]/25 leading-relaxed">
                  We treat all project briefs and business information with strict
                  confidentiality. We do not share client information with third parties.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase bg-[#BFA06A] text-[#1C1C1A] px-8 py-4 hover:bg-[#D4B882] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Send Enquiry"} <Send size={13} />
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="space-y-12 lg:pt-20">
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-4">
                Studio
              </p>
              <p className="font-display font-light text-xl text-[#F4EEE0] mb-2">
                Zarguzari Digital Atelier
              </p>
              <p className="font-body text-sm text-[#F4EEE0]/50 leading-relaxed">
                Pune, India
                <br />
                Est. 1985
              </p>
            </div>

            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-4">
                Response Time
              </p>
              <p className="font-body text-sm text-[#F4EEE0]/60 leading-relaxed">
                We respond to all enquiries within 2–3 working days. For urgent
                requests, please note your timeline in the message.
              </p>
            </div>

            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-4">
                Follow
              </p>
              <div className="flex gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-[#F4EEE0]/50 hover:text-[#BFA06A] transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-[#F4EEE0]/50 hover:text-[#BFA06A] transition-colors duration-300"
                >
                  Pinterest
                </a>
              </div>
            </div>

            <div className="bg-[#252522] p-8">
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-4">
                Confidentiality
              </p>
              <p className="font-body text-sm text-[#F4EEE0]/50 leading-relaxed">
                We treat all project briefs, client information, and business details
                with complete confidentiality. NDA available on request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
