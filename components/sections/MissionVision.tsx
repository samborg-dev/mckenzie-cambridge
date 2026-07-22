import { Target, Telescope } from "lucide-react";
import SectionCta from "@/components/SectionCta";

interface MissionVisionProps {
  soft?: boolean;
  id?: string;
  cta?: { href: string; label: string };
}

export default function MissionVision({ soft, id, cta }: MissionVisionProps) {
  return (
    <section id={id} className={soft ? "soft" : undefined}>
      <div className="container">
        <div className="section-head center">
          <div className="kicker">Our Purpose</div>
          <h2>Mission &amp; vision</h2>
        </div>
        <div className="grid grid-2">
          <div className="card">
            <div className="ic"><Target size={24} /></div>
            <h3>Mission statement</h3>
            <p>
              [Placeholder mission statement — one or two sentences describing what McKenzie
              Cambridge does every day and for whom. Replace this with the founder&apos;s own words.]
            </p>
          </div>
          <div className="card">
            <div className="ic"><Telescope size={24} /></div>
            <h3>Vision statement</h3>
            <p>
              [Placeholder vision statement — the future you&apos;re working toward and the impact
              you hope graduates will have on the world.]
            </p>
          </div>
        </div>
        {cta && <SectionCta href={cta.href} label={cta.label} variant="ghost" />}
      </div>
    </section>
  );
}
