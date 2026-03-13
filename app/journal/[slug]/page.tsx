import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { journalPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = journalPosts.findIndex((p) => p.slug === slug);
  const nextPost = journalPosts[(currentIndex + 1) % journalPosts.length];

  return (
    <div className="pt-[72px]">
      {/* Back */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-[#F4EEE0]/40 hover:text-[#BFA06A] transition-colors duration-300"
        >
          <ArrowLeft size={12} /> Journal
        </Link>
      </div>

      {/* Header */}
      <header className="py-16 md:py-24 max-w-[900px] mx-auto px-6 md:px-12">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-5">
          {post.category} · {post.date} · {post.readTime}
        </p>
        <h1 className="font-display font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-[#F4EEE0] mb-6">
          {post.title}
        </h1>
        <p className="font-body text-base text-[#F4EEE0]/60 leading-relaxed max-w-2xl">
          {post.excerpt}
        </p>
      </header>

      {/* Hero image */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <div className="aspect-video bg-[#252522] flex items-center justify-center">
          <span className="font-display text-[12rem] text-[#BFA06A]/5 select-none">
            {post.title[0]}
          </span>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-[900px] mx-auto px-6 md:px-12 pb-24">
        <div className="w-12 h-px bg-[#BFA06A] mb-10" />
        <div className="space-y-6">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i} className="font-body text-base text-[#F4EEE0]/65 leading-[1.85]">
              {para}
            </p>
          ))}
        </div>
      </article>

      {/* Next */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-16 border-t border-[#BFA06A]/10 pt-8">
        <Link
          href={`/journal/${nextPost.slug}`}
          className="group flex items-center justify-between py-6"
        >
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#F4EEE0]/30 mb-1">
              Next story
            </p>
            <p className="font-display font-light text-2xl text-[#F4EEE0] group-hover:text-[#BFA06A] transition-colors duration-300">
              {nextPost.title}
            </p>
          </div>
          <ArrowRight
            size={20}
            className="text-[#BFA06A]/40 group-hover:translate-x-2 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  );
}
