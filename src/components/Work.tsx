import Image from "next/image";
import Reveal from "@/components/Reveal";

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
    id: "ollie-and-otto",
    type: "image",
    label: "Founder",
    title: "Ollie & Otto",
    logo: "/images/ollie-and-otto.webp",
    coverLogo: true,
    description:
      "I founded Ollie & Otto, a social impact skincare company creating non-toxic personal care items for the entire family. For every product sold, the brand provided water to an individual in need, with contributions funding water wells in countries like Haiti and West Africa. It was a powerful example of how purpose and product can work together to create tangible, global impact.",
    tags: ["Social Impact", "CPG", "Founder", "Sustainability"],
    featured: false,
  },
  {
    id: "facebook",
    type: "image",
    label: "Advertising Operations",
    title: "Meta",
    logo: "/images/logos/meta-logo.svg",
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
    logo: "/images/coa.heic",
    coverLogo: true,
    description:
      "I managed outreach for the City of Austin's customer assistance programs, connecting vulnerable populations to vital resources. I built a community referral network from the ground up, reaching 35,000+ households across the city. This role deepened my commitment to translating public sector work into measurable, on-the-ground impact.",
    tags: ["Public Sector", "Community Outreach", "Multicultural Marketing"],
    featured: false,
  },
  {
    id: "americorps",
    type: "image",
    label: "AmeriCorps Alum",
    title: "AmeriCorps",
    logo: "/images/americorps.jpg",
    coverLogo: true,
    description:
      "As an AmeriCorps alum, I dedicated 1,700 hours of service to low-income communities on the Southside of Syracuse, NY. I worked directly with residents to address community needs and build local capacity. This experience grounded my career in grassroots organizing and community-centered impact.",
    tags: ["Community Organizing", "Public Service", "AmeriCorps"],
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
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16 gap-4">
            <div>
              <h2
                className="text-[#333333] leading-tight"
                style={{
                  fontFamily: "var(--font-raleway)",
                  fontWeight: 800,
                  fontSize: "clamp(1.9rem, 4vw, 3.25rem)",
                }}
              >
                Recent Work
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Featured project: good dirt */}
        {featured && (
          <Reveal direction="up" delay={50}>
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
                      src="/images/good-dirt-logo.png"
                      alt="good dirt®"
                      width={220}
                      height={72}
                      className="object-contain"
                    />
                  </div>
                  <div style={{ width: 32, height: 2, background: "#B8963E", marginBottom: "1.25rem" }} />
                  <p className="text-[#333333] text-sm leading-relaxed mb-6">
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
          </Reveal>
        )}

        {/* Other projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {rest.map((project, i) => (
            <Reveal key={project.id} direction="up" delay={i * 100}>
              <div className="border border-[#E5E2DC] overflow-hidden group hover:-translate-y-1 transition-transform duration-300 bg-[#F9F7F4] rounded-2xl h-full">
                <div className="h-36 md:h-40 relative overflow-hidden bg-white flex items-center justify-center px-8">
                  {project.logo && (
                    <Image
                      src={project.logo}
                      alt={project.title}
                      fill
                      className={"coverLogo" in project && project.coverLogo ? "object-cover" : "object-contain p-6"}
                    />
                  )}
                </div>
                <div className="p-5 md:p-6">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8963E] font-medium mb-2 block">
                    {project.label}
                  </span>
                  <h3
                    className="text-lg md:text-xl text-[#333333] mb-2"
                    style={{ fontFamily: "var(--font-raleway)", fontWeight: 700 }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[#333333] text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] tracking-wider uppercase bg-[#E5E2DC] text-[#333333] px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
