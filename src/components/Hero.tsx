import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-[#E7EFDA] overflow-hidden flex items-center">
      {/* Portrait photo — right panel, same on all screen sizes */}
      <div className="absolute inset-y-0 right-0 left-[48%]">
        <Image
          src="/images/lynn-hero-portrait.jpg"
          alt="Lynn Callaway"
          fill
          priority
          className="object-cover object-[center_top]"
          sizes="52vw"
        />
      </div>

      {/* Text — left half, vertically centered */}
      <div className="relative z-10 w-[48%] pl-6 sm:pl-10 lg:pl-16 xl:pl-24 pr-4 py-28">
        <h1
          className="fade-up text-[#555555] leading-[1.05] mb-8"
          style={{
            fontFamily: "var(--font-raleway)",
            fontWeight: 800,
            fontSize: "clamp(1.4rem, 3.5vw, 4.5rem)",
          }}
        >
          Organizer. Founder. Strategist. Helping brands built to do good.
        </h1>
        <div className="fade-up delay-2 flex flex-col sm:flex-row gap-3">
          <a
            href="#about"
            className="text-[10px] sm:text-xs tracking-widest uppercase bg-[#2C5F4A] text-white px-4 sm:px-6 py-3 sm:py-3.5 hover:bg-[#B8963E] transition-colors font-semibold rounded-lg text-center whitespace-nowrap"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="text-[10px] sm:text-xs tracking-widest uppercase border border-[#2C5F4A] text-[#2C5F4A] px-4 sm:px-6 py-3 sm:py-3.5 hover:bg-[#2C5F4A] hover:text-white transition-colors rounded-lg text-center whitespace-nowrap"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
