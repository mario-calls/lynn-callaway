import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import Work from "@/components/Work";
import Press from "@/components/Press";
import Contact from "@/components/Contact";

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
      <div className={`relative z-[15] overflow-hidden ${CURVE} ${OVERLAP}`}>
        <Press />
      </div>
      <div className={`relative z-10 overflow-hidden ${OVERLAP}`}>
        <Contact />
      </div>
    </>
  );
}
