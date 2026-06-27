import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-[#E7EFDA] overflow-hidden">
      <div className="absolute inset-0 hero-photo-enter">
        <Image
          src="/images/lynn-hero.jpg"
          alt="Lynn Callaway"
          fill
          priority
          className="object-cover object-[88%_top] md:object-[center_top]"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col justify-start md:justify-center min-h-[100svh]">
        <div className="max-w-[52%] md:max-w-xl pt-28 md:pt-24 pb-12">
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
