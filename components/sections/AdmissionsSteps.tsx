import { admissionsSteps } from "@/lib/content";
import SectionCta from "@/components/SectionCta";

interface AdmissionsStepsProps {
  soft?: boolean;
  limit?: number;
  cta?: { href: string; label: string };
}

export default function AdmissionsSteps({ soft, limit, cta }: AdmissionsStepsProps) {
  const steps = limit ? admissionsSteps.slice(0, limit) : admissionsSteps;
  return (
    <section className={soft ? "soft" : undefined}>
      <div className="container">
        <div className="section-head center">
          <div className="kicker">Admissions</div>
          <h2>How to join our founding families</h2>
          <p>[Placeholder — the admissions process is tentative. Outline the steps as they stand today.]</p>
        </div>
        <div className="steps" style={{ maxWidth: 780, margin: "0 auto" }}>
          {steps.map((step) => (
            <div className="step" key={step.title}>
              <div className="n" />
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
        {cta && <SectionCta href={cta.href} label={cta.label} />}
      </div>
    </section>
  );
}
