"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Nav() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 40) {
        setVisible(true);
      } else if (y > lastY.current + 8) {
        setVisible(false);
      } else if (y < lastY.current - 8) {
        setVisible(true);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex items-center justify-between py-6">
        <Link
          href="/"
          className="text-2xl tracking-wide transition-colors text-white hover:text-white/70"
          style={{ fontFamily: "var(--font-raleway)", fontWeight: 800 }}
        >
          Lynn Callaway
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs tracking-widest uppercase transition-colors relative group text-white hover:text-white/70"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs tracking-widest uppercase px-5 py-2.5 rounded-lg transition-colors font-medium bg-white text-[#2C5F4A] hover:bg-white/80"
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
        className={`md:hidden bg-[#F9F7F4] border-t border-[#E5E2DC] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 py-6" : "max-h-0"
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
