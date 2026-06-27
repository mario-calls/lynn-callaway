import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#2C5F4A] overflow-hidden">
      {/* Hero image — full bleed on mobile, right half on desktop */}
      <div className="absolute inset-0 md:left-[48%]">
        <Image
          src="/images/lynn-hero.jpg"
          alt="Lynn Callaway"
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 52vw"
        />
        {/* Mobile: gradient from bottom so text is readable, face stays clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F4A] via-[#2C5F4A]/70 via-[40%] to-transparent md:hidden" />
        {/* Desktop: gradient from left */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#2C5F4A] via-[#2C5F4A]/20 to-transparent" style={{ width: "40%" }} />
      </div>

      {/* Text — bottom on mobile, centered on desktop */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 flex flex-col justify-end md:justify-center min-h-screen">
        <div className="max-w-2xl pb-14 md:pt-24 md:pb-16">
          <h1
            className="fade-up text-white leading-[1.05] mb-8"
            style={{
              fontFamily: "var(--font-raleway)",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 4.8vw, 4.5rem)",
            }}
          >
            Organizer. Founder. Strategist. Helping brands built to do good.
          </h1>
          <div className="fade-up delay-2 flex flex-row gap-3">
            <a
              href="#about"
              className="text-xs tracking-widest uppercase bg-white text-[#2C5F4A] px-6 py-3.5 hover:bg-[#B8963E] hover:text-white transition-colors text-center font-semibold rounded-lg whitespace-nowrap"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="text-xs tracking-widest uppercase border border-white text-white px-6 py-3.5 hover:bg-white hover:text-[#2C5F4A] transition-colors text-center rounded-lg whitespace-nowrap"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
