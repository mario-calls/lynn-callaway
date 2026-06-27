export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white/60 py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-center md:text-left">
        <span
          className="text-white/90"
          style={{ fontFamily: "var(--font-raleway)", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.05em" }}
        >
          Lynn Callaway
        </span>
        <a
          href="mailto:hello@lynncallaway.co"
          className="text-xs tracking-widest uppercase hover:text-white transition-colors"
        >
          hello@lynncallaway.co
        </a>
        <span className="text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Lynn Callaway. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
