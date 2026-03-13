import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Designers & Brands",
  description:
    "How to work with Zarguzari. Process, timelines, production capacity, and how to start a collaboration.",
};

export default function ForDesignersPage() {
  return (
    <div className="pt-[72px]">
      {/* Header */}
      <section className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-4">
          Collaboration
        </p>
        <h1 className="font-display font-light text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-[#F4EEE0] max-w-3xl">
          For Designers<br />& Brands
        </h1>
        <p className="font-body text-base md:text-lg text-[#F4EEE0]/60 mt-8 max-w-2xl leading-relaxed">
          We work with fashion designers, couture houses, bridal brands, and export
          garment labels. Here is how the process works — from first contact to
          finished piece.
        </p>
      </section>

      <div className="w-full h-px bg-[#BFA06A]/15" />

      {/* Process */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-8">
          Process
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#BFA06A]/10">
          {[
            {
              step: "01",
              title: "Initial Brief",
              body: "Share your moodboard, sketch, or reference image. We do not require tech packs to begin — a moodboard and a conversation is enough for us to assess feasibility and give a rough scope.",
            },
            {
              step: "02",
              title: "Material Sample",
              body: "We produce a small exploratory sample — usually 15×15cm — at our cost for significant projects. This establishes thread weight, stitch density, and colour. Your feedback shapes the technical sample.",
            },
            {
              step: "03",
              title: "Technical Sample",
              body: "Working in context — on your ground fabric, at your scale — we produce the sign-off sample. This is the reference your production will be matched against. Approvals typically take 1–2 rounds.",
            },
            {
              step: "04",
              title: "Production",
              body: "Once approved, production follows the sign-off sample exactly. Each artisan works with the approved reference visible above their frame. We provide progress updates and quality checks throughout.",
            },
          ].map((step) => (
            <div key={step.step} className="bg-[#1C1C1A] p-8">
              <p className="font-display text-4xl text-[#BFA06A]/30 mb-6">{step.step}</p>
              <h3 className="font-display font-light text-xl text-[#F4EEE0] mb-4">
                {step.title}
              </h3>
              <p className="font-body text-sm text-[#F4EEE0]/55 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[#BFA06A]/15" />

      {/* Timelines & Capacity */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-8">
              Typical Timelines
            </p>
            <div className="space-y-0">
              {[
                { stage: "Initial consultation", time: "1–3 days" },
                { stage: "Material sample", time: "1–2 weeks" },
                { stage: "Technical sample (with approvals)", time: "3–6 weeks" },
                { stage: "Small production run (<50 pieces)", time: "6–10 weeks" },
                { stage: "Large production run (50–500 pieces)", time: "10–20 weeks" },
                { stage: "Yardage production (per 100m)", time: "4–8 weeks" },
              ].map((row) => (
                <div
                  key={row.stage}
                  className="flex justify-between items-center py-4 border-b border-[#BFA06A]/10"
                >
                  <p className="font-body text-sm text-[#F4EEE0]/60">{row.stage}</p>
                  <p className="font-body text-sm text-[#BFA06A] font-medium ml-4 text-right">
                    {row.time}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-body text-xs text-[#F4EEE0]/30 mt-4 leading-relaxed">
              * Timelines are indicative. Complex pieces with multiple approval rounds
              may take longer. We always confirm specific timelines before commencing
              work.
            </p>
          </div>

          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-8">
              Production Capacity
            </p>
            <div className="space-y-4">
              {[
                {
                  type: "Couture & Bridal",
                  detail:
                    "1–20 pieces per season. Highly complex, labour-intensive work — typically 40–500+ hours per piece. Seasonal capacity is limited; early engagement is recommended.",
                },
                {
                  type: "Prêt & Commercial",
                  detail:
                    "20–200 pieces per run. Medium complexity. We can handle repeat orders and seasonal reorders across collections.",
                },
                {
                  type: "Export Yardage",
                  detail:
                    "Up to 1,000 metres per month for aari and zari yardage. Complex zardozi is calculated by panel. Export documentation and quality standards are handled in-house.",
                },
                {
                  type: "Accessories",
                  detail:
                    "Prototype and production for clutches, belts, shoes, and jewellery components. Volume and timeline depend on complexity.",
                },
              ].map((item) => (
                <div key={item.type} className="bg-[#252522] p-6">
                  <h3 className="font-display font-light text-lg text-[#F4EEE0] mb-2">
                    {item.type}
                  </h3>
                  <p className="font-body text-sm text-[#F4EEE0]/55 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#BFA06A]/15" />

      {/* What we need */}
      <section className="py-24 bg-[#1C3D2F]/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-6">
                What Helps Us Help You
              </p>
              <h2 className="font-display font-light text-3xl md:text-4xl text-[#F4EEE0] mb-8">
                Better briefs produce better work.
              </h2>
              <p className="font-body text-sm text-[#F4EEE0]/60 leading-relaxed">
                We do not require tech packs to start a conversation, but the more you
                can share about your creative intention, the better our initial samples
                will be. A brief that includes reference images, fabric swatches, scale
                indications, and a sense of what the piece should feel like is worth
                ten times a brief that simply says &ldquo;heavy embroidery in gold&rdquo;.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Moodboard or reference images (can be photographs, art, textiles)",
                "Ground fabric sample or specification",
                "Scale and application (garment type, panel location)",
                "Colour direction (even approximate)",
                "Quantity and collection type",
                "Target timeline and any hard deadlines",
                "Budget band (to guide material selection)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={14}
                    className="text-[#BFA06A] flex-shrink-0 mt-0.5"
                  />
                  <p className="font-body text-sm text-[#F4EEE0]/60">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <h2 className="font-display font-light text-3xl md:text-5xl text-[#F4EEE0] mb-6">
          Ready to begin?
        </h2>
        <p className="font-body text-sm text-[#F4EEE0]/50 mb-10 max-w-md mx-auto leading-relaxed">
          Use the project enquiry form to tell us about your collection. We respond
          within 2–3 working days.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase bg-[#BFA06A] text-[#1C1C1A] px-10 py-4 hover:bg-[#D4B882] transition-colors duration-300"
        >
          Discuss a Project <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
