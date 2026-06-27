import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-[#E7EFDA] overflow-hidden">
      {/* Full-bleed photo — object-right-top keeps Lynn visible on all viewports */}
      <div className="absolute inset-0 hero-photo-enter">
        <Image
          src="/images/lynn-hero.jpg"
          alt="Lynn Callaway"
          fill
          priority
          className="object-cover object-right-top"
          sizes="100vw"
        />
        {/* Left-side gradient so text stays readable — works on all screen sizes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#E7EFDA] via-[#E7EFDA]/60 to-transparent" style={{ width: "65%" }} />
        {/* Subtle bottom fade on mobile for extra legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E7EFDA]/40 via-transparent to-transparent md:hidden" />
      </div>

      {/* Text — vertically centered on all screen sizes */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col justify-center min-h-[100svh]">
        <div className="max-w-xl pt-24 pb-12">
          <h1
            className="fade-up text-[#555555] leading-[1.05] mb-8"
            style={{
              fontFamily: "var(--font-raleway)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
            }}
          >
            Organizer. Founder. Strategist. Helping brands built to do good.
          </h1>
          <div className="fade-up delay-2 flex flex-row gap-3 flex-wrap">
            <a
              href="#about"
              className="text-xs tracking-widest uppercase bg-[#2C5F4A] text-white px-6 py-3.5 hover:bg-[#B8963E] transition-colors font-semibold rounded-lg whitespace-nowrap"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="text-xs tracking-widest uppercase border border-[#2C5F4A] text-[#2C5F4A] px-6 py-3.5 hover:bg-[#2C5F4A] hover:text-white transition-colors rounded-lg whitespace-nowrap"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
