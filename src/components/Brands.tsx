import Image from "next/image";

const brands = [
  { name: "West Elm", logo: "/images/logos/west-elm.svg", width: 140 },
  { name: "Sprouts", logo: "/images/logos/sprouts.svg", width: 140 },
  { name: "Magnolia Home", logo: "/images/logos/magnolia-home.svg", width: 150 },
  { name: "Essence", logo: "/images/logos/essence.svg", width: 160 },
];

export default function Brands() {
  return (
    <section className="bg-white border-y border-[#E5E2DC] py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">
          <span className="text-xs tracking-[0.2em] uppercase text-[#6B6B6B] whitespace-nowrap md:w-40 shrink-0 text-center md:text-left">
            Brands seen in
          </span>
          <div className="w-px h-8 bg-[#E5E2DC] hidden md:block mx-8 shrink-0" aria-hidden />
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-0 w-full">
            {brands.map((brand) => (
              <div key={brand.name} className="opacity-50 hover:opacity-80 transition-opacity duration-300 grayscale">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.width}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
