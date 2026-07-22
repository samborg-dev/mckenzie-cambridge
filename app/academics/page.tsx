import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Programs from "@/components/sections/Programs";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "Academics" };

export default function AcademicsPage() {
  return (
    <>
      <PageHero kicker="Academics" title="A rigorous, well-rounded education">
        <p>
          [Placeholder — an overview of the academic vision: the breadth of the curriculum, the
          balance of core subjects and specialties, and the outcomes students can expect.]
        </p>
      </PageHero>

      <Programs intro={false} />

      <section className="soft">
        <div className="container">
          <div className="founder" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <div className="kicker">Our approach</div>
              <h2>How learning works here</h2>
              <p>
                [Placeholder — describe the teaching model: small classes, inquiry-based learning,
                interdisciplinary projects, and the support structures that help every student thrive.]
              </p>
              <p>
                [Placeholder — a second paragraph on assessment, enrichment, and how the program
                grows with students from year to year.]
              </p>
            </div>
            <ImagePlaceholder label="Students / classroom photo" style={{ aspectRatio: "4 / 3" }} />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head center">
            <div className="kicker">College preparatory</div>
            <h2>Preparing students for what&apos;s next</h2>
            <p>[Placeholder — a note on college counseling and the destinations graduates will pursue.]</p>
          </div>
          <div className="gallery">
            <ImagePlaceholder label="University logo" />
            <ImagePlaceholder label="University logo" />
            <ImagePlaceholder label="University logo" />
            <ImagePlaceholder label="University logo" />
          </div>
        </div>
      </section>
    </>
  );
}
