import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-[#E7EFDA] overflow-hidden">
      {/* Full-bleed background image — already composed with Lynn on right */}
      <div className="absolute inset-0">
        <Image
          src="/images/lynn-hero.jpg"
          alt="Lynn Callaway"
          fill
          priority
          className="object-cover object-[center_top]"
          sizes="100vw"
        />
        {/* Mobile: fade bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E7EFDA] from-[20%] via-[#E7EFDA]/70 via-[45%] to-transparent to-[65%] md:hidden" />
        {/* Desktop: subtle left fade so text sits cleanly */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#E7EFDA]/80 via-[#E7EFDA]/30 to-transparent" style={{ width: "55%" }} />
      </div>

      {/* Text */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col justify-end md:justify-center min-h-[100svh]">
        <div className="max-w-xl pb-12 sm:pb-16 md:pt-24 md:pb-20">
          <h1
            className="fade-up text-[#3D3D3D] leading-[1.05] mb-8"
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
