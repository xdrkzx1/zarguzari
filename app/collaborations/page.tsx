import { collaborations } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Collaborations",
  description:
    "Selected collaborations with India's leading couture houses, global fashion labels, and film productions.",
};

export default function CollaborationsPage() {
  const byCategory = {
    Runway: collaborations.filter((c) => c.category === "Runway"),
    Bridal: collaborations.filter((c) => c.category === "Bridal"),
    Export: collaborations.filter((c) => c.category === "Export"),
    Film: collaborations.filter((c) => c.category === "Film"),
  };

  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-4">
          Partners
        </p>
        <h1 className="font-display font-light text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-[#F4EEE0] max-w-2xl">
          Collaborations
        </h1>
        <p className="font-body text-base text-[#F4EEE0]/60 mt-8 max-w-xl leading-relaxed">
          Selected work with India&apos;s leading designers and international fashion
          houses. Client names are shared with permission; where confidentiality
          applies, we describe the work without attribution.
        </p>
      </section>

      <div className="w-full h-px bg-[#BFA06A]/15" />

      {Object.entries(byCategory).map(([category, items]) =>
        items.length > 0 ? (
          <section
            key={category}
            className="py-20 max-w-[1400px] mx-auto px-6 md:px-12"
          >
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-10">
              {category}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#BFA06A]/10">
              {items.map((collab) => (
                <div key={collab.slug} className="bg-[#1C1C1A] p-10">
                  {/* Image placeholder */}
                  <div className="aspect-video bg-[#252522] mb-8 flex items-center justify-center">
                    <span className="font-display text-6xl text-[#BFA06A]/10">
                      {collab.designer[0]}
                    </span>
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-1">
                        {collab.category} · {collab.year}
                      </p>
                      <h2 className="font-display font-light text-2xl text-[#F4EEE0]">
                        {collab.designer}
                      </h2>
                      <p className="font-body text-sm text-[#F4EEE0]/40">{collab.label}</p>
                    </div>
                  </div>
                  <p className="font-body text-sm text-[#F4EEE0]/55 leading-relaxed mb-6">
                    {collab.description}
                  </p>
                  {collab.quote && (
                    <blockquote className="border-l-2 border-[#BFA06A]/40 pl-5 mt-6">
                      <p className="font-display font-light text-lg text-[#F4EEE0]/70 italic leading-relaxed">
                        &ldquo;{collab.quote}&rdquo;
                      </p>
                      <footer className="font-body text-xs text-[#BFA06A] mt-2">
                        — {collab.designer}
                      </footer>
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          </section>
        ) : null
      )}

      {/* CTA */}
      <section className="py-20 bg-[#1C3D2F]/20 border-t border-[#BFA06A]/10 mt-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="font-display font-light text-2xl md:text-3xl text-[#F4EEE0]">
            Would you like to collaborate?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase bg-[#BFA06A] text-[#1C1C1A] px-7 py-3.5 hover:bg-[#D4B882] transition-colors duration-300 whitespace-nowrap"
          >
            Discuss a Project <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
