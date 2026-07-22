interface InfoStripProps {
  soft?: boolean;
}

export default function InfoStrip({ soft }: InfoStripProps) {
  return (
    <section className={soft ? "soft" : undefined}>
      <div className="container">
        <div className="section-head">
          <div className="kicker">At a glance</div>
          <h2>School information</h2>
        </div>
        <div className="info-grid">
          <div className="info"><div className="k">Grade levels</div><div className="v ph">[K – Grade 12]</div></div>
          <div className="info"><div className="k">Target opening</div><div className="v ph">[Fall 2026]</div></div>
          <div className="info"><div className="k">Location</div><div className="v ph">[City, State]</div></div>
          <div className="info"><div className="k">Enrollment</div><div className="v ph">[Now forming]</div></div>
        </div>
      </div>
    </section>
  );
}
