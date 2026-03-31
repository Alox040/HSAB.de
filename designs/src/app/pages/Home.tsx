import { SectionHero } from "../components/sections/SectionHero";
import { SectionServices } from "../components/sections/SectionServices";
import { SectionProcess } from "../components/sections/SectionProcess";
import { SectionTestimonials } from "../components/sections/SectionTestimonials";
import { SectionContact } from "../components/sections/SectionContact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full bg-[#fcfbf9]">
      <SectionHero />
      <SectionServices />
      <SectionProcess />
      <SectionTestimonials />
      <SectionContact />
    </div>
  );
}
