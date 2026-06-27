export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white/60 py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest uppercase">
        <span style={{ fontFamily: "var(--font-playfair)", fontSize: "1rem", textTransform: "none", letterSpacing: "0.05em", color: "rgba(255,255,255,0.85)" }}>
          Lynn Callaway
        </span>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/lynn-callaway"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@lynncallaway.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
        <span>&copy; {new Date().getFullYear()} Lynn Callaway. All rights reserved.</span>
      </div>
    </footer>
  );
}
