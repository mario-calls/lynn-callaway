import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-28 lg:py-36 bg-[#E7EFDA] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, #2C5F4A 60px, #2C5F4A 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, #2C5F4A 60px, #2C5F4A 61px)",
        }}
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <Reveal direction="up">
          <span className="block text-[#B8963E] text-xs tracking-[0.2em] uppercase mb-5 font-medium">
            Let&apos;s Work Together
          </span>
          <h2
            className="text-[#333333] mb-5 leading-tight"
            style={{
              fontFamily: "var(--font-raleway)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
            }}
          >
            Ready to grow your brand?
          </h2>
          <div
            style={{ width: 40, height: 2, background: "#B8963E", margin: "0 auto 1.75rem" }}
            aria-hidden
          />
          <p className="text-[#333333] text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re launching something new or scaling what you&apos;ve already built,
            I partner with brands whose missions I believe in. Let&apos;s see if we&apos;re a fit.
          </p>

          <div className="flex justify-center">
            <a
              href="mailto:hello@lynncallaway.co"
              className="text-[10px] sm:text-xs tracking-widest uppercase bg-[#532D3A] text-white px-6 sm:px-8 py-4 hover:bg-[#B8963E] transition-colors font-medium rounded-lg"
            >
              hello@lynncallaway.co
            </a>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-[#2C5F4A]/20 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 text-center">
          {[
            "Brand Strategy",
            "Content Marketing",
            "Partnerships",
            "Community Marketing",
          ].map((service, i) => (
            <Reveal key={service} direction="fade" delay={i * 80}>
              <div>
                <div className="text-[#B8963E] text-xl mb-2" aria-hidden>✦</div>
                <div className="text-[#333333] text-[10px] md:text-xs tracking-widest uppercase">{service}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
