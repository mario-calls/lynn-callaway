"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Nav() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [scrolledBack, setScrolledBack] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const wasHidden = useRef(false);

  useEffect(() => {
    // Larger threshold on mobile to absorb iOS Safari URL-bar scroll noise
    const threshold = window.innerWidth < 768 ? 20 : 8;

    const onScroll = () => {
      const y = window.scrollY;
      const isAtTop = y < 60;

      setAtTop(isAtTop);

      if (isAtTop) {
        setVisible(true);
        setScrolledBack(false);
        wasHidden.current = false;
      } else if (y > lastY.current + threshold) {
        setVisible(false);
        wasHidden.current = true;
      } else if (y < lastY.current - threshold) {
        setVisible(true);
        if (wasHidden.current) {
          setScrolledBack(true);
          wasHidden.current = false;
        }
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

  // Solid bg only when re-emerging after scroll-back-up (not during downward scroll)
  const showSolid = scrolledBack && !atTop;
  const textColor = showSolid ? "text-[#1A1A1A]" : "text-white";
  const hoverColor = showSolid ? "hover:text-[#2C5F4A]" : "hover:text-white/70";
  const underlineColor = showSolid ? "bg-[#2C5F4A]" : "bg-white";
  const barColor = showSolid ? "bg-[#1A1A1A]" : "bg-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${showSolid ? "bg-[#F9F7F4]/96 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex items-center justify-between py-6">
        <Link
          href="/"
          className={`text-2xl tracking-wide transition-colors ${textColor} ${hoverColor}`}
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
              className={`text-xs tracking-widest uppercase transition-colors relative group ${textColor} ${hoverColor}`}
            >
              {l.label}
              <span className={`absolute -bottom-0.5 left-0 w-0 h-px ${underlineColor} group-hover:w-full transition-all duration-300`} />
            </a>
          ))}
          <a
            href="#contact"
            className={`text-xs tracking-widest uppercase px-5 py-2.5 rounded-lg transition-colors font-medium ${
              showSolid
                ? "bg-[#2C5F4A] text-white hover:bg-[#3D7A60]"
                : "bg-white text-[#2C5F4A] hover:bg-white/80"
            }`}
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
          <span className={`block w-6 h-px transition-all duration-300 ${barColor} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${barColor} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${barColor} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
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
