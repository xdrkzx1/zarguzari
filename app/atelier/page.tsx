import { artisans } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atelier — Heritage & Studio",
  description:
    "40 years of hand embroidery. Meet the artisans behind Zarguzari and understand the philosophy of slow craft that defines our work.",
};

export default function AtelierPage() {
  return (
    <div className="pt-[72px]">
      {/* Header */}
      <section className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-4">
          Studio
        </p>
        <h1 className="font-display font-light text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-[#F4EEE0] max-w-2xl">
          The Atelier
        </h1>
        <p className="font-body text-base md:text-lg text-[#F4EEE0]/60 mt-8 max-w-2xl leading-relaxed">
          Founded in Pune in 1985, Zarguzari has spent four decades building a
          body of work in hand embroidery that spans bridal couture, international
          fashion houses, and export production. We are a working studio — not a
          heritage museum — and our archive grows every season.
        </p>
      </section>

      <div className="w-full h-px bg-[#BFA06A]/15" />

      {/* Heritage Story */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-6">
              Heritage
            </p>
            <h2 className="font-display font-light text-3xl md:text-4xl text-[#F4EEE0] mb-8">
              Since 1985
            </h2>
            <div className="space-y-5 font-body text-sm text-[#F4EEE0]/60 leading-relaxed">
              <p>
                Zarguzari was founded when Indian couture was beginning its global
                awakening. We started as a small workshop in Old Delhi, working for
                local designers and wedding clients. Over the decades, we grew
                alongside India&apos;s fashion industry — absorbing new techniques, new
                materials, and new clients from around the world.
              </p>
              <p>
                The studio today maintains the hand-work discipline of its founding
                while operating to the technical and logistical standards that
                international fashion houses require. We work in zari, zardozi, aari,
                and mixed media — four distinct craft traditions that we practise with
                equal commitment.
              </p>
              <p>
                Our track record includes work for India&apos;s foremost couture designers,
                bridal houses across the subcontinent, and export clients in Europe, the
                Americas, and the Gulf. We approach each project as a translation
                problem: how do we make the designer&apos;s intention visible in thread?
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-8">
              Milestones
            </p>
            {[
              { year: "1985", event: "Founded in Old Delhi as a specialist hand-embroidery workshop" },
              { year: "1994", event: "First export commission for a European fashion house" },
              { year: "2002", event: "Moved to current larger studio; expanded to 30+ artisans" },
              { year: "2008", event: "First collaboration with Manish Malhotra for bridal couture" },
              { year: "2015", event: "Launched dedicated export division for international labels" },
              { year: "2019", event: "Received National Award recognition for craft preservation" },
              { year: "2024", event: "Work featured in Paris Couture Week and multiple international editorials" },
            ].map((item) => (
              <div
                key={item.year}
                className="flex gap-8 py-5 border-b border-[#BFA06A]/10 last:border-0"
              >
                <span className="font-display font-light text-2xl text-[#BFA06A] w-16 flex-shrink-0">
                  {item.year}
                </span>
                <p className="font-body text-sm text-[#F4EEE0]/60 leading-relaxed pt-1">
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#BFA06A]/15" />

      {/* Philosophy */}
      <section className="py-24 bg-[#1C3D2F]/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-6">
            Philosophy
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Slow Craft",
                body: "We do not believe in embroidery that pretends to be faster than it is. Good hand embroidery takes the time it takes, and that time is visible in the result. We plan carefully so that timelines are honest and achievable.",
              },
              {
                title: "Fair Work",
                body: "Our artisans are permanent employees, not contract workers. We believe craft continuity requires stability — artisans who feel secure in their position bring their full attention to the work. Fair wages and consistent employment are not optional extras; they are part of the craft standard.",
              },
              {
                title: "Design Intelligence",
                body: "We understand designers' language. Our role is not simply to execute instructions but to translate intent — to understand what the designer sees in their reference and find the embroidery logic that carries it. We are collaborators, not suppliers.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-display font-light text-2xl text-[#F4EEE0] mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-[#F4EEE0]/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#BFA06A]/15" />

      {/* Artisans */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#BFA06A] mb-6">
          People
        </p>
        <h2 className="font-display font-light text-3xl md:text-4xl text-[#F4EEE0] mb-14">
          Master Artisans
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#BFA06A]/10">
          {artisans.map((artisan) => (
            <div key={artisan.name} className="bg-[#1C1C1A] p-8">
              <div className="aspect-square bg-[#252522] mb-6 flex items-center justify-center">
                <span className="font-display text-5xl text-[#BFA06A]/10">
                  {artisan.name[0]}
                </span>
              </div>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-2">
                {artisan.years}
              </p>
              <h3 className="font-display font-light text-xl text-[#F4EEE0] mb-1">
                {artisan.name}
              </h3>
              <p className="font-body text-xs text-[#F4EEE0]/40 mb-4">{artisan.title}</p>
              <p className="font-body text-sm text-[#F4EEE0]/55 leading-relaxed">{artisan.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
