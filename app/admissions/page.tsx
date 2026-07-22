import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AdmissionsSteps from "@/components/sections/AdmissionsSteps";
import InfoStrip from "@/components/sections/InfoStrip";
import SectionCta from "@/components/SectionCta";

export const metadata: Metadata = { title: "Admissions" };

export default function AdmissionsPage() {
  return (
    <>
      <PageHero kicker="Admissions" title="Joining our founding community">
        <p>
          [Placeholder — our admissions process is still being finalized. Below is how we anticipate
          it will work. Details are subject to change as plans develop.]
        </p>
      </PageHero>

      <AdmissionsSteps />

      <InfoStrip soft />

      <section>
        <div className="container">
          <div className="section-head center">
            <div className="kicker">Questions?</div>
            <h2>We&apos;re here to help</h2>
            <p>[Placeholder — reach out to our admissions team and we&apos;ll respond as soon as we can.]</p>
          </div>
          <SectionCta href="/contact" label="Contact admissions" />
        </div>
      </section>
    </>
  );
}
