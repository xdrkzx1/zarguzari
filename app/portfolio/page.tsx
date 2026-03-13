"use client";

import Link from "next/link";
import { useState } from "react";
import { portfolioItems } from "@/lib/data";

const categories = ["All", "Bridal", "Couture", "Prêt", "Accessories", "Editorial"];
const techniquesFilter = ["All", "Zari", "Zardozi", "Aari", "Mixed Media"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTechnique, setActiveTechnique] = useState("All");

  const filtered = portfolioItems.filter((item) => {
    const catMatch =
      activeCategory === "All" || item.category === activeCategory;
    const techMatch =
      activeTechnique === "All" ||
      item.technique.some((t) =>
        t.toLowerCase().includes(activeTechnique.toLowerCase())
      );
    return catMatch && techMatch;
  });

  return (
    <div className="pt-[72px]">
      {/* Header */}
      <section className="py-24 md:py-28 max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-4">
          Work
        </p>
        <h1 className="font-display font-light text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-[#F4EEE0]">
          Portfolio
        </h1>
        <p className="font-body text-base text-[#F4EEE0]/60 mt-6 max-w-xl leading-relaxed">
          Selected projects across bridal, couture, prêt, accessories, and editorial.
          Each piece is documented with brief, process, and outcome.
        </p>
      </section>

      {/* Filters */}
      <div className="sticky top-[72px] z-30 bg-[#1C1C1A]/95 backdrop-blur-sm border-y border-[#BFA06A]/10 py-4">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap gap-4 md:gap-6 items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-body text-xs tracking-[0.15em] uppercase px-4 py-1.5 transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#BFA06A] text-[#1C1C1A]"
                      : "text-[#F4EEE0]/40 hover:text-[#F4EEE0] border border-[#F4EEE0]/10 hover:border-[#BFA06A]/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="w-px h-4 bg-[#BFA06A]/20 hidden md:block" />
            <div className="flex flex-wrap gap-2">
              {techniquesFilter.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setActiveTechnique(tech)}
                  className={`font-body text-xs tracking-[0.15em] uppercase px-4 py-1.5 transition-all duration-200 ${
                    activeTechnique === tech
                      ? "bg-[#1C3D2F] text-[#F4EEE0] border border-[#1C3D2F]"
                      : "text-[#F4EEE0]/40 hover:text-[#F4EEE0] border border-[#F4EEE0]/10 hover:border-[#BFA06A]/30"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 max-w-[1400px] mx-auto px-6 md:px-12">
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-body text-sm text-[#F4EEE0]/30">
              No projects match the selected filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#BFA06A]/10">
            {filtered.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="group relative bg-[#1C1C1A] overflow-hidden"
              >
                <div className="aspect-[3/4] bg-[#252522] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-8xl text-[#BFA06A]/5 select-none">
                      Z
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A] via-[#1C1C1A]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <div className="flex gap-2 mb-3 flex-wrap">
                      <span className="font-body text-[9px] tracking-[0.2em] uppercase text-[#BFA06A] border border-[#BFA06A]/30 px-2 py-0.5">
                        {item.category}
                      </span>
                      {item.technique.slice(0, 1).map((t) => (
                        <span
                          key={t}
                          className="font-body text-[9px] tracking-[0.2em] uppercase text-[#F4EEE0]/30 border border-[#F4EEE0]/10 px-2 py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-display font-light text-xl text-[#F4EEE0] group-hover:text-[#BFA06A] transition-colors duration-300">
                      {item.title}
                    </h2>
                    <p className="font-body text-xs text-[#F4EEE0]/40 mt-1">
                      {item.year}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
