"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/atelier", label: "Atelier" },
  { href: "/savoir-faire", label: "Savoir-Faire" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/collaborations", label: "Collaborations" },
  { href: "/for-designers", label: "For Designers" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1C1C1A]/95 backdrop-blur-sm border-b border-[#BFA06A]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl tracking-[0.25em] uppercase text-[#F4EEE0] hover:text-[#BFA06A] transition-colors duration-300"
          >
            Zarguzari
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-xs tracking-[0.18em] uppercase transition-colors duration-300 link-underline ${
                    active ? "text-[#BFA06A]" : "text-[#F4EEE0]/70 hover:text-[#F4EEE0]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 font-body text-xs tracking-[0.18em] uppercase border border-[#BFA06A]/60 text-[#BFA06A] px-5 py-2.5 hover:bg-[#BFA06A] hover:text-[#1C1C1A] transition-all duration-300"
            >
              Enquire
            </Link>
            <button
              className="lg:hidden text-[#F4EEE0]/80 hover:text-[#F4EEE0] transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-[#1C1C1A] transition-opacity duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-8 py-10">
          <div className="flex justify-between items-center mb-16">
            <Link
              href="/"
              className="font-display text-xl tracking-[0.25em] uppercase text-[#F4EEE0]"
            >
              Zarguzari
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#F4EEE0]/60 hover:text-[#F4EEE0] transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-4xl font-light text-[#F4EEE0]/80 hover:text-[#BFA06A] transition-colors duration-300 py-2"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.18em] uppercase border border-[#BFA06A]/60 text-[#BFA06A] px-6 py-3 hover:bg-[#BFA06A] hover:text-[#1C1C1A] transition-all duration-300"
            >
              Discuss a Project
            </Link>
            <div className="flex gap-6 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-[0.15em] uppercase text-[#F4EEE0]/40 hover:text-[#BFA06A] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-[0.15em] uppercase text-[#F4EEE0]/40 hover:text-[#BFA06A] transition-colors"
              >
                Pinterest
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
