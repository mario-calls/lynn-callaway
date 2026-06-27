import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#F9F7F4]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Photo */}
          <div className="relative order-2 md:order-1">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/bio-photo.jpg"
                alt="Lynn Callaway"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Offset green border accent */}
            <div
              className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#2C5F4A] -z-10"
              aria-hidden
            />
          </div>

          {/* Bio text */}
          <div className="order-1 md:order-2">
            <span className="block text-[#2C5F4A] text-xs tracking-[0.2em] uppercase mb-4 font-medium">
              About Lynn
            </span>
            <h2
              className="text-4xl md:text-5xl text-[#1A1A1A] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-raleway)", fontWeight: 800 }}
            >
              15+ Years of Mission-Driven Marketing
            </h2>
            <div style={{ width: 40, height: 2, background: "#B8963E", marginBottom: "1.75rem" }} />

            <div className="space-y-5 text-[#4A4A4A] text-base leading-relaxed">
              <p>
                I&apos;m a marketing and partnerships professional with 15+ years spanning grassroots organizing,
                tech, social enterprise, and the public sector. I got my start building community spaces and
                raising sustainability awareness at B.E.A.N. Inc., and dedicated 1,700 hours as an AmeriCorps
                alum serving low-income communities in Syracuse, NY.
              </p>
              <p>
                That grassroots foundation shaped every role since, from advertising operations and campaign
                performance at Amazon and Facebook, to co-founding{" "}
                <strong className="text-[#2C5F4A]">good dirt®</strong>, a functional mushroom beverage brand
                scaled to national retail including Sprouts, to managing outreach and marketing for the City
                of Austin&apos;s customer assistance programs, reaching 35,000+ households.
              </p>
              <p>
                I hold a BS in Digital Marketing from FIT, graduating Magna Cum Laude, with a track record
                of turning mission-driven work into measurable results. In my free time I run a postcard
                exchange community and love to travel.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="text-xs tracking-widest uppercase bg-[#2C5F4A] text-white px-7 py-4 hover:bg-[#3D7A60] transition-colors text-center rounded-lg"
              >
                Work With Me
              </a>
              <a
                href="#work"
                className="text-xs tracking-widest uppercase border border-[#2C5F4A] text-[#2C5F4A] px-7 py-4 hover:bg-[#2C5F4A] hover:text-white transition-colors text-center rounded-lg"
              >
                See Projects
              </a>
            </div>
          </div>

        </div>

        {/* Stats row */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-[#E5E2DC]">
          {[
            { number: "15+", label: "Years of Experience" },
            { number: "35K+", label: "Households Reached" },
            { number: "1,700", label: "AmeriCorps Hours" },
            { number: "Magna\nCum Laude", label: "FIT Graduate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div
                className="text-3xl md:text-4xl text-[#2C5F4A] mb-2 whitespace-pre-line leading-tight"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                {stat.number}
              </div>
              <div className="text-xs tracking-widest uppercase text-[#6B6B6B]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
