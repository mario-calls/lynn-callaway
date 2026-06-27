export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-[#2C5F4A] relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, white 60px, white 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, white 60px, white 61px)",
        }}
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <span className="block text-[#B8963E] text-xs tracking-[0.2em] uppercase mb-6 font-medium">
          Let&apos;s Work Together
        </span>
        <h2
          className="text-4xl md:text-6xl text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          Ready to grow your brand?
        </h2>
        <div
          style={{ width: 40, height: 2, background: "#B8963E", margin: "0 auto 2rem" }}
          aria-hidden
        />
        <p className="text-white/75 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you&apos;re launching something new or scaling what you&apos;ve already built,
          I partner with brands whose missions I believe in. Let&apos;s see if we&apos;re a fit.
        </p>

        <div className="flex justify-center">
          <a
            href="mailto:hello@lynncallaway.co"
            className="text-xs tracking-widest uppercase bg-white text-[#2C5F4A] px-8 py-4 hover:bg-[#B8963E] hover:text-white transition-colors font-medium"
          >
            hello@lynncallaway.co
          </a>
        </div>

        {/* Services quick list */}
        <div className="mt-20 pt-16 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Brand Strategy",
            "Content Marketing",
            "Partnerships",
            "Community Marketing",
          ].map((service) => (
            <div key={service}>
              <div className="text-[#B8963E] text-2xl mb-2" aria-hidden>✦</div>
              <div className="text-white/80 text-xs tracking-widest uppercase">{service}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
