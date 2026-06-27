import Image from "next/image";
import Reveal from "@/components/Reveal";

const brands = [
  { name: "West Elm", logo: "/images/logos/west-elm.svg", width: 120 },
  { name: "Sprouts", logo: "/images/logos/sprouts.svg", width: 120 },
  { name: "Magnolia Home", logo: "/images/logos/magnolia-home.svg", width: 130 },
  { name: "Essence", logo: "/images/logos/essence.svg", width: 140 },
];

export default function Brands() {
  return (
    <section className="bg-white border-y border-[#E5E2DC] pt-16 pb-12 md:pt-16 md:pb-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <Reveal direction="fade">
          <p className="text-center text-xs tracking-[0.2em] uppercase text-[#6B6B6B] mb-8 md:hidden">
            Brands seen in
          </p>
        </Reveal>

        {/* Mobile: even 2×2 grid */}
        <div className="grid grid-cols-2 gap-y-7 gap-x-4 md:hidden">
          {brands.map((brand, i) => (
            <Reveal key={brand.name} direction="fade" delay={i * 100}>
              <div className="flex items-center justify-center opacity-50 grayscale">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.width}
                  height={40}
                  className="h-7 w-auto object-contain"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Desktop: single row */}
        <div className="hidden md:flex flex-row items-center justify-between">
          <Reveal direction="fade">
            <span className="text-xs tracking-[0.2em] uppercase text-[#6B6B6B] whitespace-nowrap shrink-0 mr-10">
              Brands seen in
            </span>
          </Reveal>
          {brands.map((brand, i) => (
            <Reveal key={brand.name} direction="fade" delay={i * 100}>
              <div className="opacity-50 hover:opacity-80 transition-opacity duration-300 grayscale">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.width}
                  height={40}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
