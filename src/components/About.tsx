import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="pt-16 pb-4 md:pt-28 md:pb-6 lg:pt-36 lg:pb-8 bg-[#F9F7F4]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-24 items-center">

          {/* Photo */}
          <Reveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/bio-photo.jpg"
                  alt="Lynn Callaway"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                className="hidden md:block absolute -bottom-4 -left-4 w-full h-full border-2 border-[#2C5F4A] rounded-2xl -z-10"
                aria-hidden
              />
            </div>
          </Reveal>

          {/* Bio text */}
          <Reveal direction="up" delay={150}>
            <div>
              <span className="block text-[#2C5F4A] text-xs tracking-[0.2em] uppercase mb-4 font-medium">
                About Lynn
              </span>
              <h2
                className="text-[#555555] mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-raleway)",
                  fontWeight: 800,
                  fontSize: "clamp(1.9rem, 4vw, 3.25rem)",
                }}
              >
                Mission-Driven Marketing
              </h2>
              <div style={{ width: 40, height: 2, background: "#B8963E", marginBottom: "1.5rem" }} />

              <div className="space-y-4 text-[#4A4A4A] text-sm sm:text-base leading-relaxed">
                <p>
                  I&apos;m a marketing and partnerships professional spanning grassroots organizing,
                  tech, social enterprise, and the public sector. I got my start building community spaces and
                  raising sustainability awareness at B.E.A.N. Inc., and dedicated 1,700 hours as an AmeriCorps
                  alum serving low-income communities in Syracuse, NY.
                </p>
                <p>
                  That grassroots foundation shaped every role since, from advertising operations and campaign
                  performance at Amazon and Facebook, to co-founding{" "}
                  <a
                    href="https://www.drinkgooddirt.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#2C5F4A] underline-offset-2 hover:underline"
                  >
                    good dirt®
                  </a>
                  , a functional mushroom beverage brand
                  scaled to national retail including Sprouts, to managing outreach and marketing for the City
                  of Austin&apos;s customer assistance programs, reaching 35,000+ households.
                </p>
                <p>
                  I hold a BS in Digital Marketing from FIT, graduating Magna Cum Laude, with a track record
                  of turning mission-driven work into measurable results. In my free time I run a postcard
                  exchange community and love to travel.
                </p>
              </div>

              <div className="mt-8 flex flex-row flex-wrap gap-3">
                <a
                  href="#contact"
                  className="text-xs tracking-widest uppercase bg-[#532D3A] text-white px-6 py-3.5 hover:bg-[#3D2029] transition-colors text-center rounded-lg whitespace-nowrap"
                >
                  Work With Me
                </a>
                <a
                  href="#work"
                  className="text-xs tracking-widest uppercase border border-[#532D3A] text-[#532D3A] px-6 py-3.5 hover:bg-[#532D3A] hover:text-white transition-colors text-center rounded-lg whitespace-nowrap"
                >
                  See Projects
                </a>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Stats row */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 md:pt-10 border-t border-[#E5E2DC]">
          {[
            { number: "15+", label: "Years of Experience" },
            { number: "Six-figure", label: "Retail Partnership Landed" },
            { number: "1,700", label: "AmeriCorps Hours" },
            { number: "Magna Cum Laude", label: "FIT Graduate" },
          ].map((stat, i) => (
            <Reveal key={stat.label} direction="up" delay={i * 80}>
              <div className="text-center md:text-left">
                <div
                  className="text-2xl md:text-4xl text-[#532D3A] mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-raleway)", fontWeight: 700 }}
                >
                  {stat.number}
                </div>
                <div className="text-[10px] md:text-xs tracking-widest uppercase text-[#6B6B6B]">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
