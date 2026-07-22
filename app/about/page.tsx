import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MissionVision from "@/components/sections/MissionVision";
import FounderSection from "@/components/sections/FounderSection";
import Values from "@/components/sections/Values";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="About us" title="Our story, vision & the people behind it">
        <p>
          [Placeholder — an opening paragraph introducing McKenzie Cambridge Preparatory Academy,
          its founding idea, and the community it hopes to serve.]
        </p>
      </PageHero>

      <MissionVision />

      <section className="soft">
        <div className="container">
          <div className="founder" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <ImagePlaceholder label="Classroom / learning photo" style={{ aspectRatio: "4 / 3" }} />
            <div>
              <div className="kicker">Educational philosophy</div>
              <h2>How we believe children learn best</h2>
              <p>
                [Placeholder — describe the educational philosophy that will guide teaching and
                learning at the school. What approaches, traditions, or research inform your model?]
              </p>
              <p>
                [Placeholder — a second paragraph on the day-to-day experience: class sizes,
                hands-on learning, the role of teachers, and what makes your approach distinct.]
              </p>
            </div>
          </div>
        </div>
      </section>

      <FounderSection id="founder" />

      <Values soft />
    </>
  );
}
