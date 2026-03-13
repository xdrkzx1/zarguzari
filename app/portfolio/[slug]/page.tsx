import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { portfolioItems } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) return {};
  return { title: item.title, description: item.brief };
}

export default async function PortfolioItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) notFound();

  const currentIndex = portfolioItems.findIndex((p) => p.slug === slug);
  const nextItem = portfolioItems[(currentIndex + 1) % portfolioItems.length];

  return (
    <div className="pt-[72px]">
      {/* Back */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-[#F4EEE0]/40 hover:text-[#BFA06A] transition-colors duration-300"
        >
          <ArrowLeft size={12} /> Portfolio
        </Link>
      </div>

      {/* Hero */}
      <section className="py-16 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="aspect-[3/4] bg-[#252522] relative overflow-hidden order-2 lg:order-1">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[12rem] text-[#BFA06A]/5 select-none">
                Z
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="order-1 lg:order-2">
            <div className="flex gap-2 mb-6 flex-wrap">
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] border border-[#BFA06A]/30 px-3 py-1">
                {item.category}
              </span>
              {item.technique.map((t) => (
                <span
                  key={t}
                  className="font-body text-[10px] tracking-[0.2em] uppercase text-[#F4EEE0]/30 border border-[#F4EEE0]/10 px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="font-display font-light text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-[#F4EEE0] mb-4">
              {item.title}
            </h1>
            <p className="font-body text-sm text-[#F4EEE0]/40 mb-12">{item.year}</p>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-px bg-[#BFA06A]/10 mb-12">
              {[
                { label: "Role", value: item.role },
                { label: "Complexity", value: item.complexity },
                { label: "Materials", value: item.materials },
                { label: "Client", value: item.client },
              ].map((meta) => (
                <div key={meta.label} className="bg-[#1C1C1A] p-5">
                  <p className="font-body text-[10px] tracking-[0.15em] uppercase text-[#BFA06A] mb-1">
                    {meta.label}
                  </p>
                  <p className="font-body text-sm text-[#F4EEE0]/60">{meta.value}</p>
                </div>
              ))}
            </div>

            {/* Case narrative */}
            <div className="space-y-6">
              {[
                { label: "Brief", text: item.brief },
                { label: "Solution", text: item.solution },
                { label: "Outcome", text: item.outcome },
              ].map((section) => (
                <div key={section.label}>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-2">
                    {section.label}
                  </p>
                  <p className="font-body text-sm text-[#F4EEE0]/60 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C3D2F]/20 border-y border-[#BFA06A]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="font-display font-light text-2xl md:text-3xl text-[#F4EEE0]">
            Interested in similar work for your collection?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase bg-[#BFA06A] text-[#1C1C1A] px-7 py-3.5 hover:bg-[#D4B882] transition-colors duration-300 whitespace-nowrap"
          >
            Discuss a Project <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Next */}
      <section className="py-16 max-w-[1400px] mx-auto px-6 md:px-12">
        <Link
          href={`/portfolio/${nextItem.slug}`}
          className="group flex items-center justify-between py-6 border-b border-[#BFA06A]/15 hover:border-[#BFA06A]/40 transition-colors duration-300"
        >
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#F4EEE0]/30 mb-1">
              Next project
            </p>
            <p className="font-display font-light text-2xl text-[#F4EEE0] group-hover:text-[#BFA06A] transition-colors duration-300">
              {nextItem.title}
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
