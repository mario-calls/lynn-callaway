import Image from "next/image";

const brands = [
  { name: "West Elm", logo: "/images/logos/west-elm.svg", width: 120 },
  { name: "Sprouts", logo: "/images/logos/sprouts.svg", width: 120 },
  { name: "Magnolia Home", logo: "/images/logos/magnolia-home.svg", width: 130 },
  { name: "Essence", logo: "/images/logos/essence.svg", width: 140 },
];

export default function Brands() {
  return (
    <section className="bg-white border-y border-[#E5E2DC] py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <p className="text-center md:text-left text-xs tracking-[0.2em] uppercase text-[#6B6B6B] mb-6 md:hidden">
          Brands seen in
        </p>
        <div className="flex flex-row flex-wrap justify-center items-center gap-x-8 gap-y-6 md:flex-nowrap md:gap-0 md:justify-between">
          <span className="hidden md:block text-xs tracking-[0.2em] uppercase text-[#6B6B6B] whitespace-nowrap shrink-0 mr-8">
            Brands seen in
          </span>
          {brands.map((brand) => (
            <div key={brand.name} className="opacity-50 hover:opacity-80 transition-opacity duration-300 grayscale shrink-0">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={brand.width}
                height={40}
                className="h-7 md:h-9 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
