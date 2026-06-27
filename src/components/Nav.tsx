"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Press", href: "#press" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-[100]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex items-center justify-between py-6">
        <Link
          href="/"
          className="text-2xl text-white hover:text-white/70 transition-colors"
          style={{ fontFamily: "var(--font-raleway)", fontWeight: 800, letterSpacing: "0.05em" }}
        >
          Lynn Callaway
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs tracking-widest uppercase text-white hover:text-white/70 transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs tracking-widest uppercase px-5 py-2.5 rounded-lg font-medium bg-white text-[#2C5F4A] hover:bg-white/80 transition-colors"
          >
            Let&apos;s Talk
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#F9F7F4] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 py-6 border-t border-[#E5E2DC]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-[#1A1A1A] hover:text-[#2C5F4A] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-xs tracking-widest uppercase bg-[#2C5F4A] text-white px-5 py-3 text-center hover:bg-[#3D7A60] transition-colors rounded-lg"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
