import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { techniques } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Savoir-Faire — Craft Techniques",
  description:
    "Zari, Zardozi, Aari, and mixed media embroidery. Explore the four core techniques that define Zarguzari's craft.",
};

export default function SavoirFairePage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-4">
          Craft
        </p>
        <h1 className="font-display font-light text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-[#F4EEE0] max-w-2xl">
          Savoir-Faire
        </h1>
        <p className="font-body text-base md:text-lg text-[#F4EEE0]/60 mt-8 max-w-xl leading-relaxed">
          Four distinct embroidery traditions, each with its own logic, tools, and
          possibilities. Each practised with the same discipline: honest craft,
          honestly produced.
        </p>
      </section>

      <div className="w-full h-px bg-[#BFA06A]/15" />

      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#BFA06A]/10">
          {techniques.map((t, i) => (
            <Link
              key={t.slug}
              href={`/savoir-faire/${t.slug}`}
              className="group bg-[#1C1C1A] p-12 hover:bg-[#1f1f1d] transition-colors duration-400"
            >
              <div className="flex justify-between items-start mb-8">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A]">
                  0{i + 1}
                </p>
                <ArrowRight
                  size={16}
                  className="text-[#BFA06A]/30 group-hover:text-[#BFA06A] group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
              <h2 className="font-display font-light text-4xl md:text-5xl text-[#F4EEE0] mb-3 group-hover:text-[#BFA06A] transition-colors duration-300">
                {t.name}
              </h2>
              <p className="font-body text-sm text-[#BFA06A]/70 tracking-wide mb-6 italic">
                {t.tagline}
              </p>
              <p className="font-body text-sm text-[#F4EEE0]/55 leading-relaxed mb-8">
                {t.description.split(". ").slice(0, 2).join(". ")}.
              </p>
              <div className="flex flex-wrap gap-2">
                {t.applications.slice(0, 3).map((app) => (
                  <span
                    key={app}
                    className="font-body text-xs text-[#F4EEE0]/30 border border-[#F4EEE0]/10 px-3 py-1"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
