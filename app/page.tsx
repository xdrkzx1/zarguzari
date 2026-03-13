import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { techniques, portfolioItems, journalPosts } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zarguzari — Couture Embroidery Atelier | Zari & Zardozi Since 1985",
};

export default function HomePage() {
  const featuredPortfolio = portfolioItems.slice(0, 3);
  const featuredJournal = journalPosts.slice(0, 2);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-24 pt-[72px]">
        {/* Background pattern */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(135deg, #1C1C1A 0%, #222220 40%, #1a2218 70%, #1C1C1A 100%)",
          }}
        />
        {/* Subtle gold texture overlay */}
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #BFA06A 0px, #BFA06A 1px, transparent 1px, transparent 12px)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-8 animate-fade-in">
              Since 1985 · Pune, India
            </p>
            <h1
              className="font-display font-light text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-[-0.02em] text-[#F4EEE0] animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Couture<br />
              Embroidery<br />
              <span className="text-[#BFA06A]">Atelier</span>
            </h1>
            <p
              className="font-body text-base md:text-lg text-[#F4EEE0]/60 mt-8 max-w-xl leading-relaxed animate-fade-up"
              style={{ animationDelay: "250ms" }}
            >
              Zari and Zardozi Savoir-Faire from India. Forty years of hand embroidery
              for the world&apos;s leading couture houses, bridal brands, and global
              fashion labels.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-up"
              style={{ animationDelay: "380ms" }}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase bg-[#BFA06A] text-[#1C1C1A] px-7 py-3.5 hover:bg-[#D4B882] transition-colors duration-300"
              >
                View Portfolio <ArrowRight size={14} />
              </Link>
              <Link
                href="/for-designers"
                className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase border border-[#F4EEE0]/20 text-[#F4EEE0]/80 px-7 py-3.5 hover:border-[#BFA06A]/60 hover:text-[#BFA06A] transition-all duration-300"
              >
                For Designers <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Stat row */}
          <div className="mt-20 md:mt-24 pt-8 border-t border-[#BFA06A]/15 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "40+", label: "Years of practice" },
              { stat: "500+", label: "Projects completed" },
              { stat: "18+", label: "Countries served" },
              { stat: "4", label: "Core techniques" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-display font-light text-3xl md:text-4xl text-[#BFA06A]">
                  {item.stat}
                </p>
                <p className="font-body text-xs text-[#F4EEE0]/40 tracking-wide mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-28 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-14">
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-3">
              Craft
            </p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-[#F4EEE0]">
              Savoir-Faire
            </h2>
          </div>
          <Link
            href="/savoir-faire"
            className="hidden md:flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-[#F4EEE0]/40 hover:text-[#BFA06A] transition-colors duration-300 group"
          >
            All techniques
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#BFA06A]/10">
          {techniques.map((t) => (
            <Link
              key={t.slug}
              href={`/savoir-faire/${t.slug}`}
              className="group bg-[#1C1C1A] p-8 hover:bg-[#222220] transition-colors duration-400"
            >
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-5">
                Technique
              </p>
              <h3 className="font-display font-light text-2xl md:text-3xl text-[#F4EEE0] mb-3 group-hover:text-[#BFA06A] transition-colors duration-300">
                {t.name}
              </h3>
              <p className="font-body text-sm text-[#F4EEE0]/50 leading-relaxed mb-6">
                {t.tagline}
              </p>
              <div className="flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-[#BFA06A]/60 group-hover:text-[#BFA06A] transition-colors duration-300">
                Explore <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 md:hidden text-center">
          <Link
            href="/savoir-faire"
            className="inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-[#F4EEE0]/40 hover:text-[#BFA06A] transition-colors duration-300"
          >
            All techniques <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-28 border-t border-[#BFA06A]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-14">
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-3">
                Work
              </p>
              <h2 className="font-display font-light text-4xl md:text-5xl text-[#F4EEE0]">
                Portfolio
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden md:flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-[#F4EEE0]/40 hover:text-[#BFA06A] transition-colors duration-300 group"
            >
              View all projects
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#BFA06A]/10">
            {featuredPortfolio.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="group relative bg-[#1C1C1A] overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="aspect-[3/4] bg-[#252522] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-8xl text-[#BFA06A]/5 select-none">Z</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A] via-transparent to-transparent opacity-80" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-2">
                    {item.category} · {item.technique[0]}
                  </p>
                  <h3 className="font-display font-light text-xl text-[#F4EEE0] group-hover:text-[#BFA06A] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-[#F4EEE0]/40 mt-1">{item.year}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 md:hidden text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-[#F4EEE0]/40 hover:text-[#BFA06A] transition-colors duration-300"
            >
              View all projects <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-[#1C3D2F]/30 border-y border-[#BFA06A]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-3">
              For Designers & Brands
            </p>
            <h2 className="font-display font-light text-3xl md:text-4xl text-[#F4EEE0] max-w-md">
              Ready to discuss your next collection?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/for-designers"
              className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase border border-[#BFA06A]/60 text-[#BFA06A] px-7 py-3.5 hover:bg-[#BFA06A] hover:text-[#1C1C1A] transition-all duration-300"
            >
              How We Work <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase bg-[#BFA06A] text-[#1C1C1A] px-7 py-3.5 hover:bg-[#D4B882] transition-colors duration-300"
            >
              Discuss a Project <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="py-28 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-14">
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-3">
              Stories
            </p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-[#F4EEE0]">
              Journal
            </h2>
          </div>
          <Link
            href="/journal"
            className="hidden md:flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-[#F4EEE0]/40 hover:text-[#BFA06A] transition-colors duration-300 group"
          >
            All stories
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#BFA06A]/10">
          {featuredJournal.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group bg-[#1C1C1A] p-10 hover:bg-[#222220] transition-colors duration-400"
            >
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-4">
                {post.category} · {post.date}
              </p>
              <h3 className="font-display font-light text-2xl md:text-3xl text-[#F4EEE0] mb-4 group-hover:text-[#BFA06A] transition-colors duration-300 leading-snug">
                {post.title}
              </h3>
              <p className="font-body text-sm text-[#F4EEE0]/50 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-[#BFA06A]/60 group-hover:text-[#BFA06A] transition-colors duration-300">
                Read · {post.readTime} <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Positioning footer */}
      <section className="py-20 border-t border-[#BFA06A]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <p className="font-display font-light text-[clamp(1.4rem,3vw,2.5rem)] text-[#F4EEE0]/60 leading-relaxed max-w-3xl mx-auto">
            &ldquo;Zarguzari — Couture Embroidery Studio.{" "}
            <span className="text-[#F4EEE0]">
              Zari and Zardozi Savoir-Faire from India, Since 1985.
            </span>
            &rdquo;
          </p>
          <div className="w-16 h-px bg-[#BFA06A] mx-auto mt-10" />
        </div>
      </section>
    </div>
  );
}
