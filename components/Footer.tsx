import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#BFA06A]/15 bg-[#1C1C1A] mt-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-display text-2xl tracking-[0.25em] uppercase text-[#F4EEE0] hover:text-[#BFA06A] transition-colors duration-300"
            >
              Zarguzari
            </Link>
            <p className="font-body text-sm text-[#F4EEE0]/50 mt-3 leading-relaxed max-w-xs">
              Couture Embroidery Studio.<br />
              Zari and Zardozi Savoir-Faire from India, Since 1985.
            </p>
            <div className="flex gap-5 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4EEE0]/40 hover:text-[#BFA06A] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-[0.12em] uppercase text-[#F4EEE0]/40 hover:text-[#BFA06A] transition-colors duration-300 mt-0.5"
              >
                Pinterest
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-4">
              Studio
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/atelier", label: "Atelier" },
                { href: "/savoir-faire", label: "Savoir-Faire" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/collaborations", label: "Collaborations" },
                { href: "/journal", label: "Journal" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#F4EEE0]/50 hover:text-[#F4EEE0] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#BFA06A] mb-4">
              Work With Us
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/for-designers", label: "For Designers & Brands" },
                { href: "/contact", label: "Discuss a Project" },
                { href: "/contact", label: "General Enquiry" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#F4EEE0]/50 hover:text-[#F4EEE0] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#BFA06A]/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-body text-xs text-[#F4EEE0]/25 tracking-wide">
            © {new Date().getFullYear()} Zarguzari Digital Atelier. All rights reserved.
          </p>
          <p className="font-body text-xs text-[#F4EEE0]/25 tracking-wide">
            Crafted in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
