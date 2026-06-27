import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#2C5F4A] overflow-hidden">
      {/* Hero image — right half */}
      <div className="absolute inset-0 md:left-[48%]">
        <Image
          src="/images/lynn-hero.jpg"
          alt="Lynn Callaway"
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 52vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F4A] via-[#2C5F4A]/50 to-transparent md:hidden" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#2C5F4A] via-[#2C5F4A]/20 to-transparent" style={{ width: "40%" }} />
      </div>

      {/* Text */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 flex items-center min-h-screen">
        <div className="max-w-2xl pt-24 pb-16">
          <h1
            className="fade-up text-white leading-[1.05] mb-10"
            style={{
              fontFamily: "var(--font-raleway)",
              fontWeight: 800,
              fontSize: "clamp(3.5rem, 7.5vw, 6.5rem)",
            }}
          >
            I help brands with good <em>ethos</em> do better.
          </h1>
          <div className="fade-up delay-2 flex flex-col sm:flex-row gap-4">
            <a
              href="#about"
              className="text-xs tracking-widest uppercase bg-white text-[#2C5F4A] px-7 py-4 hover:bg-[#B8963E] hover:text-white transition-colors text-center font-semibold"
            >
              Learn More
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
