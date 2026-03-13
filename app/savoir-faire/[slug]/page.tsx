import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { techniques } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return techniques.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const technique = techniques.find((t) => t.slug === slug);
  if (!technique) return {};
  return {
    title: `${technique.name} Embroidery`,
    description: technique.description,
  };
}

export default async function TechniquePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const technique = techniques.find((t) => t.slug === slug);
  if (!technique) notFound();

  const currentIndex = techniques.findIndex((t) => t.slug === slug);
  const nextTechnique = techniques[(currentIndex + 1) % techniques.length];

  return (
    <div className="pt-[72px]">
      {/* Back */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8">
        <Link
          href="/savoir-faire"
          className="inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-[#F4EEE0]/40 hover:text-[#BFA06A] transition-colors duration-300"
        >
          <ArrowLeft size={12} /> Savoir-Faire
        </Link>
      </div>

      {/* Hero */}
      <section className="py-20 md:py-28 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-4">
              Technique
            </p>
            <h1 className="font-display font-light text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-[#F4EEE0] mb-4">
              {technique.name}
            </h1>
            <p className="font-body text-base text-[#BFA06A]/70 italic mb-8">
              {technique.tagline}
            </p>
            <div className="space-y-5 font-body text-sm text-[#F4EEE0]/60 leading-relaxed">
              <p>{technique.description}</p>
              <p>{technique.heritage}</p>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="aspect-[4/5] bg-[#252522] flex items-center justify-center relative">
            <span className="font-display text-[10rem] text-[#BFA06A]/5 select-none">
              {technique.name[0]}
            </span>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-body text-xs text-[#F4EEE0]/30 tracking-wide">
                {technique.name} — Zarguzari Atelier
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#BFA06A]/15" />

      {/* Applications */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-8">
          Applications
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#BFA06A]/10">
          {technique.applications.map((app, i) => (
            <div key={app} className="bg-[#1C1C1A] p-8">
              <p className="font-display text-3xl text-[#BFA06A]/30 mb-4">0{i + 1}</p>
              <p className="font-body text-sm text-[#F4EEE0]/70 leading-relaxed">{app}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C3D2F]/20 border-y border-[#BFA06A]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-light text-2xl md:text-3xl text-[#F4EEE0]">
              Interested in {technique.name} for your collection?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase bg-[#BFA06A] text-[#1C1C1A] px-7 py-3.5 hover:bg-[#D4B882] transition-colors duration-300 whitespace-nowrap"
          >
            Discuss a Project
          </Link>
        </div>
      </section>

      {/* Next technique */}
      <section className="py-16 max-w-[1400px] mx-auto px-6 md:px-12">
        <Link
          href={`/savoir-faire/${nextTechnique.slug}`}
          className="group flex items-center justify-between py-6 border-b border-[#BFA06A]/15 hover:border-[#BFA06A]/40 transition-colors duration-300"
        >
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#F4EEE0]/30 mb-1">
              Next technique
            </p>
            <p className="font-display font-light text-2xl text-[#F4EEE0] group-hover:text-[#BFA06A] transition-colors duration-300">
              {nextTechnique.name}
            </p>
          </div>
          <ArrowRight
            size={20}
            className="text-[#BFA06A]/40 group-hover:translate-x-2 transition-transform duration-300"
          />
        </Link>
      </section>
    </div>
  );
}
