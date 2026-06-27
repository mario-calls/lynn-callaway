import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#2C5F4A] flex items-end overflow-hidden">
      {/* Hero image — fills right side on desktop, full bleed on mobile */}
      <div className="absolute inset-0 md:left-[45%]">
        <Image
          src="/images/lynn-hero.jpg"
          alt="Lynn Callaway"
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
        {/* Gradient overlay so text stays readable on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F4A] via-[#2C5F4A]/60 to-transparent md:hidden" />
        {/* Left edge gradient on desktop */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#2C5F4A] via-[#2C5F4A]/30 to-transparent w-1/3" />
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 lg:px-12 pb-20 pt-40 md:pb-28 md:pt-0 flex items-end md:items-center min-h-screen">
        <div className="max-w-xl">
          <span className="fade-up delay-1 block text-[#B8963E] text-xs tracking-[0.2em] uppercase mb-6 font-medium">
            Marketing Strategist &amp; Brand Consultant
          </span>
          <h1
            className="fade-up delay-2 text-white leading-tight mb-6 font-extrabold"
            style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", fontWeight: 800 }}
          >
            I help brands with good <em>ethos</em> do better.
          </h1>
          <div className="divider fade-up delay-3" style={{ width: 40, height: 2, background: "#B8963E", margin: "1.5rem 0" }} />
          <p className="fade-up delay-3 text-white/80 text-lg leading-relaxed mb-10 max-w-md">
            I&apos;m an entrepreneur and marketing strategist who builds growth for social impact brands and
            community-rooted businesses, drawing on 15+ years of work that spans grassroots organizing,
            program building, corporate marketing, and building mission-driven companies from the ground up.
          </p>
          <div className="fade-up delay-4 flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="text-xs tracking-widest uppercase bg-white text-[#2C5F4A] px-7 py-4 hover:bg-[#B8963E] hover:text-white transition-colors text-center font-medium"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="text-xs tracking-widest uppercase border border-white text-white px-7 py-4 hover:bg-white hover:text-[#2C5F4A] transition-colors text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
