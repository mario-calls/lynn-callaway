import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-[#2C5F4A] overflow-hidden">
      {/* Full-bleed image on mobile, right half on desktop */}
      <div className="absolute inset-0 md:left-[48%]">
        <Image
          src="/images/lynn-hero.jpg"
          alt="Lynn Callaway"
          fill
          priority
          className="object-cover object-[center_top]"
          sizes="(max-width: 768px) 100vw, 52vw"
        />
        {/* Mobile: strong bottom gradient so face shows, text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F4A] from-[30%] via-[#2C5F4A]/50 via-[55%] to-transparent md:hidden" />
        {/* Desktop: left-side gradient */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#2C5F4A] via-[#2C5F4A]/20 to-transparent" style={{ width: "40%" }} />
      </div>

      {/* Text: bottom-anchored on mobile, centered on desktop */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col justify-end md:justify-center min-h-[100svh]">
        <div className="max-w-2xl pb-12 sm:pb-16 md:pt-24 md:pb-20">
          <h1
            className="fade-up text-white leading-[1.05] mb-8"
            style={{
              fontFamily: "var(--font-raleway)",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
            }}
          >
            Organizer. Founder. Strategist. Helping brands built to do good.
          </h1>
          <div className="fade-up delay-2 flex flex-row gap-3 flex-wrap">
            <a
              href="#about"
              className="text-xs tracking-widest uppercase bg-white text-[#2C5F4A] px-6 py-3.5 hover:bg-[#B8963E] hover:text-white transition-colors font-semibold rounded-lg whitespace-nowrap"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="text-xs tracking-widest uppercase border border-white text-white px-6 py-3.5 hover:bg-white hover:text-[#2C5F4A] transition-colors rounded-lg whitespace-nowrap"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
