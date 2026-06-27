import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

// Each section has rounded bottom corners and a lower z-index than the one above it.
// The next section has a negative top margin equal to the border-radius so it slides
// up behind the previous section's curved edge — matching Kiana's section divider style.
const CURVE = "rounded-b-[2.5rem]";
const OVERLAP = "-mt-[2.5rem]";

export default function Home() {
  return (
    <>
      <div className={`relative z-50 overflow-hidden ${CURVE}`}>
        <Hero />
      </div>
      <div className={`relative z-40 overflow-hidden ${CURVE} ${OVERLAP}`}>
        <Brands />
      </div>
      <div className={`relative z-30 overflow-hidden ${CURVE} ${OVERLAP}`}>
        <About />
      </div>
      <div className={`relative z-20 overflow-hidden ${CURVE} ${OVERLAP}`}>
        <Work />
      </div>
      <div className={`relative z-10 overflow-hidden ${OVERLAP}`}>
        <Contact />
      </div>
    </>
  );
}
