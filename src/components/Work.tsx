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
    <section id="work" className="py-24 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="block text-[#2C5F4A] text-xs tracking-[0.2em] uppercase mb-4 font-medium">
              Selected Work
            </span>
            <h2
              className="text-4xl md:text-5xl text-[#1A1A1A] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Brands I&apos;ve Built &amp; Grown
            </h2>
          </div>
          <p className="text-[#6B6B6B] max-w-xs text-sm leading-relaxed">
            From startup to enterprise, turning good values into measurable brand growth.
          </p>
        </div>

        {/* Featured project: good dirt with video */}
        {featured && (
          <div className="mb-12 border border-[#E5E2DC] overflow-hidden group hover:-translate-y-1 transition-transform duration-300 bg-[#F9F7F4]">
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
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs tracking-[0.2em] uppercase text-[#B8963E] font-medium mb-3">
                  {featured.label}
                </span>
                <h3
                  className="text-3xl md:text-4xl text-[#1A1A1A] mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {featured.title}
                </h3>
                <div style={{ width: 32, height: 2, background: "#B8963E", marginBottom: "1.25rem" }} />
                <p className="text-[#4A4A4A] text-sm leading-relaxed mb-8">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-widest uppercase border border-[#2C5F4A] text-[#2C5F4A] px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other projects grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((project) => (
            <div
              key={project.id}
              className="border border-[#E5E2DC] overflow-hidden group hover:-translate-y-1 transition-transform duration-300 bg-[#F9F7F4]"
            >
              {/* Placeholder colored header */}
              <div
                className="h-40 flex items-center justify-center"
                style={{
                  background:
                    project.id === "amazon"
                      ? "#FF9900"
                      : project.id === "facebook"
                      ? "#1877F2"
                      : "#2C5F4A",
                }}
              >
                <span
                  className="text-white text-2xl font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {project.title}
                </span>
              </div>
              <div className="p-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8963E] font-medium mb-2 block">
                  {project.label}
                </span>
                <h3
                  className="text-xl text-[#1A1A1A] mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {project.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] tracking-wider uppercase bg-[#E5E2DC] text-[#4A4A4A] px-2 py-0.5"
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
