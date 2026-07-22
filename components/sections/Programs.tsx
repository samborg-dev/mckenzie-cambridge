import { programs } from "@/lib/content";
import SectionCta from "@/components/SectionCta";

interface ProgramsProps {
  soft?: boolean;
  id?: string;
  limit?: number;
  intro?: boolean;
  cta?: { href: string; label: string };
}

export default function Programs({ soft, id, limit, intro = true, cta }: ProgramsProps) {
  const items = limit ? programs.slice(0, limit) : programs;
  return (
    <section id={id} className={soft ? "soft" : undefined}>
      <div className="container">
        <div className="section-head center">
          <div className="kicker">Academics</div>
          <h2>Programs &amp; specialties</h2>
          {intro && (
            <p>[Placeholder — a short intro to the range of academic programs and specialties the school will offer.]</p>
          )}
        </div>
        <div className="grid grid-3">
          {items.map(({ Icon, title, body }) => (
            <div className="card" key={title}>
              <div className="ic"><Icon size={24} /></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
        {cta && <SectionCta href={cta.href} label={cta.label} />}
      </div>
    </section>
  );
}
