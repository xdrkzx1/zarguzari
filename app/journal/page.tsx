import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { journalPosts } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal — Craft Stories",
  description:
    "Heritage essays, process stories, and profiles of the artisans behind Zarguzari's embroidery.",
};

export default function JournalPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-4">
          Stories
        </p>
        <h1 className="font-display font-light text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-[#F4EEE0]">
          Journal
        </h1>
        <p className="font-body text-base text-[#F4EEE0]/60 mt-6 max-w-xl leading-relaxed">
          Heritage essays, process stories, and profiles of the artisans behind
          the work.
        </p>
      </section>

      <div className="w-full h-px bg-[#BFA06A]/15" />

      <section className="py-16 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Featured post */}
        <Link
          href={`/journal/${journalPosts[0].slug}`}
          className="group grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#BFA06A]/10 mb-px"
        >
          <div className="bg-[#1C1C1A] aspect-video lg:aspect-auto flex items-center justify-center min-h-64">
            <span className="font-display text-[10rem] text-[#BFA06A]/5 select-none">
              {journalPosts[0].title[0]}
            </span>
          </div>
          <div className="bg-[#1C1C1A] p-12 flex flex-col justify-center">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-4">
              {journalPosts[0].category} · {journalPosts[0].date}
            </p>
            <h2 className="font-display font-light text-3xl md:text-4xl text-[#F4EEE0] mb-5 group-hover:text-[#BFA06A] transition-colors duration-300 leading-snug">
              {journalPosts[0].title}
            </h2>
            <p className="font-body text-sm text-[#F4EEE0]/55 leading-relaxed mb-8">
              {journalPosts[0].excerpt}
            </p>
            <div className="flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-[#BFA06A]/60 group-hover:text-[#BFA06A] transition-colors duration-300">
              Read · {journalPosts[0].readTime}{" "}
              <ArrowRight
                size={11}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </div>
          </div>
        </Link>

        {/* Remaining posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#BFA06A]/10">
          {journalPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group bg-[#1C1C1A] p-8 hover:bg-[#1f1f1d] transition-colors duration-400"
            >
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-4">
                {post.category} · {post.date}
              </p>
              <h2 className="font-display font-light text-xl text-[#F4EEE0] mb-3 group-hover:text-[#BFA06A] transition-colors duration-300 leading-snug">
                {post.title}
              </h2>
              <p className="font-body text-sm text-[#F4EEE0]/50 leading-relaxed mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-[#BFA06A]/50 group-hover:text-[#BFA06A] transition-colors duration-300">
                Read · {post.readTime}{" "}
                <ArrowRight
                  size={11}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
