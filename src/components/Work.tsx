import Image from "next/image";

const projects = [
  {
    id: "good-dirt",
    type: "video",
    label: "Co-Founder & Brand Lead",
    title: "good dirt®",
    description:
      "Co-founded a functional mushroom beverage brand from concept to national retail, landing shelf space at Sprouts and other major retailers through strategic brand positioning, community marketing, and mission-aligned storytelling.",
    tags: ["Brand Strategy", "CPG", "National Retail", "Co-Founder"],
    featured: true,
  },
  {
    id: "amazon",
    type: "image",
    label: "Advertising Operations",
    title: "Amazon",
    logo: "/images/logos/amazon-logo.webp",
    description:
      "Managed advertising operations and campaign performance across Amazon's digital ad platform, optimizing spend and improving measurable outcomes at scale.",
    tags: ["Digital Advertising", "Campaign Ops", "Analytics"],
    featured: false,
  },
  {
    id: "facebook",
    type: "image",
    label: "Senior Advisor",
    title: "Meta / Facebook",
    logo: "/images/logos/meta-logo.png",
    description:
      "Provided strategic counsel on digital campaign performance and community outreach programs, bridging data-driven insights with mission-aligned goals.",
    tags: ["Social Media", "Strategy", "Community"],
    featured: false,
  },
  {
    id: "austin",
    type: "image",
    label: "Marketing & Outreach",
    title: "City of Austin",
    logo: "/images/logos/austin-logo.jpeg",
    description:
      "Led outreach and marketing for customer assistance programs, reaching 35,000+ low-income households through targeted multi-channel campaigns.",
    tags: ["Public Sector", "Community Outreach", "Multicultural Marketing"],
    featured: false,
  },
];

export default function Work() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-16 md:py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16 gap-4">
          <div>
            <span className="block text-[#2C5F4A] text-xs tracking-[0.2em] uppercase mb-3 font-medium">
              Selected Work
            </span>
            <h2
              className="text-[#1A1A1A] leading-tight"
              style={{
                fontFamily: "var(--font-raleway)",
                fontWeight: 800,
                fontSize: "clamp(1.9rem, 4vw, 3.25rem)",
              }}
            >
              Brands I&apos;ve Built &amp; Grown
            </h2>
          </div>
          <p className="text-[#6B6B6B] md:max-w-xs text-sm leading-relaxed">
            From startup to enterprise, turning good values into measurable brand growth.
          </p>
        </div>

        {/* Featured project: good dirt */}
        {featured && (
          <div className="mb-8 md:mb-12 border border-[#E5E2DC] overflow-hidden group hover:-translate-y-1 transition-transform duration-300 bg-[#F9F7F4] rounded-2xl">
            <div className="grid md:grid-cols-2">
              {/* Video */}
              <div className="relative aspect-video md:aspect-auto md:min-h-[420px] overflow-hidden bg-[#2C5F4A]">
                <video
                  src="/video/good-dirt.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#2C5F4A]/20" />
              </div>
              {/* Text */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                <span className="text-xs tracking-[0.2em] uppercase text-[#B8963E] font-medium mb-3">
                  {featured.label}
                </span>
                <div className="mb-4">
                  <Image
                    src="/images/good-dirt-logo.jpg"
                    alt="good dirt®"
                    width={200}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div style={{ width: 32, height: 2, background: "#B8963E", marginBottom: "1.25rem" }} />
                <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-widest uppercase border border-[#2C5F4A] text-[#2C5F4A] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other projects — 1 col phone, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {rest.map((project) => (
            <div
              key={project.id}
              className="border border-[#E5E2DC] overflow-hidden group hover:-translate-y-1 transition-transform duration-300 bg-[#F9F7F4] rounded-2xl"
            >
              <div className="h-36 md:h-40 relative overflow-hidden bg-white flex items-center justify-center px-8">
                <Image
                  src={project.logo!}
                  alt={project.title}
                  fill
                  className={`object-contain p-6 ${
                    project.id === "facebook" ? "object-top scale-[1.15]" : ""
                  }`}
                />
              </div>
              <div className="p-5 md:p-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8963E] font-medium mb-2 block">
                  {project.label}
                </span>
                <h3
                  className="text-lg md:text-xl text-[#1A1A1A] mb-2"
                  style={{ fontFamily: "var(--font-raleway)", fontWeight: 700 }}
                >
                  {project.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] tracking-wider uppercase bg-[#E5E2DC] text-[#4A4A4A] px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
